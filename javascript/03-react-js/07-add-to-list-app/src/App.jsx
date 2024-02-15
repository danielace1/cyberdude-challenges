import { useState } from "react";
import reactLogo from "./assets/react.svg";

const App = () => {
  const [items, setItems] = useState("");

  const [addedItems, setAddedItems] = useState([]);

  const handleitems = (e) => {
    setItems(e.target.value);
  };

  const handleAdd = () => {
    // If items is empty or contains only whitespace, show an alert

    if (!items || !items.trim()) {
      alert("Please enter a thing to add.");
      return;
    }

    if (items.length < 4) {
      alert("Please enter at least 4 characters");
      return;
    }

    setAddedItems([...addedItems, items]);
    setItems("");
  };

  const handlekeyup = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = addedItems.filter((_, i) => i !== index);
    setAddedItems(updatedItems);
  };

  return (
    <>
      <nav className="flex justify-between bg-orange-500 py-5 px-5 sm:px-10 text-white font-semibold text-2xl">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img src={reactLogo} alt="reactLogo" />
          <h1>Add to list App </h1>
        </div>
        <div>
          <a
            href="https://github.com/danielace1/cyberdude-challenges/tree/master/javascript/03-react-js/07-add-to-list-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-slate-300 transition-colors text-white"
            >
              <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </nav>

      <section className="max-w-xl sm:mx-auto p-8 bg-slate-200 my-5 mx-3 sm:m-10 rounded">
        <div className="flex space-x-2">
          <input
            autoFocus
            type="text"
            name="items"
            placeholder="Add a thing to your list"
            value={items}
            className="px-5 py-2 outline-none bg-gray-300 w-full rounded"
            onChange={handleitems}
            onKeyUp={handlekeyup}
          />
          <button
            onClick={handleAdd}
            className="px-5  py-2 bg-orange-500 rounded text-white hover:cursor-pointer hover:bg-orange-600"
          >
            Add
          </button>
        </div>

        <div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-concept-3428212-2902554.png?f=webp"
            alt="emptyList"
            className={`${addedItems.length === 0 ? "" : "hidden"}`}
          />
        </div>

        <ul
          className={`mt-5 space-y-3 list-item ${
            addedItems.length === 0 ? "hidden" : ""
          }`}
        >
          {addedItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between border border-gray-300 rounded px-2 py-0.5"
            >
              <div>
                <span className="text-sm">{index + 1}</span>. {item}
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-current text-orange-500 hover:text-orange-600 hover:cursor-pointer"
                  onClick={() => handleDeleteItem(index)}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 7l10 10M7 17L17 7"
                  ></path>
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
