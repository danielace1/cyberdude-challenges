import PropTypes from "prop-types";

const BtnLight = (props) => {
  return (
    <div>
      <button className="bg-gray-200 px-5 py-2 rounded hover:cursor-pointer hover:bg-gray-300 text-black ">
        {props.text}
      </button>
    </div>
  );
};

BtnLight.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnLight;
