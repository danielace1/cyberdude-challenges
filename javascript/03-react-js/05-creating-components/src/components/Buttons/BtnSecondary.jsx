import PropTypes from "prop-types";

const BtnSecondary = (props) => {
  return (
    <div>
      <button className="bg-gray-500 px-5 py-2 rounded hover:cursor-pointer hover:bg-gray-600 text-white ">
        {props.text}
      </button>
    </div>
  );
};

BtnSecondary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnSecondary;
