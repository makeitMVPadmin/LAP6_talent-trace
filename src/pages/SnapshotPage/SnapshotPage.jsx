import { useEffect, useRef, useState } from 'react';
import Snapshot from '@/components/Snapshot/Snapshot';
import { downloadSnapshotAsPNG } from '@/utils/downloadSnapshot';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useCards } from '@/context/AllSnapshotsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '@/context/UserDetailsContext';
import chevronLeft from '../../assets/icons/chevron-left.svg';
import downloadIcon from '../../assets/icons/download.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import addIcon from '../../assets/icons/add.svg';
import SnapshotTabs from '@/components/SnapshotTabs/SnapshotTabs';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
import { useLocation } from 'react-router-dom';

function SnapshotPage() {
  //adding modal to the SnapshotPage
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const snapshotRef = useRef(null);
  const { userId } = useParams();
  const navigate = useNavigate();

  const { cards, error, loading, handleDeleteCard } = useCards();
  const { user } = useUser();

  const [activeTab, setActiveTab] = useState(0);

  //checks for the query param in the url and card length to manage navigation active tab
  useEffect(() => {
    const showModal = location.search.includes('showModal=true');
    if (showModal) {
      setIsModalOpen(true);
      window.history.replaceState({}, '', window.location.pathname);
    }

    if (cards !== null && cards.length === 0) {
      navigate(`/users/${userId}/Profile`);
    } else if (cards !== null && activeTab >= cards.length) {
      setActiveTab(cards.length - 1);
    }
  }, [location.search, cards, activeTab, navigate, userId]);

  const SnapshotWindow = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error loading data: {error}</p>;
    }
    return (
      <Carousel className="max-w-[1200px] max-xl:hidden">
        <CarouselContent>
          {cards.map(function (card) {
            return (
              <CarouselItem
                key={card.cardId}
                className="flex self-center justify-center"
              >
                <Snapshot info={card} profile={user} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  };

  const SnapshotScroll = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error loading data: {error}</p>;
    }
    return (
      <div className="xl:hidden">
        <Snapshot info={cards[activeTab]} profile={user} />
      </div>
    );
  };

  // Create Button doesn't display if user already has 2 Snapshots
  const CreateButton = () => {
    if (loading) {
      return <></>;
    }
    if (error) {
      return <></>;
    }
    if (cards.length >= 2) {
      return <></>;
    } else {
      return (
        <div
          className="snapshotpage__add flex flex-col items-center h-[31px] xl:h-[50px] cursor-pointer"
          onClick={() => navigate(`/users/${userId}/CreateSnapshot`)}
        >
          <img src={addIcon} className="snapshotpage__icon max-xl:h-[18px]" />
          <p className="snapshotpage__label font-bold text-[0.5rem] xl:text-[0.875rem] text-secondary">
            Create
          </p>
        </div>
      );
    }
  };

  //handleDeleteConfirmation function
  const handleDeleteConfirmation = async (cardId) => {
    const confirmed = await new Promise((resolve) => {
      confirmAlert({
        title: 'Confirm to Delete',
        message: 'Are you sure you want to delete this card?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => resolve(true),
          },
          {
            label: 'No',
            onClick: () => resolve(false),
          },
        ],
      });
    });

    if (confirmed) {
      try {
        await handleDeleteCard(cardId);
      } catch (error) {
        console.error(`Error deleting card with Id: ${cardId}`, error);
        toast('Failed to delete snapshot. Please try again.', {
          description: 'An error occurred while deleting.',
          level: 'error',
          duration: 5000,
        });
      }
    }
  };

  return (
    <>
      <Toaster />
      <div className="snapshotpage bg-[#FFFAEE] flex flex-col items-center pb-[10rem] xl:pb-[13rem]">
        {/* PREVIOUS BUTTON */}
        <button
          className="snapshotpage__back w-[353px] xl:w-[1200px] flex flex-row mt-[2rem] mb-[1.25rem] xl:my-[2.5rem] gap-[2px] justify-start"
          onClick={() => navigate(`/users/${userId}/Profile`)}
        >
          <img src={chevronLeft} className="snapshotpage__icon" />
          <p className="font-medium text-[0.875rem] text-secondary">Previous</p>
        </button>
        {/* MOBILE TABS */}
        <SnapshotTabs
          tab={activeTab}
          change={setActiveTab}
          cards={cards}
          loading={loading}
          error={error}
        />
        {/* BUTTON BANNER */}
        <div className="snapshotpage__banner w-[353px] xl:w-[1200px] flex flex-row justify-end gap-[22px] mb-[0.5rem] xl:mb-[1rem] items-baseline">
          {/* DOWNLOAD BUTTON */}
          <div
            className="snapshotpage__download flex flex-col items-center h-[31px] xl:h-[50px] cursor-pointer"
            onClick={() => downloadSnapshotAsPNG(snapshotRef)}
          >
            <img
              src={downloadIcon}
              className="snapshotpage__icon max-xl:h-[14px]"
            />
            <p className="snapshotpage__label font-bold text-[0.5rem] xl:text-[0.875rem] text-secondary">
              Download
            </p>
          </div>
          {/* DELETE BUTTON */}
          <div
            className="snapshotpage__delete flex flex-col items-center h-[31px] xl:h-[50px] cursor-pointer"
            onClick={() => handleDeleteConfirmation(cards[activeTab].cardId)}
          >
            <img
              src={deleteIcon}
              className="snapshotpage__icon max-xl:h-[18px]"
            />
            <p className="snapshotpage__label font-bold text-[0.5rem] xl:text-[0.875rem] text-secondary">
              Delete
            </p>
          </div>
          {/* CREATE BUTTON */}
          {CreateButton()}
          {/* <div className="snapshotpage__add flex flex-col items-center h-[31px] xl:h-[50px] cursor-pointer"
            onClick={() => navigate(`/users/${userId}/CreateSnapshot`)}>
            <img src={addIcon} className="snapshotpage__icon max-xl:h-[18px]" />
            <p className="snapshotpage__label font-bold text-[0.5rem] xl:text-[0.875rem] text-secondary">
              Create
            </p>
          </div> */}
        </div>

        {/* Attach ref to the Snapshot component */}
        <div ref={snapshotRef}>
          {SnapshotWindow()}
          {SnapshotScroll()}
        </div>
      </div>
      <SuccessModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default SnapshotPage;
