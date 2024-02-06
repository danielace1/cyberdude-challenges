import PropTypes from "prop-types";

const AlertLight = (props) => {
  return (
    <div className="bg-gray-200 bg-opacity-35 p-6 text-gray-500 border border-gray-200 text-md rounded">
      <h2>{props.text}</h2>
    </div>
  );
};

AlertLight.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AlertLight;
