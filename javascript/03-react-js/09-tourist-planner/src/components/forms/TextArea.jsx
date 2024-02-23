import Proptypes from "prop-types";

const TextArea = ({ label, name, placeholder, type = "text" }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-3">
        {label} :
      </label>
      <textarea
        id={name}
        name={name}
        type={type}
        cols="30"
        rows="5"
        placeholder={placeholder}
        className="py-2 px-5 w-full bg-blue-200 outline-none rounded focus:border focus:border-gray-400"
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  label: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  type: Proptypes.string,
  placeholder: Proptypes.string,
};
export default TextArea;
