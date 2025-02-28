import './Snapshot.css';
import SnapMain from '../SnapMain/SnapMain';
import SnapBox from '../SnapBox/SnapBox';
import SnapHead from '../SnapHead/SnapHead';

function Snapshot({ info, profile }) {
  try {
    return (
      <div className="snapshot xl:h-[900px] xl:w-[1200px] xl:border xl:border-b-2 xl:border-r-2 xl:border-[#AABFCC] xl:rounded-[20px] flex flex-col max-xl:gap-[20px] xl:flex-row xl:justify-between xl:bg-[#F6DD8A]">
        {/* Mobile Lead Column  */}
        <SnapHead id={profile} badges={info.skills} content={info.answers[2]} />
        {/* Left Column */}
        <div className="snapshot__left xl:ml-[32px] flex flex-col gap-[20px] xl:justify-center xl:gap-[16px]">
          {/* Left Top Box */}
          <div className="snapshot__frame w-[353px] xl:h-[415px] xl:w-[289px] bg-[#FFF1C5] xl:bg-[#FFF8E1] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col">
            <SnapBox content={info.answers[0]} />
          </div>
          {/* Left Bottom Box */}
          <div className="snapshot__frame w-[353px] xl:h-[415px] xl:w-[289px] bg-[#FFF1C5] xl:bg-[#FFF8E1] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col">
            <SnapBox content={info.answers[1]} />
          </div>
        </div>
        {/* Center Columns */}
        <SnapMain id={profile} badges={info.skills} content={info.answers[2]} />
        {/* Right Column  */}
        <div className="snapshot__right xl:mr-[32px] flex flex-col justify-center gap-[16px]">
          {/* Right Top Box */}
          <div className="snapshot__frame w-[353px] xl:h-[415px] xl:w-[289px] bg-[#FFF1C5] xl:bg-[#FFF8E1] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col">
            <SnapBox content={info.answers[3]} />
          </div>
          {/* Right Bottom Box */}
          <div className="snapshot__frame w-[353px] xl:h-[415px] xl:w-[289px] bg-[#FFF1C5] xl:bg-[#FFF8E1] border border-b-4 border-r-4 border-[#CCB774] rounded-[24px] shadow-lg flex flex-col">
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
