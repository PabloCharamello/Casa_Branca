import { useEffect, useState, dispatch } from "react";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";

import { getShippingInfo } from "../utils/firebaseFunctions";
// import { storage } from "../firebase.config";
// import { ref, uploadBytesResumable } from "firebase/storage";
import { actionType } from "../context/reducer";
import TrainLoader from "./TrainLoader";

const Chekout = () => {
  const [{ cartItems }] = useStateValue();
  const [total, setTotal] = useState();

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTotal(totalPrice);
  }, [total, cartItems]);

  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [corner, setCorner] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!name || !street || !street || !email || !phone || !city) {
        setFields(true);
        setMsg(`Product details must be completed`);
        setAlertStatus("wrong");
      } else {
        const data = {
          id: `${Date.now()}`,
          name,
          street,
          corner,
          phone,
          email,
          city,
        };

        getShippingInfo(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data saved successfully");
        clearData();
        setAlertStatus("Success");
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg(`Error while saving: Try again!`);
      setAlertStatus("danger");
    }
  };

  const clearData = () => {
    setName("");
    setStreet("");
    setCorner("");
    setEmail("");
    setPhone("");
    setCity("");
  };

  const fetchAllDirections = async () => {
    await getShippingInfo().then((data) => {
      dispatch({
        type: actionType.SET_SHIPPING_INFO,
        shippingInfo: data,
      });
    });
  };

  return (
    <>
      <section className="overflow-hiden z-10 grid grid-cols-1 md:grid-cols-2  w-full border border-gray-300 rounded-lg mt-3 md:mt-0">
        <div className="z-10  w-full py-1 flex-1 flex flex-col items-center justify-center px-4 sm:px-16 md:px-8 lg:px-16 xl:px-16 xxl:px-16">
          {" "}
          <p className="text-textColor font-semibold mt-3 text-2xl">
            Shipping information
          </p>
          <label htmlFor="name" className="mt-4 text-textColor">
            Name:
          </label>
          <input
            required
            type="text"
            id="name"
            placeholder=" Type your name"
            className="z-10 w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="street" className="mt-2 text-textColor">
            Street:
          </label>
          <input
            required
            type="text"
            id="street"
            placeholder=" Type the street"
            className="z-10 w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="corner" className="mt-2 text-textColor">
            Corner:
          </label>
          <input
            required
            type="text"
            id="corner"
            placeholder=" Type the corner"
            className="z-10 w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={corner}
            onChange={(e) => setCorner(e.target.value)}
          />
          <label htmlFor="city" className="mt-2 text-textColor">
            City:
          </label>
          <input
            required
            type="text"
            id="city"
            placeholder=" Type your city"
            className="z-10 w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="email" className="mt-2 text-textColor">
            Email:
          </label>
          <input
            required
            type="text"
            placeholder=" Type your email"
            id="email"
            className="z-10 w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone" className="mt-2 text-textColor">
            Phone:
          </label>
          <input
            required
            type="text"
            placeholder=" Type your phone"
            id="phone"
            className="z-10 w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 100, x: 0 }}
            exit={{ opacity: 100, x: 0 }}
            type="button"
            className={`z-10 mt-4 mb-4 md:w-48 bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg transition-all  duration-100 shadow-md font-semibold ${
              alertStatus === "wrong"
                ? "bg-red-400 text-red-700 hover:-x-20"
                : "bg-emerald-400 text-emerald-800 hover:x-20"
            }`}
            onClick={() => saveDetails()}
          >
            <motion.p whileTap={{ scale: 0.8 }}>Submit!</motion.p>
          </motion.button>
        </div>

        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
          {" "}
          <h1 className="flex items-center justify-center">{total}</h1>
        </div>
        <TrainLoader />
      </section>
      {/* <div className="w-[100vw] flex justify-center items-center"></div> */}
    </>
  );
};

export default Chekout;
