import Proptypes from "prop-types";

const FormCheckbox = ({ name, label, type = "checkbox", error, register }) => {
  return (
    <div>
      <input
        id={name}
        type={type}
        name={name}
        className="w-3.5 h-3.5"
        {...register}
      />
      <label htmlFor={name}>{label}</label>
      {error && (
        <small className="grid text-red-600  text-sm">{error.message}</small>
      )}
    </div>
  );
};

FormCheckbox.propTypes = {
  name: Proptypes.string,
  label: Proptypes.string,
  type: Proptypes.string,
  error: Proptypes.object,
  register: Proptypes.object,
};

export default FormCheckbox;
