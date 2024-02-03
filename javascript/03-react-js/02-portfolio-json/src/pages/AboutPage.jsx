import Sudharsan from "../assets/images/Sudharsan.jpg";
import portfolio from "../data/portfolio.json";

const AboutPage = () => {
  const AboutDetails = portfolio.map((about) => {
    return (
      <div
        className="bg-black min-h-screen px-8 sm:px-28 mt-6 sm:mt-20"
        key={about.id}
      >
        <div className="relative z-0 mx-auto">
          <div className="absolute top-58 -z-10 flex w-full justify-center">
            <div className="h-[310px] w-[500px] max-w-full animate-pulse bg-[#8678F9] opacity-5 blur-[200px]"></div>
          </div>
        </div>
        <div className="grid sm:flex items-center sm:space-x-10 text-white outline outline-1 outline-[#8678F9] px-8 sm:px-20 py-10 rounded">
          <div className="w-full">
            <img
              src={Sudharsan}
              alt="sudharsan"
              className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover"
            />
          </div>
          <div className="space-y-5 mt-7">
            <h1 className="text-3xl font-semibold">
              About <span className="text-[#8678F9]">ME</span>
            </h1>
            <p className="mt-5">{about.aboutme}</p>
            <div>
              <h1 className="text-3xl font-semibold">
                My <span className="text-[#8678F9]">Interests</span>
              </h1>
              <div className="flex mt-5  space-x-10">
                {about.interests.map((interest, i) => (
                  <div className="flex items-center justify-center" key={i}>
                    <img
                      className="size-8"
                      src={interest.logo}
                      alt={interest.interest}
                    />
                    <div>{interest.interest}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-black">
      <div>{AboutDetails}</div>
    </div>
  );
};

export default AboutPage;
