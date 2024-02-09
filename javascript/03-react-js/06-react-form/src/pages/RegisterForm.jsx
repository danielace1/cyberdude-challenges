import { useState } from "react";
import FormInput from "../components/forms/FormInput";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setForm((form) => {
      return {
        ...form,
        [name]: value,
      };
    });
  };

  const submitFormtoServer = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="bg-gray-200 p-10 min-h-screen">
        <h1 className="text-center text-2xl mb-5 font-semibold">
          Register Here!
        </h1>

        <form
          action=""
          className="w-full max-w-lg mx-auto  border border-gray-300 p-10 space-y-5"
          onSubmit={submitFormtoServer}
        >
          <FormInput
            name="name"
            type={"text"}
            placeholder={"Name"}
            value={form.name}
            handleOnchange={handleInputs}
          />
          {/* {formError.name ? <small>{formError.name}</small> : ""} */}
          <FormInput
            name={"username"}
            type="text"
            placeholder="Username"
            value={form.username}
            handleOnchange={handleInputs}
          />
          <FormInput
            name={"email"}
            type="email"
            placeholder="Email Address"
            value={form.email}
            handleOnchange={handleInputs}
          />
          <FormInput
            name={"password"}
            type="password"
            placeholder="Password"
            value={form.password}
            handleOnchange={handleInputs}
          />
          <FormInput
            name={"repeatPassword"}
            type="password"
            placeholder="Password"
            value={form.repeatPassword}
            handleOnchange={handleInputs}
          />

          <div className="flex items-center justify-center">
            <label htmlFor="terms">
              <input
                type="checkbox"
                name=""
                id="terms"
                className="w-4 h-4 mr-2"
              />
              I have read and agree to the terms
            </label>
          </div>
          <button className="mt-10 w-full bg-violet-500 py-2 text-white font-semibold rounded hover:bg-violet-400">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
