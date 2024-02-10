const ContactPage = () => {
  return (
    <div className="p-5 min-h-screen lg:px-52 ">
      <div className="outline outline-1 outline-[#8678F9] p-5 sm:p-10 rounded text-center gap-y-4 grid lg:justify-center">
        <h1 className="text-3xl font-semibold text-white mb-5">
          Contact <span className="text-[#8678F9]">ME!</span>
        </h1>
        <div>
          <input
            type="text"
            placeholder="FullName"
            className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none lg:w-96"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none lg:w-96"
          />
        </div>
        <div>
          <textarea
            cols="30"
            rows="6"
            placeholder="Type your message here..."
            className="border-1 block w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none lg:w-96"
          ></textarea>
        </div>
        <div>
          <a href="mailto:asudharsan1805@gmail.com">
            <button className="w-full transition-background inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-slate-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hover:bg-[100%_200%] hover:cursor-pointer">
              SEND MESSAGE
            </button>
          </a>
        </div>

        <div>
          <h1 className="text-white">Connect with me on :</h1>
          <div className="flex justify-center items-center space-x-5 mt-4">
            <a
              href="https://www.facebook.com/sudharsandaniel.sudharsandaniel"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border border-[#8678F9] rounded-full size-9 flex justify-center items-center transition-all hover:cursor-pointer hover:bg-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current text-[#8678F9]"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://www.instagram.com/sudharsan_daniel/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <div className="border border-[#8678F9] rounded-full size-9 flex justify-center items-center transition-all hover:cursor-pointer hover:bg-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current text-[#8678F9]  p-0.5"
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
              {" "}
              <div className="border border-[#8678F9] rounded-full size-9 flex justify-center items-center transition-all hover:cursor-pointer hover:bg-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current text-[#8678F9]  p-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708zm-5.5 10.403h3.208V9.25H4.208zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </a>
            <a
              href="https://github.com/danielace1"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <div className="border border-[#8678F9] rounded-full size-9 flex justify-center items-center transition-all hover:cursor-pointer hover:bg-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current text-[#8678F9]"
                >
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <footer className="p-3 bg-darkBlue text-gray-200 text-center">
        <p>
          &copy; 2024 All Rights Reserved. | Developed by&nbsp;
          <a
            href="https://github.com/danielace1"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Sudharsan
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
