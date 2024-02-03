import portfolio from "../data/portfolio.json";
import Animation from "../components/Animation.jsx";

const Projects = () => {
  const projectData = portfolio.map((project, i) => {
    return (
      <div
        className="bg-black min-h-screen px-8 sm:px-28 mt-6 sm:mt-10 pb-10"
        key={i}
      >
        <Animation />

        {/* Project */}
        <div className="flex justify-center mt-10">
          <h1 className="text-4xl font-semibold text-white border-b-2 border-[#8678F9]">
            Projects
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-10 gap-y-10 mt-10">
          {project.projects.map((work, i) => (
            <div
              className="grid items-center space-y-5 text-white outline outline-1 outline-[#8678F9] rounded p-4 lg:p-10"
              key={i}
            >
              <div>
                <img src={work.Img} alt={work.Img} className="w-full rounded" />
              </div>
              <div className="space-y-3">
                <h1 className="sm:text-xl font-semibold">{work.title}</h1>
                <h4 className="text-sm text-slate-300">{work.desc}</h4>
                <a
                  href={work.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex py-2 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-5 font-medium text-black transition-colors hover:cursor-pointer"
                >
                  Live Demo
                </a>
                <a
                  href={work.gitrepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full transition-background inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-slate-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hover:bg-[100%_200%] hover:cursor-pointer"
                >
                  Github Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  });

  return <div>{projectData}</div>;
};

export default Projects;
