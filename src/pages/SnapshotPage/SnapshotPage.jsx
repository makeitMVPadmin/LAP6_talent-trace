import { useRef, useState } from 'react';
import Snapshot from '@/components/Snapshot/Snapshot';
import { downloadSnapshotAsPDF } from '@/utils/downloadSnapshot';
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

function SnapshotPage() {
  const snapshotRef = useRef(null);
  const { userId } = useParams();
  const navigate = useNavigate();

  const { cards, error, loading } = useCards();
  const { user } = useUser();

  const [activeTab, setActiveTab] = useState(0);

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

  return (
    <>
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
            onClick={() => downloadSnapshotAsPDF(snapshotRef)}
          >
            <img
              src={downloadIcon}
              className="snapshotpage__icon max-xl:h-[14px]"
            />
            <p className="snapshotpage__label font-bold text-[0.5rem] xl:text-[0.875rem] text-secondary">
              Download
            </p>
          </div>
          <div className="snapshotpage__delte flex flex-col items-center h-[31px] xl:h-[50px]">
            <img
              src={deleteIcon}
              className="snapshotpage__icon max-xl:h-[18px]"
            />
            <p className="snapshotpage__label font-bold text-[0.5rem] xl:text-[0.875rem] text-secondary">
              Delete
            </p>
          </div>
          <div className="snapshotpage__add flex flex-col items-center h-[31px] xl:h-[50px]">
            <img src={addIcon} className="snapshotpage__icon max-xl:h-[18px]" />
            <p className="snapshotpage__label font-bold text-[0.5rem] xl:text-[0.875rem] text-secondary">
              Create
            </p>
          </div>
        </div>

        {/* Attach ref to the Snapshot component */}
        <div ref={snapshotRef}>
          {SnapshotWindow()}
          {SnapshotScroll()}
        </div>
      </div>
    </>
  );
}

export default SnapshotPage;
