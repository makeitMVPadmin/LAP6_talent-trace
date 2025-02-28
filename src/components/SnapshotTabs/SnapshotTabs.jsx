/* eslint-disable react/prop-types */
/* Above line prevents eslint from triggering pre-commit errors */

function SnapshotTabs({ tab, change, cards, loading, error }) {
  if (loading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }

  const toggleTab = () => {
    if (tab === 1) {
      change(0);
    } else if (tab === 0) {
      change(1);
    }
  };

  const SnapshotTab1 = () => {
    if (tab === 0) {
      return (
        <div className="snapshotpage__active-tab w-[108px] bg-[#0264D4] rounded-[15px] text-white text-xs font-semibold flex justify-center items-center cursor-pointer">
          Snapshot 1
        </div>
      );
    } else if (tab === 1) {
      return (
        <div
          className="snapshotpage__inactive-tab text-[#0264D4] text-xs font-semibold flex justify-center items-center grow cursor-pointer"
          onClick={toggleTab}
        >
          Snapshot 1
        </div>
      );
    }
  };

  const SnapshotTab2 = () => {
    if (tab === 1) {
      return (
        <div className="snapshotpage__active-tab w-[108px] bg-[#0264D4] rounded-[15px] text-white text-xs font-semibold flex justify-center items-center cursor-pointer">
          Snapshot 2
        </div>
      );
    } else if (tab === 0) {
      return (
        <div
          className="snapshotpage__inactive-tab text-[#0264D4] text-xs font-semibold flex justify-center items-center grow cursor-pointer"
          onClick={toggleTab}
        >
          Snapshot 2
        </div>
      );
    }
  };

  if (cards.length === 0) {
    return <></>;
  }

  if (cards.length === 1) {
    return (
      <>
        <div className="snapshotpage__tabs xl:hidden bg-[#FFF8E1] w-[203px] h-[29px] rounded-[15px] mb-[1.25rem] flex flex-row">
          <div className="snapshotpage__active-tab w-[203px] bg-[#0264D4] rounded-[15px] text-white text-xs font-semibold flex justify-center items-center cursor-pointer">
            Snapshot 1
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="snapshotpage__tabs xl:hidden bg-[#FFF8E1] w-[203px] h-[29px] rounded-[15px] mb-[1.25rem] flex flex-row">
        {SnapshotTab1()}
        {SnapshotTab2()}
      </div>
    </>
  );
}

export default SnapshotTabs;
