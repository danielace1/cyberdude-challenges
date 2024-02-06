import PropTypes from "prop-types";

const AlertSecondary = (props) => {
  return (
    <div className="bg-gray-400 bg-opacity-35 p-6 text-gray-600 border border-gray-400 text-md rounded">
      <h2>{props.text}</h2>
    </div>
  );
};

AlertSecondary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AlertSecondary;
