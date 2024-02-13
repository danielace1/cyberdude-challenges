import Proptypes from "prop-types";

const FormInput = ({ name, type = "text", placeholder, error, register }) => {
  return (
    <div>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`outline-none px-5 py-2 w-full rounded focus:border focus:border-gray-400 ${
          error ? "border  border-red-600" : ""
        }`}
        {...register}
      />
      {error && (
        <small className="text-red-600 text-sm border">{error.message}</small>
      )}
    </div>
  );
};

FormInput.propTypes = {
  name: Proptypes.string,
  type: Proptypes.string,
  placeholder: Proptypes.string,
  error: Proptypes.object,
  register: Proptypes.object,
};

export default FormInput;
