import portfolio from "../data/portfolio.json";
import Sudharsan from "../assets/images/Sudharsan.jpg";

const HomePage = () => {
  const portfolioData = portfolio.map((value) => {
    return (
      <div className=" bg-black min-h-screen" key={value.id}>
        <section>
          <div className="relative z-0 mx-auto">
            <div className="absolute top-58 -z-10 flex w-full justify-center">
              <div className="h-[310px] w-[500px] max-w-full animate-pulse bg-[#8678F9] opacity-5 blur-[200px]"></div>
            </div>
          </div>
          <div className="px-14 pb-10 sm:pb-0 sm:px-28 grid sm:flex items-center gap-x-10 mt-10">
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
                <button className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-6 font-medium text-black transition-colors hover:cursor-pointer">
                  Download CV
                </button>
              </div>
            </div>
            <div>
              <img
                src={Sudharsan}
                alt="sudharsan"
                className="rounded w-[50em] h-1/2"
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
