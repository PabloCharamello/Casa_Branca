import { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getShippingInfo } from "../utils/firebaseFunctions";

import TrainLoader from "./TrainLoader";
import CartContainer from "./CartContainer";
import CellPhonePayment from "./CellPhonePayment";

const Chekout = () => {
  const [{ cartItems, cartShow }] = useStateValue();
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
  // eslint-disable-next-line
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
        }, 5000);
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
        setMsg("Shipping Information saved successfully");
        setIsLoading(false);
        setFields(true);
        clearData();
        setAlertStatus("Success");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
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

  //Por si quiero recuperar los formularios enviados de los usuarios:
  // const fetchAllDirections = async () => {
  //   await getShippingInfo().then((data) => {
  //   ({
  //       type: actionType.SET_SHIPPING_INFO,
  //       shippingInfo: data,
  //     });
  //   });
  // };

  return (
    <>
      <section className="overflow-hiden z-10 grid grid-cols-1 md:grid-cols-2 w-full border  border-gray-300 rounded-lg mt-3 md:mt-0 items-center">
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
              alertStatus === "danger"
                ? "bg-orange-500 text-red-800 hover:-x-20"
                : "bg-green-400 text-emerald-800 hover:x-20"
            }`}
            onClick={() => saveDetails()}
          >
            <motion.p whileTap={{ scale: 0.8 }}>Submit!</motion.p>
          </motion.button>
          {msg === "Shipping Information saved successfully" && (
            <motion.div
              initial={{ opacity: 0.5, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.5, x: -500 }}
              className="duration-200 justify-center sm:items-center mb-60 sm:mb-60 ease-out z-[100] w-full md:mt-60 md:w-375 lg:mt-80 xl:mt-60 xxl:w-460 h-40 drop-shadow-md flex fixed"
            >
              <CellPhonePayment />
            </motion.div>
          )}
        </div>

        {fields && (
          <div className="flex justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`z-50 -mt-3 sm:mx-16 md:mx-10 lg:mx-20 xl:mx-20 xxl:mx-36 mx-5 duration-200 transition-opacity rounded-lg text-center border-2 border-orange-600 text-lg font-semibold py-1 px-2 ${
                alertStatus === "danger"
                  ? "bg-orange-500 text-slate-200"
                  : "bg-emerald-400 text-emerald-800 hidden"
              }`}
            >
              {msg}
            </motion.p>
          </div>
        )}

        <TrainLoader />
      </section>
      {cartShow && <CartContainer />}
      {cartShow ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-[100] w-full md:w-375 xxl:w-460 h-20 bg-slate-150 opacity-100 drop-shadow-md flex fixed bottom-0 right-0"
        >
          <button
            disabled={true}
            className="z-[200] w-full rounded-full bg-gradient-to-tr from-gray-400 to-gray-600 text-gray-50 text-lg my-3 hover:shadow-lg transition-all duration-150 ease-out"
          >
            Complete the shipping form!
          </button>
        </motion.div>
      ) : (
        <motion.div
          whileTap={{ scale: 0.85 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-[100] w-full md:w-375 xxl:w-460 h-20 hidden sm:hidden md:flex lg:flex xl:flex xxl:flexbg-slate-150 opacity-100 drop-shadow-md fixed bottom-0 right-0"
        >
          <Link
            to="/"
            className="flex items-center justify-center z-[200] w-full rounded-full bg-gradient-to-tr from-gray-400 to-gray-600 text-gray-50 text-lg my-3 hover:shadow-lg opacity-90 transition-all duration-150 ease-out"
          >
            <button className="">Shoop more!</button>
          </Link>
        </motion.div>
      )}
      {msg === "Shipping Information saved successfully" && (
        <motion.div
          initial={{ opacity: 0.5, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.5, x: -500 }}
          className="duration-200 ease-out z-[100] w-full md:w-375 xxl:w-460 h-20 bg-slate-150 opacity-100 drop-shadow-md flex fixed bottom-0 right-0"
        >
          <Link
            to="/thanksForPurchase"
            className="z-[200] w-full rounded-full bg-gradient-to-tr from-orange-400 to-gray-600 text-slate-100 text-2x1 my-3 hover:shadow-lg  hover:text-orange-200 casaBranca hover:bg-orange-800 transition-all duration-200 ease-out flex items-center justify-center"
          >
            <button disabled={false}>Purchase</button>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Chekout;
