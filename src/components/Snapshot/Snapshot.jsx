import './Snapshot.css';
import SnapMain from '../SnapMain/SnapMain';
import SnapBox from '../SnapBox/SnapBox';

function Snapshot({ info, profile }) {
  try {
    return (
      <div className="snapshot h-[900px] w-[1200px] border border-b-2 border-r-2 border-[#AABFCC] rounded-[20px] flex flex-row justify-between bg-[#F6DD8A]">
        {/* Left Column */}
        <div className="snapshot__left ml-[32px] flex flex-col justify-center gap-[16px]">
          {/* Left Top Box */}
          <div className="snapshot__frame h-[415px] w-[289px] bg-[#FFF8E1] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col">
            <SnapBox content={info.answers[0]} />
          </div>
          {/* Left Bottom Box */}
          <div className="snapshot__frame h-[415px] w-[289px] bg-[#FFF8E1] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col">
            <SnapBox content={info.answers[1]} />
          </div>
        </div>
        {/* Center Columns */}
        <SnapMain id={profile} badges={info.skills} content={info.answers[2]} />
        {/* Right Column  */}
        <div className="snapshot__right mr-[32px] flex flex-col justify-center gap-[16px]">
          {/* Right Top Box */}
          <div className="snapshot__frame h-[415px] w-[289px] bg-[#FFF8E1] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col">
            <SnapBox content={info.answers[3]} />
          </div>
          {/* Right Bottom Box */}
          <div className="snapshot__frame h-[415px] w-[289px] bg-[#FFF8E1] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col">
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
