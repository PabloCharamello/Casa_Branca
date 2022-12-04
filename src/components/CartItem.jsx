import React, { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({ item, flag, setFlag }) => {
  let items = [];
  const [qty, setQty] = useState(item.qty);
  const [{ cartItems }, dispatch] = useStateValue([]);

  const cartDispatch = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      if (qty == 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [qty, items]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2 ">
      <img
        src={item.imageURL}
        alt=""
        className="w-20 h-14 max-w-[55px] rounded-full object-contain z-[110]"
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item.title}</p>
        <p className="text-sm text-block text-gray-300 font-semibold">
          $ {parseFloat(item.price) * qty}
        </p>
      </div>
      {/* buttom section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiMinus
            className="text-gray-50"
            onClick={() => updateQty("remove", item?.id)}
          />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cardBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>

        <motion.div whileTap={{ scale: 0.75 }}>
          <BiPlus
            className="text-gray-50"
            onClick={() => updateQty("add", item?.id)}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
