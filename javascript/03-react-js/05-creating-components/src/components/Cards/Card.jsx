import PropTypes from "prop-types";

const Card = ({ image, title, body, btn }) => {
  return (
    <div className="border w-96 rounded">
      <div>
        <img src={image} className="w-full" alt="cardImg" />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-2">{body}</p>
        <button className="mt-3 px-4 py-2 rounded text-white bg-blue-500 hover:cursor-pointer hover:bg-blue-600">
          {btn}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};

export default Card;
