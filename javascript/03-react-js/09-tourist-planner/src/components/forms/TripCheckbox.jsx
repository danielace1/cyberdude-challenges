import PropTypes from "prop-types";

const TripCheckbox = ({
  label,
  id,
  name,
  type = "checkbox",
  register,
  errors,
}) => {
  return (
    <div className="flex items-center mt-4">
      <input
        id={id}
        name={name}
        type={type}
        {...register}
        className="mt-1 w-10 h-3.5"
      />
      <label htmlFor={id} className="block -ml-1 ">
        {label}
      </label>
      {errors && <div className="text-red-600 text-sm">{errors.message}</div>}
    </div>
  );
};

TripCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default TripCheckbox;
