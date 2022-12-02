import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCartLottie from "./EmptyCartLottie";
import LineasAbstractas from "./LineasAbstractas";
import CartItem from "./CartItem";

// import Lottie from "lottie-react";
// import girlThinking from "../assets/lotties/girlThinking.json";
const deliveryFees = 2.5;

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [total, setTotal] = useState(0);
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTotal(totalPrice);
    console.log(total);
  }, [total, flag]);

  return (
    <motion.div
      initial={{ opacity: 0.8, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.8, x: 200 }}
      className="z-[10] w-full md:w-375 h-screen backdrop-blur-sm bg-slate-150 opacity-10 drop-shadow-md flex flex-col fixed top-0 right-0"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={showCart}
          className="text-orange-500 text-3x1 relative top-[59px] text-[30px] font-bold hover:bg-gray-600 right-[16px] transition-all p-[4px] rounded-tl-[32px] rounded-md"
        >
          <MdCloseFullscreen className="z-[200]" />
        </motion.div>
        {/* <p className="text-textColor text-lg font-semibold">Cart</p> */}
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex- items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-75 transition-all cursor-pointer text-textColor text-base"
        >
          Clear <RiRefreshFill className="inline" />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          {/* cart items section */}
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none ">
            <LineasAbstractas />
            {/* cart items */}
            {cartItems &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly p-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg ">Sub total</p>
              <p className="text-gray-400 text-lg ">$ {total}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg ">Delivery</p>
              <p className="text-gray-400 text-lg ">$2.5</p>
            </div>

            <div className="w-full flex border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total </p>
              <p className="text-gray-200 text-xl font-semibold">
                $ {total + deliveryFees}
              </p>
            </div>

            {user ? (
              <motion.button
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
                type="button"
                whileTap={{ scale: 0.8 }}
              >
                Chek out
              </motion.button>
            ) : (
              <button
                className="w-full p-2 rounded-full bg-gradient-to-tr from-gray-400 to-gray-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
                disabled={true}
              >
                Please login to chek out
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          {/* <img src={emptyCart} className="w-300" alt="emptyCart" /> */}
          <div>
            <EmptyCartLottie />
          </div>
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
