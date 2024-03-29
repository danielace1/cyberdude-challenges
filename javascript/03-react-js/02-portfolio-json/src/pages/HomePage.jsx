import portfolio from "../data/portfolio.json";
import Sudharsan from "../assets/images/Sudharsan.jpg";
import Animation from "../components/Animation.jsx";

const HomePage = () => {
  const portfolioData = portfolio.map((value) => {
    return (
      <div className=" bg-black min-h-screen" key={value.id}>
        <Animation />
        <section>
          <div className="px-9 pb-10 sm:pb-0 md:px-16 lg:px-28 grid sm:flex items-center gap-x-10 mt-10">
            <div className="mb-16">
              <span className="text-4xl sm:text-5xl text-white">
                Hi there👋, I&apos;m Sudharsan,{" "}
              </span>
              <p className="mb-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-transparent text-lg sm:text-xl">
                {value.desc}
              </p>
              <div className="space-x-7">
                <button className="text-[#8678F9] inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors">
                  Hire Me
                </button>
                <a
                  href="https://danielace1.github.io/Resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-6 font-medium text-black transition-colors hover:cursor-pointer">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
            <div>
              <img
                src={Sudharsan}
                alt="sudharsan"
                className="rounded  lg:w-[50em] lg:h-1/2"
              />
            </div>
          </div>
        </section>
      </div>
    );
  });

  return <div>{portfolioData}</div>;
};

export default HomePage;
