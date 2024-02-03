const ContactPage = () => {
  return (
    <div className="p-8 min-h-screen lg:px-52 ">
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
