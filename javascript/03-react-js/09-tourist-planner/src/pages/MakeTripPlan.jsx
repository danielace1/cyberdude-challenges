import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import MakeTripFormInput from "../components/forms/MakeTripForm.jsx";
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
  destination: z.string().min(3, {
    message: "Please enter a destination with a minimum of 20 characters.",
  }),

  image: z
    .any()
    .refine(
      (files) => files?.length >= 1,
      "Attach a image of your destination"
    ),

  transportation: z
    .string()
    .min(3, { message: "Transportation must contain at least 3 characters" }),

  persons: z
    .string()
    .min(1, { message: "Atleast 1 Person should be on the trip" }),

  budget: z.string().min(4, { message: "Amount must be at least 4 digits" }),
});

const MaketripPlan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(Schema) });

  const MakeTripPlan = (data) => {
    console.log(data);
    alert(`Hey ${data.firstname}, you have registered Successfully!`);
    reset();
  };

  const [startDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [minReturnDate, setMinReturnDate] = useState(null);

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
    // If a departure date is selected then, return date must after departure date
    if (date) {
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      setReturnDate(null); // Reset return date when departure date changes
      setMinReturnDate(nextDay);
    } else {
      setMinReturnDate(null);
    }
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

        <div className="flex items-center space-x-10">
          <div className="w-full">
            <label htmlFor="departureDate" className="block mb-3">
              Departure Date :
            </label>
            <DatePicker
              tabIndex="0"
              name="departureDate"
              type="date"
              selected={startDate}
              value={startDate}
              onChange={handleDepartureDateChange}
              minDate={new Date()}
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
              format="dd / MM / yyyy"
              className="py-1.5 px-3 rounded w-full bg-blue-200 outline-none"
              // {...register("departureDate")}
              required
            />
            {/* {errors.departureDate && (
              <div className="text-red-600 text-sm border">
                {errors.departureDate.message}
              </div>
            )} */}
          </div>
          <div className="w-full">
            <label htmlFor="returnDate" className="block mb-3">
              Return Date :
            </label>
            <DatePicker
              name="returnDate"
              type="date"
              selected={returnDate}
              value={returnDate}
              onChange={(date) => setReturnDate(date)}
              minDate={minReturnDate || new Date()}
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
              format="dd / MM / yyyy"
              className="py-1.5 px-3 rounded w-full bg-blue-200 outline-none"
              required
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
          <MakeTripFormInput
            label="Mode of Transportation"
            name="transportation"
            placeholder="Train, Bus, Car, ..."
            register={register("transportation")}
            error={errors.transportation}
          />
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
              placeholder="₹ 100000"
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
