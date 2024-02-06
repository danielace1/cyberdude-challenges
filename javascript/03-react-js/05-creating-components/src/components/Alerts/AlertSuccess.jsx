import PropTypes from "prop-types";

const AlertSuccess = (props) => {
  return (
    <div className="bg-green-300 bg-opacity-35 p-6 text-green-600 border border-green-300 text-md rounded">
      <h2>{props.text}</h2>
    </div>
  );
};

AlertSuccess.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AlertSuccess;
