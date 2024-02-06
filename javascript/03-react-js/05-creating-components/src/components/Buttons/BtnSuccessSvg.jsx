import PropTypes from "prop-types";

const BtnSuccessSvg = (props) => {
  return (
    <div>
      <button className="flex items-center space-x-2 bg-green-600 px-5 py-2 rounded hover:cursor-pointer hover:bg-green-700 text-white">
        <div>{[props.children]}</div>
        <span>{props.text}</span>
      </button>
    </div>
  );
};

BtnSuccessSvg.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BtnSuccessSvg;
