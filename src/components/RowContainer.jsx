import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full  my-12 ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-225  my-12 h-auto backdrop-blur-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="https://firebasestorage.googleapis.com/v0/b/casa-branca-82b73.appspot.com/o/images%2F1669590282441-i6.webp?alt=media&token=f6c19c23-8773-42bd-ba39-e2c34e432fb1"
            alt=""
            className="w-40 -mt-8"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex items-end justify-end">
          <p className="text-textColor font-semibold text-base">algo</p>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
