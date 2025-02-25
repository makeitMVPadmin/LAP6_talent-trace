/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

import cameraEnhance from '../../assets/images/camera_enhance.png';
import { useNavigate } from 'react-router-dom';

function ViewerPanel({ display }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={
          'profile__view w-full rounded-3xl border border-b-4 border-r-4 box-border border-sky-800 text-white shadow-md bg-[#0264d4] mt-[1rem] md:mt-0 ' +
          display
        }
        onClick={() => navigate('/users/:userId/cards/:cardId')}
      >
        <div className="profile__view-row flex flex-row p-[1rem] xl:p-[2.5rem] gap-[1.25rem]">
          <img
            src={cameraEnhance}
            className="profile__view-icon size-[35px] xl:size-auto"
          />
          <div className="profile__view-text flex flex-col xl:gap-[4px] grow">
            <div className="profile__view-top flex flex-row justify-between items-center">
              <h2 className="profile__view-title xl:text-4xl font-semibold font-sans">
                View my snapshot
              </h2>
              <img
                src="/src/assets/icons/chevron-right.svg"
                className="profile__view-arrow h-[12px] xl:h-auto"
              />
            </div>
            <p className="profile__view-body font-medium text-[0.625rem] xl:text-[1.125rem] text-left font-sans">
              share your snapshot to increase your hiring chances
            </p>
          </div>
        </div>
      </button>
    </>
  );
}

export default ViewerPanel;
