import './Snapshot.css';
import SnapMain from '../SnapMain/SnapMain';
import SnapBox from '../SnapBox/SnapBox';

function Snapshot({ info, profile }) {
  try {
    return (
      <div className="snapshot h-[900px] w-[1200px] border border-b-2 border-r-2 border-slate-300 rounded-[20px] flex flex-row justify-between bg-primary">
        {/* Left Column */}
        <div className="snapshot__left ml-[22px] flex flex-col justify-center">
          {/* Left Top Box */}
          <div className="snapshot__frame h-[406px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_2.png')] flex flex-col">
            <SnapBox content={info.answers[0]} />
          </div>
          {/* Left Bottom Box */}
          <div className="snapshot__frame h-[416px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_3.png')] flex flex-col">
            <SnapBox content={info.answers[1]} />
          </div>
        </div>
        {/* Center Columns */}
        <SnapMain id={profile} badges={info.skills} content={info.answers[2]} />
        {/* Right Column  */}
        <div className="snapshot__right mr-[22px] flex flex-col justify-center">
          {/* Right Top Box */}
          <div className="snapshot__frame h-[406px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_2.png')] flex flex-col">
            <SnapBox content={info.answers[3]} />
          </div>
          {/* Right Bottom Box */}
          <div className="snapshot__frame h-[416px] w-[309px] bg-[url('/src/assets/images/snapshot_box_frame_3.png')] flex flex-col">
            <SnapBox content={info.answers[4]} />
          </div>
        </div>
      </div>
    );
  } catch {
    return <></>;
  }
}

export default Snapshot;
