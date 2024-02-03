import Sudharsan from "../assets/images/Sudharsan.jpg";
import portfolio from "../data/portfolio.json";
import Animation from "../components/Animation.jsx";

const AboutPage = () => {
  const AboutDetails = portfolio.map((about) => {
    return (
      <div
        className="bg-black min-h-screen px-8 sm:px-28 mt-6 sm:mt-10 pb-10"
        key={about.id}
      >
        <Animation />

        {/* About */}
        <div className="grid lg:flex items-center sm:space-x-10 text-white outline outline-1 outline-[#8678F9] px-8 sm:px-20 py-10 rounded">
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

        {/* Skills*/}
        <div className="flex justify-center mt-10">
          <h1 className="text-4xl font-semibold text-white border-b-2 border-[#8678F9]">
            Skills
          </h1>
        </div>
        <div className="mt-10 flex space-x-2 lg:space-x-10 sm:p-10 justify-center">
          {about.skills.map((skill, i) => (
            <div className="flex items-center justify-center" key={i}>
              <img
                className="size-20 lg:size-28"
                src={skill.logo}
                alt={skill.stack}
              />
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="flex justify-center mt-10">
          <h1 className="text-4xl font-semibold text-white border-b-2 border-[#8678F9]">
            Education
          </h1>
        </div>
        <div className="mt-10 text-white space-y-8">
          {about.education.map((studies, i) => (
            <div
              className="flex items-center space-x-3 sm:space-x-10 outline outline-1 outline-[#8678F9] border-[#8678F9] rounded p-4 lg:p-10"
              key={i}
            >
              <div>
                <img
                  src={studies.Img}
                  alt={studies.Img}
                  className="w-64 rounded"
                />
              </div>
              <div className="space-y-2">
                <h1 className="sm:text-xl font-semibold">{studies.location}</h1>
                <h4>{studies.degree}</h4>
                <h6>{studies.duration}</h6>
              </div>
            </div>
          ))}
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
