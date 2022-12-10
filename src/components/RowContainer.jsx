import React, { useEffect, useRef, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

import { motion } from "framer-motion";
import NotFound from "../assets/img/NotFound.svg";
import { MdShoppingBasket } from "react-icons/md";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart();
    // eslint-disable-next-line
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex gap-3 scroll-smooth h-full py-5 items-end ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center "
      }`}
    >
      {data?.length > 0 ? (
        data.map((item) => (
          <div
            id="categories"
            key={item?.id}
            className="w-[250px] h-60 sm:w-[200px] md:h-60 mt-8 md:mt-10 md:w-[220px] lg:min-w-[250px] sm:h-full rounded-lg lg:p-2 p-10 lg:my-3 sm:m-2   backdrop-blur-lg hover:drop-shadow-md transition-all duration-150 flex flex-col items-center justify-end bg-slate-150 lg:min-h-[240px]  xl:h-full xl:w-auto bg-slate-50 lg:mt-8"
          >
            <div className="w-[190px] md:w-[190px] sm:h-20 md:h-auto flex items-center lg:h-auto justify-center">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt=""
                className="md:h-36 md:w-auto -mt-8 sm:h-36 sm:w-auto w-auto h-36 drop-shadow-xl items-center xl:h-36 xl:w-auto xxl:w-auto xxl:h-36 object-contain"
              />
            </div>
            <div className="flex items-start flex-col lg:justify-end w-full md:w-full h-28">
              <p className="text-textColor font-semibold text-base ">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Calories: {item?.calories}
              </p>
              <div className="w-full flex items-center gap-4 justify-end">
                <p className="text-lg text-headingColor font-semibold ">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center cursor-pointer"
                  onClick={() => setItems([...cartItems, item])}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt="not found" />
          <p className="text-xl font-semibold text-slate-600 capitalize">
            Items not available
          </p>
          <motion.a
            whileTap={{ scale: 0.9 }}
            href="#categories"
            className="text-xl font-semibold text-orange-400 text-center underline italic hover:text-orange-600 transition-colors duration-150"
          >
            Select a category to show our products!
          </motion.a>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
