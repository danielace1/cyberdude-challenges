import PropTypes from "prop-types";

const AlertDark = (props) => {
  return (
    <div className="bg-gray-500 bg-opacity-35 p-6 text-gray-500 border border-gray-400 text-md rounded">
      <h2>{props.text}</h2>
    </div>
  );
};

AlertDark.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AlertDark;
