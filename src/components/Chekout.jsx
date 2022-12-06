import { useEffect, useState, dispatch } from "react";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";

import { getShippingInfo } from "../utils/firebaseFunctions";
import { storage } from "../firebase.config";
import { ref, uploadBytesResumable } from "firebase/storage";
import { actionType } from "../context/reducer";

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
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!name || !street || !street || !email || !phone || !city) {
        setFields(true);
        setMsg(`Product details must be completed`);
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
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
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg(`Error while saving: Try again!`);
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
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
      <section className="grid grid-cols-1 md:grid-cols-2  w-full border border-gray-300 rounded-lg">
        <div className="w-full py-1 flex-1 flex flex-col items-center justify-center px-4 sm:px-16 md:px-8 lg:px-16 xl:px-16 xxl:px-16">
          {" "}
          <p className="text-textColor font-semibold mt-3 text-2xl">
            Shipping information
          </p>
          <label htmlFor="name" className="mt-4">
            Name:
          </label>
          <input
            required
            type="text"
            id="name"
            placeholder=" Type your name"
            className="w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="street" className="mt-2">
            Street:
          </label>
          <input
            required
            type="text"
            id="street"
            placeholder=" Type the street"
            className="w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="corner" className="mt-2">
            Corner:
          </label>
          <input
            required
            type="text"
            id="corner"
            placeholder=" Type the corner"
            className="w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={corner}
            onChange={(e) => setCorner(e.target.value)}
          />
          <label htmlFor="city" className="mt-2">
            City:
          </label>
          <input
            required
            type="text"
            id="city"
            placeholder=" Type your city"
            className="w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="email" className="mt-2">
            Email:
          </label>
          <input
            required
            type="text"
            placeholder=" Type your email"
            id="email"
            className="w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone" className="mt-2">
            Phone:
          </label>
          <input
            required
            type="text"
            placeholder=" Type your phone"
            id="phone"
            className="w-full h-[30px] text-md placeholder:text-gray-400 text-gray-600 focus:placeholder-orange-300 font-semibold shadow-md rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <motion.button
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            type="button"
            className="mt-4 mb-4 md:w-48 bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-xl transition-all ease-in-out duration-200 shadow-md"
            onClick={() => saveDetails()}
          >
            <motion.p whileTap={{ scale: 0.8 }}>Submit!</motion.p>
          </motion.button>
        </div>

        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
          {" "}
          <h1 className="flex items-center justify-center">{total}</h1>
        </div>
      </section>
    </>
  );
};

export default Chekout;
