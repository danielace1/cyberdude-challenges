import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemName, itemPrice) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.name === itemName);
    const parsedPrice = parseFloat(itemPrice.replace(/,/g, ""));

    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      const updatedCart = cartItems.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      const newItem = { name: itemName, price: parsedPrice, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const formatPriceWithCommas = (price, quantity) => {
    const totalPrice = price * quantity;
    if (isNaN(totalPrice)) {
      return ""; // Return empty string if totalPrice is NaN
    }
    return Number(totalPrice).toLocaleString("en-IN");
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <nav className="bg-blue-500 px-10 py-5 flex justify-between ">
        <div className="flex items-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"
            alt="flip-cart"
            className="w-20"
          />
          <h1 className="text-white text-3xl font-semibold">Flip-Cart</h1>
        </div>
        <ul className="flex items-center space-x-10 text-white font-semibold text-xl">
          <li>Login</li>
          <li className="flex items-center">
            <span className="mr-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                  fill="#fff"
                ></path>
              </svg>
            </span>
            Cart
          </li>
          <li>
            <a
              href="https://github.com/danielace1/cyberdude-challenges/tree/master/javascript/03-react-js/08-flip-cart-items"
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
          </li>
        </ul>
      </nav>

      <section className="flex bg-gray-200 min-h-screen px-20 py-10">
        <div className="space-y-4 mr-5">
          {/* items */}
          <div className="flex space-x-24 border border-gray-300 rounded p-5">
            <div className="relative mt-10">
              <img
                src="https://devicexplore.com/frontend_asset/post_thumbnail/realme-c53.webp"
                alt="realme C53 (Champion Gold, 128 GB)"
                className="w-52 "
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 16"
                className="fill-current absolute -top-2 left-[220px] text-gray-500 hover:cursor-pointer hover:text-red-500"
              >
                <path
                  d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                  stroke="#FFF"
                  fillRule="evenodd"
                  opacity=".9"
                ></path>
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold">
                Realme C53 (Champion Gold, 128 GB)
              </h1>
              <div className="mt-2 flex items-center space-x-4">
                <span className="flex bg-green-700 rounded w-12 text-xs text-white px-2 py-1">
                  4.4
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                    className="w-4 ml-1"
                  />
                </span>
                <span className="flex items-center text-sm text-gray-400">
                  <span>1,02,042 Ratings&nbsp;</span>
                  <span>&amp;</span>
                  <span>&nbsp;4,655 Reviews</span>
                </span>
              </div>

              <ul className="mt-5 list-disc">
                <li>6 GB RAM | 128 GB ROM | Expandable Upto 2 TB</li>
                <li>17.12 cm (6.74 inch) HD Display</li>
                <li>108MP + 2MP | 8MP Front Camera</li>
                <li>5000 mAh Battery</li>
                <li>T612 Processor</li>
                <li className="mb-3">
                  1 Year Manufacturer Warranty for Phone and 6 Months Warranty
                  for In the Box Accessories
                </li>
                <span className=" text-red-600 font-semibold">
                  Only few left
                </span>
              </ul>

              <div className="mt-5">
                <div className="grid">
                  <div className="font-semibold text-2xl mb-3">
                    ₹9,499
                    <span
                      className="text-sm bg-orange-500 text-white ml-3  px-3  rounded py-2 hover:cursor-pointer hover:bg-orange-600"
                      onClick={() =>
                        addToCart("realme C53 (Champion Gold, 128 GB)", `9,499`)
                      }
                    >
                      ADD TO CART
                    </span>
                  </div>
                  <div className="flex">
                    <div className="text-gray-400 ">
                      <span className="line-through">₹13,999</span>
                      <span className="ml-5">32% off</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-10 border border-gray-300 rounded p-5">
            <div className="relative mt-20">
              <span className="bg-teal-600 text-white font-semibold px-2 py-1 text-sm rounded">
                Bestseller
              </span>
              <img
                src="https://lh3.googleusercontent.com/proxy/jOej4Ig34i2jiVHW6kgQ55ee7PBG6VosknP8JTY12jcq0tOoyC0xtfhq6jxGN_IxXtzeMW_EQx5aevlLZX-SOn7nzHxIDqs0dSYBNuYw4_t8HZ_1iPKvsZidVmcqOMtksT6zAlnwab8HIQUB6rjYF2iTT_YJBtg"
                alt="Acer Aspire 7 Intel Core i5 10th Gen"
                className=" "
              />

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 16"
                  className="fill-current absolute -top-5 left-[250px] text-gray-500 hover:cursor-pointer hover:text-red-500"
                >
                  <path
                    d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                    stroke="#FFF"
                    fillRule="evenodd"
                    opacity=".9"
                  ></path>
                </svg>
              </span>
            </div>

            <div>
              <h1 className="text-xl font-semibold">
                Acer Aspire 7 Intel Core i5 10th Gen - (8 GB/512 GB SSD/Windows
                10 Home/4 GB Graphics/NVIDIA GeForce G...)
              </h1>
              <div className="mt-2 flex items-center space-x-4">
                <span className="flex bg-green-700 rounded w-12 text-xs text-white px-2 py-1">
                  4.4
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                    className="w-4 ml-1"
                  />
                </span>
                <span className="flex items-center text-sm text-gray-400">
                  <span>13,684 Ratings&nbsp;</span>
                  <span>&amp;</span>
                  <span>&nbsp;1,453 Reviews</span>
                </span>
              </div>

              <ul className="mt-5 list-disc">
                <li>Free upgrade to Windows 11 when available</li>
                <li>Intel Core i5 Processor (10th Gen)</li>
                <li>8 GB DDR4 RAM</li>
                <li>64 bit Windows 10 Operating System</li>
                <li>512 GB SSD</li>
                <li>39.62 cm (15.6 inch) Display</li>
                <li>
                  Quick Access, Acer Care Center, Acer Product Registration,
                  Acer Collection
                </li>
                <li>1 Year International Travelers Warranty</li>
              </ul>

              <div className="mt-5">
                <div className="grid">
                  <div className="font-semibold text-2xl mb-3">
                    ₹50,400
                    <span
                      className="text-sm bg-orange-500 text-white ml-3  px-3  rounded py-2 hover:cursor-pointer hover:bg-orange-600"
                      onClick={() =>
                        addToCart(
                          "Acer Aspire 7 Intel Core i5 10th Gen",
                          `50,400`
                        )
                      }
                    >
                      ADD TO CART
                    </span>
                  </div>
                  <div className="flex">
                    <div className="text-gray-400 ">
                      <span className="line-through">₹89,999</span>
                      <span className="ml-5">43% off</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-10 border border-gray-300 rounded p-5">
            <div className="relative">
              <img
                src="https://images.samsung.com/is/image/samsung/p6pim/in/ua32t4380akxxl/gallery/in-hd-t4310-428849-ua32t4380akxxl-537157418?$650_519_PNG$"
                alt="SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition
                with Bezel-free Design"
                className=" "
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 16"
                className="fill-current absolute top-6 left-[330px] text-gray-500 hover:cursor-pointer hover:text-red-500"
              >
                <path
                  d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                  stroke="#FFF"
                  fillRule="evenodd"
                  opacity=".9"
                ></path>
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold">
                SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition
                with Bezel-free Design
              </h1>
              <div className="mt-2 flex items-center space-x-4">
                <span className="flex bg-green-700 rounded w-12 text-xs text-white px-2 py-1">
                  4.3
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                    className="w-4 ml-1"
                  />
                </span>
                <span className="flex items-center text-sm text-gray-400">
                  <span>1,23,197 Ratings&nbsp;</span>
                  <span>&amp;</span>
                  <span>&nbsp;9,904 Reviews</span>
                </span>
              </div>

              <ul className="mt-5 list-disc">
                <li>Operating System: Tizen</li>
                <li>HD Ready 1366 x 768 Pixels</li>
                <li>Launch Year: 2022</li>
                <li>
                  1 Year Comprehensive Warranty on Product and 1 Year Additional
                  on Panel
                </li>
              </ul>

              <div className="mt-5">
                <div className="grid">
                  <div className="font-semibold text-2xl mb-3">
                    ₹14,990
                    <span
                      className="text-sm bg-orange-500 text-white ml-3  px-3  rounded py-2 hover:cursor-pointer hover:bg-orange-600"
                      onClick={() =>
                        addToCart(
                          "  SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition",
                          `14,990`
                        )
                      }
                    >
                      ADD TO CART
                    </span>
                  </div>
                  <div className="flex">
                    <div className="text-gray-400 ">
                      <span className="line-through">₹18,900</span>
                      <span className="ml-5">20% off</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-10 border border-gray-300 rounded p-5">
            <div className="relative">
              <img
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1707471357/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/303908_xakuic.png?tr=w-600"
                alt="Godrej 5-in-1 Convertible Cooling 2023 Model 1 Ton 3 Star Split Inverter i-sense Technology with Blue ..."
                className=" "
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 16"
                className="fill-current absolute top-6 left-[330px] text-gray-500 hover:cursor-pointer hover:text-red-500"
              >
                <path
                  d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                  stroke="#FFF"
                  fillRule="evenodd"
                  opacity=".9"
                ></path>
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold">
                Godrej 5-in-1 Convertible Cooling 2023 Model 1 Ton 3 Star Split
                Inverter i-sense Technology with Blue ...
              </h1>
              <div className="mt-2 flex items-center space-x-4">
                <span className="flex bg-green-700 rounded w-12 text-xs text-white px-2 py-1">
                  4.1
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                    className="w-4 ml-1"
                  />
                </span>
                <span className="flex items-center text-sm text-gray-400">
                  <span>1,777 Ratings&nbsp;</span>
                  <span>&amp;</span>
                  <span>&nbsp;185 Reviews</span>
                </span>
              </div>

              <ul className="mt-5 list-disc">
                <li>Annual Power Usage: 694.03 kWh</li>
                <li>Room Size: 90 sqft or Below</li>
                <li>
                  10 years warranty on Inverter compressor,5 years warranty on
                  PCB &1 year comprehensive warranty.
                </li>
              </ul>

              <div className="mt-5">
                <div className="grid">
                  <div className="font-semibold text-2xl mb-3">
                    ₹28,990
                    <span
                      className="text-sm bg-orange-500 text-white ml-3  px-3  rounded py-2 hover:cursor-pointer hover:bg-orange-600"
                      onClick={() =>
                        addToCart(
                          " Godrej 5-in-1 Convertible Cooling 2023 Model",
                          `28,990`
                        )
                      }
                    >
                      ADD TO CART
                    </span>
                  </div>
                  <div className="flex">
                    <div className="text-gray-400 ">
                      <span className="line-through">₹42,900</span>
                      <span className="ml-5">32% off</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cart */}
        <div className="border border-gray-300 rounded px-7 py-5 w-1/2">
          <span className="text-2xl font-semibold">Your Cart</span>
          {cartItems.map((item, index) => (
            <div key={index} className="mt-3 capitalize mb-7 ">
              {index + 1}. {item.name}
              <div className="flex justify-between items-center mt-3">
                <div className="flex">
                  {/* Decrease quantity button */}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 256 256"
                      className={`fill-current bg-blue-400 text-white rounded  hover:bg-blue-500 ${
                        item.quantity <= 1
                          ? "hover:cursor-not-allowed"
                          : "hover:cursor-pointer"
                      }`}
                      onClick={() => decreaseQuantity(index)}
                    >
                      <path d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12"></path>
                    </svg>
                  </span>

                  {/* Input field for quantity */}
                  <input
                    type="number"
                    className="w-16 h-[20px] pl-3 outline-none text-center"
                    value={item.quantity}
                    readOnly
                  />

                  {/* Increase quantity button */}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="fill-current bg-blue-600 text-white rounded hover:cursor-pointer hover:bg-blue-700"
                      onClick={() => increaseQuantity(index)}
                    >
                      <path d="M11 13H6q-.425 0-.712-.288T5 12q0-.425.288-.712T6 11h5V6q0-.425.288-.712T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19q-.425 0-.712-.288T11 18z"></path>
                    </svg>
                  </span>
                </div>

                {/* Display item price */}
                <div className="flex text-lg">
                  Price :&nbsp;
                  <span className="font-semibold">
                    ₹ {formatPriceWithCommas(item.price, item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end font-semibold text-xl">
            Total Amount :&nbsp;{" "}
            <span>₹ {formatPriceWithCommas(getTotalPrice(), 1)}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
