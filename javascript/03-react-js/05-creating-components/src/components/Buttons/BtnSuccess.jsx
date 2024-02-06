import PropTypes from "prop-types";

const BtnSuccess = (props) => {
  return (
    <div>
      <button className="bg-green-600 px-5 py-2 rounded hover:cursor-pointer hover:bg-green-700 text-white ">
        {props.text}
      </button>
    </div>
  );
};

BtnSuccess.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnSuccess;
