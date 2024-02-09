import Proptypes from "prop-types";

const FormInput = (props) => {
  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className="outline-none px-5 py-2 w-full rounded focus:border focus:border-gray-400"
        value={props.value}
        onChange={props.handleOnchange}
        required
      />
    </div>
  );
};

FormInput.propTypes = {
  name: Proptypes.string,
  type: Proptypes.string,
  value: Proptypes.string,
  placeholder: Proptypes.string,
  handleOnchange: Proptypes.func,
};

export default FormInput;
