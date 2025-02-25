/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';
import { useNavigate } from 'react-router-dom';

function CreatorPanel({ display }) {
  const navigate = useNavigate();
  return (
    <>
      <Card
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
      </Card>
    </>
  );
}

export default CreatorPanel;
