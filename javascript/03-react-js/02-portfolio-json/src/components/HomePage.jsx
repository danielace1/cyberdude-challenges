import portfolio from "../data/portfolio.json";
import Sudharsan from "../assets/images/Sudharsan.jpg";

const HomePage = () => {
  const portfolioData = portfolio.map((value) => {
    return (
      <div className=" bg-black min-h-screen" key={portfolio[0]}>
        <section>
          <div className="relative z-0 mx-auto">
            <div className="absolute top-50 -z-10 flex w-full justify-center">
              <div className="h-[310px] w-[310px] max-w-full animate-pulse rounded-full bg-[#8678F9] opacity-10 blur-[100px]"></div>
            </div>
          </div>
          <div className="px-28 flex items-center gap-x-10 mt-10">
            <div className="mb-16">
              <span className="text-5xl text-white">
                Hi there👋, I&apos;m Sudharsan,{" "}
              </span>
              <p className="mb-8 bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-transparent text-2xl">
                {value.desc}
              </p>
            </div>
            <div>
              <img src={Sudharsan} alt="sudharsan" className="rounded h-1/2" />
            </div>
          </div>
        </section>
      </div>
    );
  });

  return <div>{portfolioData}</div>;
};

export default HomePage;
