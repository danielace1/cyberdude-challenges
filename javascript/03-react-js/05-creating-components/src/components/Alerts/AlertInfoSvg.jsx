import PropTypes from "prop-types";

const AlertInfoSvg = (props) => {
  return (
    <div className="flex items-center space-x-2 bg-sky-300 bg-opacity-35 p-6 text-sky-500 border border-sky-300 text-md rounded">
      <div>{props.children}</div>

      <h2>{props.text}</h2>
    </div>
  );
};

AlertInfoSvg.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AlertInfoSvg;
