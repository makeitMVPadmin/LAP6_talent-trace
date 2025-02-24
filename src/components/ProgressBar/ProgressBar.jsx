import PropTypes from 'prop-types';
function ProgressBar({ isProgressing }) {
  return (
    <div className="w-[19.313rem] h-[0.438rem] justify-start items-center gap-[0.563rem] inline-flex">
      <div className="w-[9.375rem] h-[0.438rem] bg-customProgressYellow rounded-[1.25rem]"></div>
      <div
        className={`w-[9.375rem] h-[0.438rem] ${isProgressing ? 'bg-customProgressYellow' : 'bg-customProgressGray'} rounded-[1.25rem]`}
      ></div>
    </div>
  );
}

ProgressBar.PropTypes = {
  isProgressing: PropTypes.bool.isRequired,
};

export default ProgressBar;
