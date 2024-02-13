import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "../components/forms/FormInput";
import FormCheckbox from "../components/forms/FormCheckbox";

const Schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must contain at least 3 characters" })
      .max(20, { message: "Name must contain at most 20 characters" }),
    username: z
      .string()
      .min(5, { message: "Username must contain at least 5 characters" })
      .max(12, { message: "Username must contain at most 12 characters" }),

    email: z.string().email({ message: "Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 8 characters" })
      .regex(/[0-9]/g, { message: "Password must contain at least one number" })
      .regex(/[!,@,#,$,%,^,&,*]/g, {
        message: "Password must contain at least one special character",
      }),

    repeatPassword: z.string(),

    terms: z.literal(true, {
      errorMap: () => ({ message: "Please accept the terms and conditions." }),
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords should be the same",
    path: ["repeatPassword"],
  });

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(Schema) });

  // const form = useForm();

  // console.log(form);
  const sendDetails = (e) => {
    console.log(e);
    alert(`Hey ${e.username}, you have registered Successfully!`);
    reset();
  };

  return (
    <section>
      <div className="bg-gray-200 p-5 min-h-screen">
        <h1 className="text-center text-2xl mb-5 font-semibold">
          Register Here!
        </h1>

        <form
          action=""
          className="w-full max-w-lg mx-auto border border-gray-300 p-10 space-y-5"
          onSubmit={handleSubmit(sendDetails)}
        >
          <FormInput
            name="name"
            placeholder={"Name"}
            register={register("name")}
            error={errors.name}
          />
          <FormInput
            name={"username"}
            placeholder="Username"
            register={register("username")}
            error={errors.username}
          />
          <FormInput
            name={"email"}
            type="email"
            placeholder="Email Address"
            register={register("email")}
            error={errors.email}
          />
          <FormInput
            name={"password"}
            type="password"
            placeholder="Password"
            register={register("password")}
            error={errors.password}
          />
          <FormInput
            name={"repeatPassword"}
            type="password"
            placeholder="Repeat Password"
            register={register("repeatPassword")}
            error={errors.repeatPassword}
          />

          <div>
            <FormCheckbox
              type="checkbox"
              name="terms"
              label=" I have read and agree to the terms"
              register={register("terms")}
              error={errors.terms}
            />
          </div>
          <button className="mt-10 w-full bg-violet-500 py-2 text-white font-semibold rounded hover:bg-violet-400">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
