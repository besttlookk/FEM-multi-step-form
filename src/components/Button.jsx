import PropTypes from "prop-types";

const Button = ({ className, handleClick, text, type }) => {
  return (
    <button className={className} type={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
