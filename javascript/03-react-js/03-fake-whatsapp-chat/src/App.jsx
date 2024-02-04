import { useState } from "react";

const App = () => {
  const [time, setTime] = useState("12:00 AM");
  const [charge, setCharge] = useState("50");
  const [name, setName] = useState("Daniel");
  const [status, setStatus] = useState("online");
  const [message1, setMessage1] = useState("Hello");
  const [message2, setMessage2] = useState("Hi");

  const inputTime = (e) => {
    const stdTime = e.target.value;

    const [hours, minutes] = stdTime.split(":");

    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    const formattedTime = `${formattedHours}:${minutes} ${ampm}`;

    setTime(formattedTime);
  };

  const inputCharge = (e) => {
    const inputValue = e.target.value;

    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 100) {
      setCharge(parsedValue);
    } else {
      console.error(
        "Invalid charge value. Please enter a number between 1 and 100."
      );
    }
  };

  const inputName = (e) => {
    const inputValue = e.target.value;

    const formattedValue =
      inputValue.length < 3 || inputValue.length >= 15
        ? "Give Valid Name"
        : inputValue;

    setName(formattedValue);
  };

  const inputStatus = (e) => {
    const inputValue = e.target.value;

    const formattedValue =
      inputValue.length < 3 || inputValue.length >= 33
        ? "Give Valid Status"
        : inputValue;

    setStatus(formattedValue);
  };

  const inputMsg1 = (e) => {
    const inputValue = e.target.value;

    document.querySelector("#msgValue").classList.remove("w-1/4");

    setMessage1(inputValue);
  };

  const inputMsg2 = (e) => {
    const inputValue = e.target.value;

    document.querySelector("#msgValue2").classList.remove("w-1/4");

    setMessage2(inputValue);
  };
  return (
    <div className="bg-emerald-400 min-h-screen p-10 grid grid-cols-2">
      <div className="space-y-5 max-w-lg bg-emerald-300 ml-32 rounded px-10 py-5">
        <h1 className="text-3xl font-semibold">Fake Chat Creator</h1>
        <div className="flex space-x-5">
          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              placeholder="Time"
              className="px-3 py-1 rounded outline-none w-full mt-2"
              id="time"
              onChange={inputTime}
            />
          </div>
          <div>
            <label htmlFor="charge">Battery Percent:</label>
            <input
              type="number"
              placeholder="100%"
              className="px-3 py-1 rounded outline-none w-full mt-2"
              id="charge"
              onChange={inputCharge}
            />
          </div>
        </div>
        <div>
          <label htmlFor="name">Person Name:</label>
          <input
            type="text"
            placeholder="Sudharsan"
            className="px-3 py-1 rounded outline-none w-full mt-2"
            id="name"
            onChange={inputName}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            placeholder="last seen yesterday at 7:53 pm"
            className="px-3 py-1 rounded outline-none w-full mt-2"
            id="status"
            onChange={inputStatus}
          />
        </div>
        <div>
          <label htmlFor="msg1">Message 1:</label>
          <input
            type="text"
            placeholder="Type Message"
            className="px-3 py-1 rounded outline-none w-full mt-2"
            id="msg1"
            onChange={inputMsg1}
          />
        </div>
        <div>
          <label htmlFor="msg1time">Message 1 time:</label>
          <input
            type="time"
            placeholder="Time"
            className="px-3 py-1 rounded outline-none w-full mt-2"
            id="msg1time"
          />
        </div>
        <div>
          <label htmlFor="msg2">Message 2:</label>
          <input
            type="text"
            placeholder="Type Message"
            className="px-3 py-1 rounded outline-none w-full mt-2"
            id="msg2"
            onChange={inputMsg2}
          />
        </div>
        <div>
          <label htmlFor="msg2time">Message 2 time:</label>
          <input
            type="time"
            placeholder="Time"
            className="px-3 py-1 rounded outline-none w-full mt-2"
            id="msg2time"
          />
        </div>

        <div>
          <button className="bg-emerald-500 px-5 py-2 rounded text-white">
            Add Message
          </button>
        </div>
      </div>

      <div className="max-w-lg mt-10 rounded">
        <div className="flex justify-between bg-gray-900 text-white px-5 py-1">
          <div>{time}</div>
          <div className="flex space-x-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.5 20q-.625 0-1.062-.437T5 18.5v-3q0-.625.438-1.062T6.5 14q.625 0 1.063.438T8 15.5v3q0 .625-.437 1.063T6.5 20m6 0q-.625 0-1.062-.437T11 18.5v-8q0-.625.438-1.062T12.5 9q.625 0 1.063.438T14 10.5v8q0 .625-.437 1.063T12.5 20m6 0q-.625 0-1.062-.437T17 18.5v-13q0-.625.438-1.062T18.5 4q.625 0 1.063.438T20 5.5v13q0 .625-.437 1.063T18.5 20"
                />
              </svg>
              <span className="text-sm">4G</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm ml-1">{charge}%</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M5 17q-.425 0-.712-.288T4 16v-2H2v-4h2V8q0-.425.288-.712T5 7h16q.425 0 .713.288T22 8v8q0 .425-.288.713T21 17zm1-2h7V9H6z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-slate-300">
          <div className="bg-emerald-900 px-5 flex items-center justify-between space-x-2 py-3 text-white">
            <div className="flex space-x-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 hover:cursor-pointer"
              >
                <path d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12q0-.2.063-.375T4.7 11.3l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13z" />
              </svg>
              <img
                src="https://ui-avatars.com/api/?name=Daniel&background=random&color=fff"
                alt="profileImg"
                className="w-14 h-14 rounded-full"
              />
              <div className="grid items-center">
                <h1 className="text-lg">{name}</h1>
                <span className="text-xs ml-1">{status}</span>
              </div>
            </div>
            <div>
              <div className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-emerald-400 cursor-pointer"
                >
                  <path d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-emerald-400 cursor-pointer"
                >
                  <path d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.588 1.413T16 20H4Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-gray-300 cursor-pointer"
                >
                  <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-slate-300 h-96 relative">
            <div
              className="bg-green-300 absolute px-3 py-2 mt-2 ml-2 rounded-lg w-1/4 h-11"
              id="msgValue"
            >
              {message1}
              <span className="absolute mt-5 right-3 text-[10px]">
                10:00 pm
              </span>
            </div>
            <div
              className="bg-green-300 absolute px-3 py-2 mt-10 right-2 top-10 rounded-lg w-1/4 h-11"
              id="msgValue2"
            >
              {message2}
              <span className="absolute mt-5 right-3 text-[10px]">
                10:00 pm
              </span>
            </div>
          </div>

          <div className="w-full flex items-center justify-between px-1">
            <div className="relative m-1 w-full">
              <input
                type="text"
                placeholder="Message"
                className="rounded-full w-full px-10 py-1 outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 256 256"
                className="text-gray-400 hover:text-gray-500 cursor-pointer absolute bottom-1 left-2"
              >
                <path
                  fill="currentColor"
                  d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88ZM80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12Zm96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm-1.07 48c-10.29 17.79-27.4 28-46.93 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.07-20a8 8 0 0 1 13.86 8Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 256 256"
                className="text-gray-400 hover:text-gray-500 cursor-pointer absolute right-[80px] bottom-1"
              >
                <path
                  fill="currentColor"
                  d="M209.66 122.34a8 8 0 0 1 0 11.32l-82.05 82a56 56 0 0 1-79.2-79.21l99.26-100.72a40 40 0 1 1 56.61 56.55L105 193a24 24 0 1 1-34-34l83.3-84.62a8 8 0 1 1 11.4 11.22l-83.31 84.71a8 8 0 1 0 11.27 11.36L192.93 81A24 24 0 1 0 159 47L59.76 147.68a40 40 0 1 0 56.53 56.62l82.06-82a8 8 0 0 1 11.31.04Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="text-gray-400 hover:text-gray-500 cursor-pointer absolute bottom-1 right-[50px]"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2ZM8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-1.535c.179.31.318.645.409 1H15a1 1 0 1 1 0 2h-1.126a4.01 4.01 0 0 1-2.302 2.68L13.6 16.2a1 1 0 0 1-1.2 1.6l-3.992-2.994A.986.986 0 0 1 8 14c0-.257.103-.504.27-.683A.985.985 0 0 1 9 13h1a2 2 0 0 0 1.732-1H9a1 1 0 1 1 0-2h2.732A2 2 0 0 0 10 9H9a1 1 0 0 1-1-1Z"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="text-gray-400 hover:text-gray-500 cursor-pointer absolute bottom-1 right-[20px]"
              >
                <circle cx={12} cy={12} r={3} fill="currentColor" />
                <path
                  fill="currentColor"
                  d="M16.83 4L15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"
                />
              </svg>
            </div>
            <div className="rounded-full bg-emerald-800 p-1 hover:bg-emerald-900 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"
                />
                <path
                  fill="currentColor"
                  d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
