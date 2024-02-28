import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/";

import destinationImg from "../assets/travel management.png";

const ViewTripPlan = () => {
  const [tripPlans, setTripPlans] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [render, reRender] = useState(false);

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
      console.log(data);
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

      <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {tripPlans.map((trip) => (
          <div
            key={trip.id}
            className="rounded border bg-blue-200 w-[400px] pb-5"
          >
            <div
              className="relative"
              onMouseEnter={() => setHoveredImage(trip.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={trip.places}
                alt={trip.destination}
                className={`rounded-tl rounded-tr w-[500px] h-[300px] object-cover transition-all 
                ${
                  hoveredImage === trip.id || hoveredIcon === trip.id
                    ? "opacity-50"
                    : ""
                } hover:cursor-pointer hover:transition-all
                `}
              />
              {hoveredImage === trip.id && (
                <div
                  onMouseEnter={() => setHoveredIcon(trip.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <Link to={`/updatetripplan/${trip.id}`}>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        className="fill-current absolute top-2.5 right-12 text-green-500 cursor-pointer hover:text-green-600"
                      >
                        <path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6.525q.5 0 .75.313t.25.687q0 .375-.262.688T11.5 5H5v14h14v-6.525q0-.5.313-.75t.687-.25q.375 0 .688.25t.312.75V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"></path>
                      </svg>
                    </div>
                  </Link>

                  <div
                    onClick={() => {
                      deleteDoc(doc(db, "users", trip.id))
                        .then(() => {
                          console.log("Document successfully deleted!");
                          // Update the state to remove the deleted trip plan
                          setTripPlans((prevTripPlans) =>
                            prevTripPlans.filter((item) => item.id !== trip.id)
                          );
                        })
                        .catch((error) => {
                          console.error("Error removing document: ", error);
                          // Handle any errors that occur during deletion
                        });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      className="fill-current absolute top-2.5 right-2 text-red-500 cursor-pointer hover:text-red-600"
                    >
                      <path d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5q0-.425.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.587 1.413T17 21zm5-7.1l1.9 1.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275z"></path>
                    </svg>
                  </div>
                </div>
              )}
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
