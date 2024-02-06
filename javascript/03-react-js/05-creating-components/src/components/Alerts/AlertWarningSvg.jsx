import PropTypes from "prop-types";

const AlertWarningSvg = (props) => {
  return (
    <div className="flex items-center space-x-3 bg-yellow-300 bg-opacity-30 p-6 text-yellow-600 border border-yellow-300 text-md rounded">
      <div>{props.children}</div>

      <h2>{props.text}</h2>
    </div>
  );
};

AlertWarningSvg.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AlertWarningSvg;
