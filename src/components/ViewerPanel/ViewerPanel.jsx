function ViewerPanel() {
  return (
    <>
      <div className="profile__view rounded-3xl border border-b-4 border-r-4 box-border border-sky-800 text-white shadow-md bg-[#0264d4]">
        <div className="profile__view-row flex flex-row p-[2.5rem] gap-[1.25rem]">
          <img
            src="/src/assets/images/camera_enhance.png"
            className="profile__view-icon"
          />
          <div className="profile__view-text flex flex-col gap-[4px] grow">
            <div className="profile__view-top flex flex-row justify-between">
              <h2 className="profile__view-title text-4xl font-semibold font-sans">
                View my snapshot
              </h2>
              <img
                src="/src/assets/icons/chevron-right.svg"
                className="profile__view-arrow"
              />
            </div>
            <p className="profile__view-body font-medium text-[1.125rem] font-sans">
              share your snapshot to increase your hiring chances
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewerPanel;
