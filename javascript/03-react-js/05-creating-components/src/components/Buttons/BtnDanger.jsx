import PropTypes from "prop-types";

const BtnDanger = (props) => {
  return (
    <div>
      <button className="bg-red-600 px-5 py-2 rounded hover:cursor-pointer hover:bg-red-700 text-white ">
        {props.text}
      </button>
    </div>
  );
};

BtnDanger.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnDanger;
