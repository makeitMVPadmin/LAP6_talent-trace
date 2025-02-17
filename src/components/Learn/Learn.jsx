import { Button } from '@/components/ui/button';
import snapshotimg from '../../assets/images/snapshot.png';
import './Learn.scss';

function Learn() {
  return (
    <div className="learn">
      <div className="learn__instructions">
        <h2 className="learn__instructions-title">
          Learn how to highlight your skills through our snapshot
        </h2>
        <Button className="learn__instructions-btn">Start Demo</Button>
      </div>
      <div className="learn__visuals">
        <img
          className="learn__visuals-sample"
          src={snapshotimg}
          alt="sample snapshot"
        />
      </div>
    </div>
  );
}

export default Learn;
