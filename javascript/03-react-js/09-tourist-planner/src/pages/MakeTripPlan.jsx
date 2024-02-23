import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import MakeTripFormInput from "../components/forms/MakeTripForm.jsx";
import TripCheckbox from "../components/forms/TripCheckbox.jsx";
import TextArea from "../components/forms/TextArea.jsx";

const Schema = z.object({
  firstname: z
    .string()
    .min(3, { message: "First Name must contain at least 3 characters" })
    .max(20, { message: "First Name must contain at most 20 characters" }),
  lastname: z
    .string()
    .min(3, { message: "Last Name must contain at least 3 characters" })
    .max(12, { message: "Last Name must contain at most 20 characters" }),
  email: z.string().email({ message: "Email is required" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(10, { message: "Phone number must be at most 10 digits" }),
});

const MaketripPlan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(Schema) });

  const MakeTripPlan = (e) => {
    console.log(e);
    alert(`Hey ${e.username}, you have registered Successfully!`);
    reset();
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-blue-100 min-h-screen px-20 py-10">
      <div>
        <h1 className="text-blue-500 font-bold text-2xl">PLAN YOUR TRIP</h1>
      </div>

      <form
        action=""
        className="mt-8 space-y-5 px-20 border border-blue-200 rounded py-10"
        onSubmit={handleSubmit(MakeTripPlan)}
      >
        <div className="flex space-x-10">
          <div className="w-full">
            <MakeTripFormInput
              label="First Name"
              name="firstname"
              className="w-full"
              placeholder="First Name"
              register={register("firstname")}
              error={errors.firstname}
            />
          </div>
          <div className="w-full">
            <MakeTripFormInput
              label="Last Name"
              name="lastname"
              placeholder="Last Name"
              register={register("lastname")}
              error={errors.lastname}
            />
          </div>
        </div>

        <div className="flex space-x-10">
          <div className="w-full">
            <MakeTripFormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              register={register("email")}
              error={errors.email}
            />
          </div>
          <div className="w-full">
            <MakeTripFormInput
              label="Phone"
              name="phone"
              type="number"
              placeholder="Enter your phone number"
              register={register("phone")}
              error={errors.phone}
            />
          </div>
        </div>

        <div className="flex space-x-10">
          <div className="w-full">
            <label htmlFor="departureDate" className="block mb-3">
              Departure Date :
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              className={`py-2 px-5
               w-full bg-blue-200 outline-none rounded}`}
              {...register}
            />
          </div>
          <div className="w-full">
            <MakeTripFormInput
              label="Return Date"
              name="returnDate"
              type="date"
              placeholder="DD-MM-YYYY"
              register={register("returnDate")}
              error={errors.returnDate}
            />
          </div>
        </div>

        <div className="flex space-x-10">
          <div className="w-full">
            <MakeTripFormInput
              label="Destination"
              name="destination"
              placeholder="Where you want to go!"
              register={register("destination")}
              error={errors.destination}
            />
          </div>
          <div className="w-full">
            <MakeTripFormInput
              label="Upload a Image of your destination"
              name="image"
              type="file"
              placeholder=" Upload a image of your destination"
              register={register("image")}
              error={errors.image}
            />
          </div>
        </div>

        <div>
          <span>Mode of Transportation:</span>
          <div className="flex space-x-3 items-center">
            <TripCheckbox
              label="Train"
              name="train"
              register={register("train")}
              error={errors.train}
            />
            <TripCheckbox
              label="Air"
              name="air"
              register={register("air")}
              error={errors.air}
            />
            <TripCheckbox
              label="Car"
              name="car"
              register={register("car")}
              error={errors.car}
            />
            <TripCheckbox
              label="Bus"
              name="bus"
              register={register("bus")}
              error={errors.bus}
            />
            <TripCheckbox
              label="other"
              name="other"
              register={register("other")}
              error={errors.other}
            />
          </div>
        </div>

        <div className="flex items-center space-x-10">
          <div className="w-full">
            <MakeTripFormInput
              label="No. of Persons"
              name="persons"
              type="number"
              placeholder="No. of persons"
              register={register("persons")}
              error={errors.persons}
            />
          </div>
          <div className="w-full">
            <MakeTripFormInput
              label="Estimated budget for your Trip"
              name="budget"
              type="number"
              placeholder="Enter your budget"
              register={register("budget")}
              error={errors.budget}
            />
          </div>
        </div>

        <TextArea
          label="Additional Notes/Comments"
          name="comments"
          placeholder={"Enter your Additional Notes/Comments"}
        />

        <div className="flex justify-center pt-10">
          <button className="text-center px-8 py-3 bg-blue-500 hover:cursor-pointer hover:bg-blue-600  text-white font-semibold rounded">
            Make my Plan
          </button>
        </div>
      </form>
    </div>
  );
};

export default MaketripPlan;
