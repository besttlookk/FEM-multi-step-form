import PropsType from "prop-types";

const Information = ({ heading, subheading }) => {
  return (
    <div className="information">
      <p>{heading}</p>
      <p>{subheading}</p>
    </div>
  );
};

export default Information;

Information.propTypes = {
  heading: PropsType.string.isRequired,
  subheading: PropsType.string.isRequired,
};
