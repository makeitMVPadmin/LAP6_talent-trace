import { useState } from 'react';
import { Button } from '@/components/ui/button';
import snapshotimg from '../../assets/images/snapshot.png';
import Tutorial from '../Tutorial/Tutorial';
import './Learn.scss';

function Learn() {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <div>
      {showTutorial ? (
        <Tutorial />
      ) : (
        <div className="learn">
          <div className="learn__instructions">
            <h2 className="learn__instructions-title">
              Learn how to highlight your skills through our snapshot
            </h2>
            <Button
              className="learn__instructions-btn"
              onClick={() => setShowTutorial(true)} // Switch to slideshow
            >
              Start Demo
            </Button>
          </div>
          <div className="learn__visuals">
            <img
              className="learn__visuals-sample"
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
