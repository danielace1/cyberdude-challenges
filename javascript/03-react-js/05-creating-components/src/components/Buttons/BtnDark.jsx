import PropTypes from "prop-types";

const BtnDark = (props) => {
  return (
    <div>
      <button className="bg-gray-800 px-5 py-2 rounded hover:cursor-pointer hover:bg-gray-700 text-white ">
        {props.text}
      </button>
    </div>
  );
};

BtnDark.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnDark;
