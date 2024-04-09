import PropTypes from "prop-types";

const Input = ({ label, type, placeholder, name, error, value, onChange }) => {
  return (
    <div className="input">
      <div className="input__top">
        <label htmlFor={label}>{label}</label>
        {error && <p className="input__error">{error}</p>}
      </div>
      <input
        type={type}
        className="input__element"
        placeholder={`e.g. ${placeholder}`}
        id={label}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
