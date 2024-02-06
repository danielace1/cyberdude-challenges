import PropTypes from "prop-types";

const BtnWarning = (props) => {
  return (
    <div>
      <button className="bg-yellow-400 px-5 py-2 rounded hover:cursor-pointer hover:bg-yellow-500 text-black ">
        {props.text}
      </button>
    </div>
  );
};

BtnWarning.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnWarning;
