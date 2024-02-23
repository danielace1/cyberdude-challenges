import PropTypes from "prop-types";

const TripCheckbox = ({ label, name, type = "checkbox", error, register }) => {
  return (
    <div className="flex items-center mt-4">
      <input id={name} type={type} {...register} className="mt-1 w-10 h-3.5" />
      <label htmlFor={name} className="block -ml-1 ">
        {label}
      </label>
      <span>
        {error && (
          <small className="text-red-600 text-sm border" id={`${name}-error`}>
            {error.message}
          </small>
        )}
      </span>
    </div>
  );
};

TripCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  text: PropTypes.string,
  error: PropTypes.object,
  register: PropTypes.func,
};

export default TripCheckbox;
