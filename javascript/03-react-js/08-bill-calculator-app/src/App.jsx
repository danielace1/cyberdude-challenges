import { useState } from "react";

const App = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [addedItems, setAddedItems] = useState([]);

  const groceryItem = (e) => {
    setItem(e.target.value);
  };

  const itemPrice = (e) => {
    setPrice(e.target.value);
  };

  // add item functionality
  const handleAdd = () => {
    if (!item || !item.trim()) {
      alert("Please enter a thing to add.");
      return;
    }

    if (item.length < 3) {
      alert("Please enter at least 4 characters");
      return;
    }

    if (!price || !price.trim()) {
      alert("Please enter a price amount");
      return;
    }

    if (price.length <= 0) {
      alert("Please enter at a valid price");
      return;
    }

    const newItem = {
      name: item,
      price: price * quantity,
      quantity: quantity,
      initialPrice: price,
    };

    setAddedItems([...addedItems, newItem]);
    setItem("");
    setPrice("");
    setQuantity(1);
  };

  const handlekeyup = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  // increase quantity action
  const increaseQuantity = (index) => {
    const newItems = [...addedItems];
    newItems[index].quantity += 1;
    newItems[index].price =
      newItems[index].quantity * newItems[index].initialPrice;
    setAddedItems(newItems);
  };

  // decrease quantity action
  const decreaseQuantity = (index) => {
    const newItems = [...addedItems];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
      newItems[index].price =
        newItems[index].initialPrice * newItems[index].quantity;
      setAddedItems(newItems);
    }
  };

  // Calculate total amount
  const totalAmount = addedItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between items-center  px-5 sm:px-10 py-5 bg-blue-500 ">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1649/1649603.png"
            alt="grocery bill calculator"
            className="w-8 sm:w-16"
          />
          <h1 className="text-white font-semibold text-xl sm:text-2xl">
            Groceries Bill Calculator
          </h1>
        </div>
        <div>
          <a
            href="https://github.com/danielace1/cyberdude-challenges/tree/master/javascript/03-react-js/08-bill-calculator-app"
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

      {/* content */}
      <section className="bg-gray-300 min-h-screen p-5 sm:p-10">
        <div className="sm:flex space-y-3 sm:space-x-8 sm:space-y-0">
          {/* items */}
          <div className="w-full">
            <label htmlFor="items" className="mb-3 block">
              Enter your Grocery Items :
            </label>
            <input
              id="items"
              type="text"
              value={item}
              placeholder="Enter your items to calculate"
              className="px-5 py-2 w-full bg-gray-200 outline-none focus:border focus:border-gray-400 rounded"
              onChange={groceryItem}
            />
          </div>

          {/* Price */}
          <div className="w-full">
            <label htmlFor="price" className="mb-3 block">
              Enter your Grocery Price :
            </label>
            <input
              id="price"
              type="number"
              value={price}
              placeholder="₹ 100"
              className="px-5 py-2 w-1/2 bg-gray-200 outline-none focus:border focus:border-gray-400 rounded"
              onChange={itemPrice}
              onKeyUp={handlekeyup}
            />

            {/* Button */}
            <button
              className="bg-yellow-500 px-5 py-2 rounded text-white font-semibold hover:bg-yellow-600"
              onClick={handleAdd}
            >
              Add Item
            </button>
          </div>
        </div>

        <h1
          className={`mt-5 text-xl font-semibold ${
            addedItems.length === 0 ? "hidden" : ""
          }`}
        >
          Your Groceries bill shown below :
        </h1>
        <div
          className={`mt-5 overflow-auto rounded${
            addedItems.length === 0 ? "hidden" : ""
          }`}
        >
          <table
            className={`table lg:table-fixed border border-gray-200  w-full text-left lg:text-center ${
              addedItems.length === 0 ? "hidden" : ""
            }`}
          >
            <thead className="text-lg px-2">
              <tr>
                <th className="px-3 py-2 tracking-wide w-14">S.No</th>
                <th className="px-3 py-2 tracking-wide">Item</th>
                <th className="px-3 py-2 tracking-wide">Quantity</th>
                <th className="px-3 py-2 tracking-wide">Price</th>
              </tr>
            </thead>
            <tbody>
              {addedItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{index + 1}</td>
                  <td className="py-2 text-[17px] capitalize">{item.name}</td>
                  <td className="py-2">
                    <div className="flex justify-center items-center">
                      <div className="flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 256 256"
                            className={`fill-current bg-blue-400 text-white rounded hover:cursor-pointer hover:bg-blue-500 ${
                              item.quantity <= 1
                                ? "hover:cursor-not-allowed"
                                : ""
                            }`}
                            onClick={() => decreaseQuantity(index)}
                          >
                            <path d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12"></path>
                          </svg>
                        </span>

                        <input
                          type="number"
                          id="quantity"
                          className="w-20 pl-2 py-0.5 bg-gray-200 outline-none rounded text-center"
                          min={1}
                          value={item.quantity}
                          readOnly
                        />

                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            className="fill-current bg-blue-600 text-white rounded hover:cursor-pointer hover:bg-blue-700"
                            onClick={() => increaseQuantity(index)}
                          >
                            <path d="M11 13H6q-.425 0-.712-.288T5 12q0-.425.288-.712T6 11h5V6q0-.425.288-.712T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.712-.288T11 18z"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2">₹{item.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan="4"
                  className="text-right font-semibold text-xl py-4 pr-36"
                >
                  Total Amount : ₹{Number(totalAmount).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default App;
