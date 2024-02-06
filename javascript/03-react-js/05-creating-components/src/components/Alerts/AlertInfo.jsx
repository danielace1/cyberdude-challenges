import PropTypes from "prop-types";

const AlertInfo = (props) => {
  return (
    <div className="bg-sky-300 bg-opacity-35 p-6 text-sky-500 border border-sky-300 text-md rounded">
      <h2>{props.text}</h2>
    </div>
  );
};

AlertInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AlertInfo;
