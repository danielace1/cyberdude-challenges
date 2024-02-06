import PropTypes from "prop-types";

const AlertPrimary = (props) => {
  return (
    <div className="bg-blue-400 bg-opacity-35 p-6 text-blue-600 border border-blue-400 text-md rounded">
      <h2>{props.text}</h2>
    </div>
  );
};

AlertPrimary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AlertPrimary;
