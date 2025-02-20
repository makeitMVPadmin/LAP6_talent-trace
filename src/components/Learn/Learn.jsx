import { useState } from 'react';
import { Button } from '@/components/ui/button';
import snapshotimg from '../../assets/images/snapshot.png';
import Tutorial from '../Tutorial/Tutorial';

function Learn() {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <div className="w-full flex items-center justify-center bg-blue-700 px-4 md:px-0">
      {showTutorial ? (
        <Tutorial />
      ) : (
        <div className="flex flex-col md:flex-row items-center md:items-stretch w-full max-w-screen-2xl mx-auto">
          {/* Instructions Section */}
          <div className="flex flex-col justify-center bg-blue-700 text-white p-10 md:p-20 w-full md:w-1/2 md:border md:border-blue-500">
            <h2 className="text-2xl md:text-5xl font-[Fraunces] leading-snug tracking-tight text-left">
              Learn more about how to highlight your skills through our snapshot
            </h2>
            <Button
              className="bg-white text-blue-900 font-semibold py-3 px-6 mt-4 md:mt-8 rounded-lg shadow-md w-full max-w-44 mx-0"
              onClick={() => setShowTutorial(true)}
            >
              Start Demo
            </Button>
          </div>

          {/* Visuals Section */}
          <div className="flex justify-center items-center bg-blue-700 md:bg-white p-4 md:p-16 w-full md:w-1/2 md:border md:border-blue-500">
            <img
              className="w-full max-w-md md:max-w-3xl h-auto rounded-[20px] md:rounded-none"
              src={snapshotimg}
              alt="sample snapshot"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Learn;
