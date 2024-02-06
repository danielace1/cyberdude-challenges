import PropTypes from "prop-types";

const AlertWarning = (props) => {
  return (
    <div className=" bg-yellow-300 bg-opacity-30 p-6 text-yellow-600 border border-yellow-300 text-md rounded">
      <h2>{props.text}</h2>
    </div>
  );
};

AlertWarning.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AlertWarning;
