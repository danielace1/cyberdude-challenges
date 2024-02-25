import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/";

import destinationImg from "../assets/travel management.png";

const ViewTripPlan = () => {
  const [tripPlans, setTripPlans] = useState([]);

  useEffect(() => {
    const getFirebaseDatas = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = querySnapshot.docs.map((doc) => {
        const getData = doc.data();
        const getId = doc.id;
        const finalData = { ...getData, id: getId };
        return finalData;
      });
      setTripPlans(data);
      console.log(tripPlans);
      if (querySnapshot.docs.length === 0) {
        console.log("no record exist");
      }
    };
    getFirebaseDatas();
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen px-20 py-10">
      <div>
        <h1 className="text-blue-500 font-bold text-2xl">YOUR TRIP PLANS</h1>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {tripPlans.map((trip) => (
          <div
            key={trip.id}
            className="rounded border bg-blue-200 w-[400px] pb-5"
          >
            {console.log("Image URL:", trip.image)}
            <div>
              <img
                src={trip.image}
                alt={trip.destination}
                className="rounded-tl rounded-tr w-[400px] h-[200px] object-cover"
              />
            </div>
            <div className="px-4 mt-5">
              <div className="my-4">
                <span className="bg-blue-500 px-4 py-2 rounded-full  text-white font-semibold text-sm">
                  {`${trip.firstname} ${trip.lastname}'s trip :`}
                </span>
              </div>

              <h1 className="text-xl font-semibold flex items-center">
                <span>
                  <img
                    src={destinationImg}
                    alt={trip.destination}
                    className="w-10"
                  />
                </span>
                &nbsp; Destination : {trip.destination}
              </h1>
              <h3>Departure Date: {trip.departureDate}</h3>
              <h3>Return Date: {trip.returnDate}</h3>
              <h3>Mode of Transportation: {trip.transportation}</h3>
              <h3>No. of Persons: {trip.persons}</h3>
              <h3>
                Estimated Budget:{" "}
                <span className="font-semibold">₹ {trip.budget}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTripPlan;
