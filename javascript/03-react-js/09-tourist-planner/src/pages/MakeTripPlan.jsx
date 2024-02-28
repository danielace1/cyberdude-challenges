import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase/";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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

  places: z
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

  const Navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [progress, setProgress] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(Schema) });

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const sendInfoToDB = (value) => {
    console.log(value);

    const departureDateString = startDate.toLocaleDateString();
    const returnDateString = returnDate.toLocaleDateString();

    const addFireStoreDoc = async () => {
      console.log({ ...value, places: data });
      await addDoc(collection(db, "users"), {
        ...value,
        departureDate: departureDateString,
        returnDate: returnDateString,
        places: data.img,
      });
    };
    addFireStoreDoc();
    alert("Your trip has been planned successfully!");
    Navigate("/viewtripplan");
  };

  return (
    <div className="bg-blue-100 min-h-screen px-7 lg:px-20 py-5 sm:py-10">
      <div>
        <h1 className="text-blue-500 font-bold text-2xl">PLAN YOUR TRIP</h1>
      </div>

      <form
        action=""
        className="mt-5 sm:mt-8 space-y-5 px-5 lg:px-20 border border-blue-200 rounded py-10"
        onSubmit={handleSubmit(sendInfoToDB)}
      >
        <div className="sm:flex sm:space-x-10 space-y-5 sm:space-y-0">
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

        <div className="sm:flex sm:space-x-10 space-y-5 sm:space-y-0">
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

        <div className="sm:flex sm:space-x-10 space-y-5 sm:space-y-0">
          <div className="w-full">
            <label
              htmlFor="departureDate"
              className="block mb-3 font-semibold text-blue-900"
            >
              Departure Date :
            </label>
            <DatePicker
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
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="returnDate"
              className="block mb-3 font-semibold text-blue-900"
            >
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

        <div className="sm:flex sm:space-x-10 space-y-5 sm:space-y-0">
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
            <label
              htmlFor="places"
              className="block mb-3 font-semibold text-blue-900"
            >
              Upload a Image of your destination :
            </label>
            <input
              id="places"
              type="file"
              name="places"
              className={`py-1.5 px-5 w-full bg-blue-200 outline-none rounded focus:border focus:border-gray-400 ${
                errors.places ? "border  border-red-600" : ""
              }`}
              {...register("places")}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            {errors.places && (
              <small className="text-red-600 text-sm border">
                {errors.places.message}
              </small>
            )}
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

        <div className="sm:flex sm:space-x-10 space-y-5 sm:space-y-0">
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

        <div className="flex justify-center sm:pt-10">
          <button
            disabled={progress !== null && progress < 100}
            className={`px-8 py-3 hover:cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded`}
          >
            Make my Plan
          </button>
        </div>
      </form>
    </div>
  );
};

export default MaketripPlan;
