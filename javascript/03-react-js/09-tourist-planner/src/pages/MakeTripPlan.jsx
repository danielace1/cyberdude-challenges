import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
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

  const COLLECTION_NAME = "users";

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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

  const saveDownloadUrlToDatabase = async (downloadURL) => {
    try {
      // Perform database operation to save the download URL
      await setDoc(doc(db, "your_collection", "your_document"), {
        downloadURL: downloadURL,
      });
      console.log("Download URL saved to the database");
    } catch (error) {
      console.error("Error saving download URL to the database: ", error);
    }
  };

  // Define getDataFromFirebase function outside of useEffect
  const getDataFromFirebase = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });

      if (querySnapshot.empty) {
        console.log("No plans have been made");
      }
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  useEffect(() => {
    if (file) {
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.error("Upload error: " + error);
        },
        async () => {
          // Handle successful uploads on complete
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL);

            // Once you have the download URL, you can perform any additional actions,
            // such as storing it in your database.
            saveDownloadUrlToDatabase(downloadURL);
          } catch (error) {
            console.error("Error getting download URL: ", error);
          }
        }
      );
    }
    if (file) {
      getDataFromFirebase();
    }
  }, [file]); // Make sure to include any dependencies, such as 'file', in the dependency array

  const MakeTripPlan = async (data) => {
    try {
      let imageData = data.image;

      // Check if data.image is a File object
      if (data.image instanceof File) {
        // If it's a File object, upload it to Firebase Storage
        const storageRef = ref(storage, data.image.name);
        const uploadTask = uploadBytesResumable(storageRef, data.image);
        await uploadTask;

        // Once uploaded, get the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        // Update the imageData with the download URL
        imageData = downloadURL;
      }

      // Clone the data object to avoid modifying the original object
      const newData = { ...data, image: imageData };

      const docRef = await addDoc(collection(db, COLLECTION_NAME), newData);
      // Add the new data to Firestore
      await addDoc(this.docRef, {
        title: this.settitle || null,
        posttext: this.setposttext || null,
      });
      console.log("Document written with ID: ", docRef.id);

      console.log(newData);
      // Save the download URL to the database
      await saveDownloadUrlToDatabase(data.img);

      console.log(newData);
      alert(`Hey ${data.firstname}, you have planned your trip Successfully!`);
      reset();
      setDepartureDate(null);
      setReturnDate(null);
    } catch (e) {
      console.error("Error adding document: ", e);
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
              required
            />
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
              onChange={handleFileChange}
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
