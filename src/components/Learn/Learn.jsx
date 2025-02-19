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
          <div className="flex flex-col justify-center bg-blue-700 text-white p-16 md:p-20 md:w-1/2 border border-blue-500">
            <h2 className="text-3xl md:text-6xl font-[Fraunces] leading-snug tracking-tight text-center md:text-left">
              Learn more about how to highlight your skills through our snapshot
            </h2>
            <Button
              className="bg-white text-blue-900 font-semibold py-3 px-6 mt-6 md:mt-8 rounded-lg shadow-md w-44 mx-auto md:mx-0"
              onClick={() => setShowTutorial(true)}
            >
              Start Demo
            </Button>
          </div>

          {/* Visuals Section */}
          <div className="flex justify-center items-center bg-white border border-blue-500 p-6 md:p-16 md:w-1/2">
            <img
              className="w-full max-w-3xl h-auto"
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
