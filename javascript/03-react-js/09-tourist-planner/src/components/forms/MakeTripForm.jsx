import Proptypes from "prop-types";

const MakeTripFormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  error,
  register,
  handleOnChange,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-3">
        {label} :
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={type === "file" && handleOnChange}
        className={`py-2 ${
          type === "file" ? "text-sm px-4 " : "px-5"
        } w-full bg-blue-200 outline-none rounded focus:border focus:border-gray-400 ${
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

MakeTripFormInput.propTypes = {
  label: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  type: Proptypes.string,
  placeholder: Proptypes.string,
  error: Proptypes.object,
  register: Proptypes.object,
  handleOnChange: Proptypes.func,
};

export default MakeTripFormInput;
