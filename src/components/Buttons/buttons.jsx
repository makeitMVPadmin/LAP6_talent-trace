import { useState } from 'react';
import classNames from 'classnames';

function Buttons() {
  // const [selectedBtn, setSelectedBtn] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="grid grid-cols-3 w-full text-center">
      <button
        className={classNames(
          'relative mt-4 px-4 py-2 rounded-md transition-all duration-200',
          {
            'bg-gray-400 text-gray-700 cursor-not-allowed': isDisabled, // Disabled styles
            'bg-blue-500 hover:bg-blue-600 text-white': !isDisabled, // Primary styles
          }
        )}
        type="button"
        disabled={isDisabled} // Disabling the button when `isDisabled` is true
      >
        Submit!
      </button>

      {/* Toggle button to enable/disable the submit button */}
      <button
        className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => setIsDisabled(!isDisabled)}
      >
        Toggle Enable/Disable
      </button>
    </div>
  );
}

export default Buttons;
