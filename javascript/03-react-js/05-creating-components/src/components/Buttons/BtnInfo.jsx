import PropTypes from "prop-types";

const BtnInfo = (props) => {
  return (
    <div>
      <button className="bg-sky-400 px-5 py-2 rounded hover:cursor-pointer hover:bg-sky-500 text-black ">
        {props.text}
      </button>
    </div>
  );
};

BtnInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnInfo;
