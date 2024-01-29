const AboutPage = () => {
  return (
    <div className="bg-backGround px-10 sm:px-32 py-10 sm:py-20 min-h-screen">
      <div className="grid lg:flex space-y-8 lg:space-y-0 lg:space-x-10 items-center bg-darkBlue p-5 sm:p-10 rounded">
        <div className="w-full flex justify-center">
          <img
            src="/images/Sudharsan.jpg"
            alt="Sudharsan"
            className="w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover bg-gradient-to-tr from-cyan to-teal-300 p-0.5"
          />
        </div>
        <div className="">
          <h1 className="text-2xl  font-semibold text-cyan">About Me</h1>
          <h1 className="mt-4 text-3xl text-white font-semibold">
            Hi there! I am <span className="text-cyan">Sudharsan </span>
          </h1>
          <p className="mt-5 text-white">
            <span>
              I&apos;m UI Designer &{" "}
              <span className="text-cyan">Web Developer,</span>
            </span>{" "}
            a first-year student at Anna University, majoring in Computer
            Science. My academic journey has allowed me to dive deep into
            Web-Development, and I&apos;m incredibly passionate about leveraging
            technology to solve real-world problems. Being a student in
            today&apos;s dynamic digital era, I&apos;ve had opportunities to
            work on exciting projects, some of which you can explore right here
            on my portfolio.
          </p>
          <div className="flex items-center mt-5 space-x-5 text-white">
            <span>Connect with me on:&nbsp;</span>
            <a
              href="https://www.facebook.com/sudharsandaniel.sudharsandaniel"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border border-cyan hover:bg-cyan rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current hover:cursor-pointer transition hover:transition-all"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                </svg>
              </div>
            </a>
            <a
              href="https://www.instagram.com/sudharsan_daniel/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border border-cyan hover:bg-cyan rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current hover:cursor-pointer transition hover:transition-all"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sudharsan-a-b40506290/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border border-cyan hover:bg-cyan rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current hover:cursor-pointer transition hover:transition-all"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </svg>
              </div>
            </a>
            <a
              href="https://twitter.com/Sudharsandaniel"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border border-cyan hover:bg-cyan rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current hover:cursor-pointer transition hover:transition-all"
                >
                  <path d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
