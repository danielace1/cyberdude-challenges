const ContactPage = () => {
  return (
    <div className="bg-backGround p-10 sm:p-20 text-white min-h-screen">
      <div className="bg-darkBlue p-5 sm:p-10 rounded flex flex-col text-center gap-y-4">
        <h1 className="text-3xl font-semibold">
          Contact <span className="text-cyan">ME!</span>
        </h1>
        <div>
          <input
            type="text"
            placeholder="FullName"
            className="px-5 py-2 bg-backGround outline-none rounded w-full lg:w-96 focus:border focus:border-cyan"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="px-5 py-2 bg-backGround outline-none rounded w-full lg:w-96 focus:border focus:border-cyan"
          />
        </div>
        <div>
          <textarea
            cols="30"
            rows="6"
            placeholder="Type your message here..."
            className="px-5 py-2 bg-backGround outline-none rounded w-full lg:w-96 focus:border focus:border-cyan"
          ></textarea>
        </div>
        <div>
          <a href="mailto:asudharsan1805@gmail.com">
            <button className="bg-cyan px-10 py-2 rounded font-semibold hover:bg-teal-500">
              SEND MESSAGE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
