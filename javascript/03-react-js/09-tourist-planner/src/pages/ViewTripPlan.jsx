import destinationImg from "../assets/travel management.png";

const ViewTripPlan = () => {
  return (
    <div className="bg-blue-100 min-h-screen px-20 py-10">
      <div>
        <h1 className="text-blue-500 font-bold text-2xl">YOUR TRIP PLANS</h1>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center">
        <div className="rounded border bg-blue-200 w-[400px] pb-5">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kY820IAafWv4Qh5Dpcse3Bb8dt1Jtlins7VPytte9S2kaIkuhgHTSlt4_h8kcewDEL8&usqp=CAU"
              alt=""
              className="rounded-tl rounded-tr w-[400px]  object-cover"
            />
          </div>
          <div className="px-4 mt-5">
            <div className="my-4">
              <span className="bg-blue-500 px-4 py-2 rounded-full  text-white font-semibold text-sm">
                Sudharsan A&aposs trip :
              </span>
            </div>

            <h1 className="text-xl font-semibold flex items-center">
              <span>
                <img src={destinationImg} alt="" className="w-10" />
              </span>
              &nbsp; Destination : Kerala
            </h1>
            <h3>Departure Date: 20/02/2025</h3>
            <h3>Return Date: 20/02/2025</h3>
            <h3>Mode of Transportation: Bus, Car</h3>
            <h3>No. of Persons: 4</h3>
            <h3>
              Estimated Budget: <span className="font-semibold">₹ 10000</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTripPlan;
