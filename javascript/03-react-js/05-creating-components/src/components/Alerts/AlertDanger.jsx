import PropTypes from "prop-types";

const AlertDanger = (props) => {
  return (
    <div className="bg-red-300 bg-opacity-35 p-6 text-red-500 border border-red-300 text-md rounded">
      <h2>{props.text}</h2>
    </div>
  );
};

AlertDanger.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AlertDanger;
