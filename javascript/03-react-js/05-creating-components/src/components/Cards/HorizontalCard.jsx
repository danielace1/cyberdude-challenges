import PropTypes from "prop-types";

const HorizontalCard = ({ image, title, body, smallText }) => {
  return (
    <div className="border flex w-[1/2] h-64 rounded">
      <div>
        <img src={image} alt="cardImg" className="w-full h-full" />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-2 mb-6">{body}</p>
        <small className=" text-gray-500">{smallText}</small>
      </div>
    </div>
  );
};

HorizontalCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  smallText: PropTypes.string.isRequired,
};

export default HorizontalCard;
