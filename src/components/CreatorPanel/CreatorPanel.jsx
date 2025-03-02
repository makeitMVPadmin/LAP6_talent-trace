/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

import cameraEnhance from '../../assets/images/camera_enhance.png';
import { useNavigate, useParams } from 'react-router-dom';

function CreatorPanel({ display }) {
  const navigate = useNavigate();
  const { userId } = useParams();

  return (
    <>
      <button
        className={
          'profile__view w-full rounded-2xl xl:rounded-3xl border border-b-2 border-r-2 xl:border-b-4 xl:border-r-4 box-border border-[#07548f] text-white shadow-md bg-[#0264d4] mt-[1rem] md:mt-0 ' +
          display
        }
        onClick={() => navigate(`/SnapshotInfo/${userId}`)}
      >
        <div className="profile__view-row flex flex-row p-[1rem] xl:p-[2rem] gap-[1rem] xl:gap-[2.25rem]">
          <div className="min-w-[35px]  xl:min-w-[77px] flex flex-col justify-center">
            <img
              src={cameraEnhance}
              className="profile__view-icon size-[35px] xl:size-[77px]"
            />
          </div>

          <div className="profile__view-text flex flex-col xl:gap-[4px] grow">
            <div className="profile__view-top flex flex-row justify-between items-center">
              <h2 className="profile__view-title xl:text-4xl font-semibold font-sans">
                Create my Snapshot
              </h2>
              <img
                src="/src/assets/icons/chevron-right.svg"
                className="profile__view-arrow h-[12px] xl:h-auto"
              />
            </div>
            <p className="profile__view-body font-medium text-[0.625rem] xl:text-[1rem] xl:pr-[4rem] text-left font-sans max-xl:hidden">
              Turn your skills and achievements into a standout snapshot, making
              it effortless for employers to see what you’re all about!
            </p>
            <p className="profile__view-body font-medium text-[0.625rem] xl:text-[1rem] xl:pr-[4rem] text-left font-sans xl:hidden">
              Turn your skills into a standout snapshot
            </p>
          </div>
        </div>
      </button>

      {/* <Card
        className={
          'profile__creator rounded-[1.5rem] flex flex-col items-center mt-[1rem] md:mt-0 ' +
          display
        }
      >
        <CardHeader className="profile__creator-header font-serif font-semibold xl:text-[2.25rem] max-xl:p-4 max-xl:pb-2">
          Capture Your Skills in a Snapshot
        </CardHeader>
        <CardContent className="profile__creator-main max-w-[20rem] xl:w-[34.875rem] xl:max-w-[35rem] max-xl:px-4 max-xl:pb-2 text-center font-medium max-xl:text-[0.625rem]">
          <p className="profile__creator-body">
            Transform your professional journey into a standout snapshot.
          </p>
          <p className="profile__creator-body">
            Effortlessly showcase your skills and achievements, making it easier
            for employers to recognize your value and potential
          </p>
        </CardContent>
        <CardFooter className="max-xl:px-4 max-xl:pb-4">
          <button
            className="profile__creator-button bg-blue-600 h-[1.875rem] w-[7rem] xl:h-[2.5rem] xl:w-[14.5rem] text-[0.5rem] xl:text-[1.125rem] shadow-md shadow-gray-500 font-semibold rounded-[5px] xl:rounded-[0.625rem] text-white shadow"
            onClick={() => navigate('/SnapshotInfo')}
          >
            Create my Snapshot
          </button>
        </CardFooter>
      </Card> */}
    </>
  );
}

export default CreatorPanel;
