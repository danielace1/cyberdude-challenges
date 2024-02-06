import PropTypes from "prop-types";

const BtnPrimary = (props) => {
  return (
    <div>
      <button className="bg-blue-500 px-5 py-2 rounded hover:cursor-pointer hover:bg-blue-600 text-white ">
        {props.text}
      </button>
    </div>
  );
};

BtnPrimary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnPrimary;
