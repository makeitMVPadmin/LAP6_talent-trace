import PropTypes from 'prop-types';
import classNames from 'classnames';

function Buttons({ variant, children }) {
  const buttonClass = classNames(
    'relative mt-4 px-4 py-2 rounded-md transition-all duration-200',
    {
      'bg-gray-400 text-gray-700 cursor-not-allowed': variant === 'disabled', // Disabled styles
      'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary', // Primary styles
    }
  );

  return (
    <button
      className={buttonClass}
      type="button"
      disabled={variant === 'disabled'}
    >
      {children}
    </button>
  );
}

Buttons.propTypes = {
  variant: PropTypes.oneOf(['primary', 'disabled']).isRequired, // Ensure only 'primary' or 'disabled' are used
  children: PropTypes.node.isRequired, // Ensure children are passed
};

export default Buttons;
