import { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";

import { saveShippingInfo } from "../utils/firebaseFunctions";

const Chekout = () => {
  const [{ cartItems }] = useStateValue();
  const [total, setTotal] = useState();

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTotal(totalPrice);
    console.log(total);
  }, [total, cartItems]);

  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [corner, setCorner] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [msg, setMsg] = useState("");
  const [fields, setFields] = useState(null);
  const [alertStatus, setAlertStatus] = useState("");

  const saveDetails = () => {
    // setIsLoading(true);
    try {
      if (!name || !street || !street || !email || !phone || !city) {
        setFields(true);
        setMsg(`Product details must be completed`);
        setAlertStatus("danger");
        // setTimeout(() => {
        //   setFields(false);
        //   setIsLoading(false);
        // }, 4000);
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
        saveShippingInfo(data);
        // setIsLoading(false);
        setFields(true);
        setMsg("Data saved successfully");
        clearData();
        setAlertStatus("Success");
        // setTimeout(() => {
        //   setFields(false);
        // }, 4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg(`Error while uploading: Try again!`);
      setAlertStatus("danger");
      // setTimeout(() => {
      //  setFields(false);
      //    setIsLoading(false);
      // }, 4000);
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

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2  w-full border border-gray-300 rounded-lg">
        <div className="w-full py-2 flex-1 flex flex-col items-center justify-center px-16">
          {" "}
          <p>Sheeping information</p>
          <label htmlFor="name" className="mt-4">
            Name:
          </label>
          <input
            type="text"
            htmlFor="name"
            placeholder="name"
            className="w-full"
            value={name}
          />
          <label htmlFor="street" className="mt-2">
            Street:
          </label>
          <input
            type="text"
            htmlFor="street"
            placeholder="street"
            className="w-full"
            value={street}
          />
          <label htmlFor="corner" className="mt-2">
            Corner:
          </label>
          <input
            type="text"
            htmlFor="corner"
            placeholder="corner"
            className="w-full"
            value={corner}
          />
          <label htmlFor="city" className="mt-2">
            City:
          </label>
          <input
            type="text"
            htmlFor="city"
            placeholder="city"
            className="w-full"
            value={city}
          />
          <label htmlFor="email" className="mt-2">
            Email:
          </label>
          <input
            type="text"
            htmlFor="email"
            placeholder="email"
            className="w-full"
            value={email}
          />
          <label htmlFor="phone" className="mt-2">
            Phone:
          </label>
          <input
            type="text"
            htmlFor="phone"
            placeholder="phone"
            className="w-full"
            value={phone}
          />
          <motion.button
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            type="button"
            className="mt-3 w-40 bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200"
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
