import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data }) => {
  console.log(data);
  return (
    <div
      className={`w-full my-12 flex items-center gap-3 ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 min-w-[300px] md:min-w-[340px] md:w-300 bg-cardOverlay rounded-lg p-4 my-12 h-auto backdrop-blur-lg hover:drop-shadow-md transition-all duration-150"
          >
            <div className="w-full flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src="https://firebasestorage.googleapis.com/v0/b/casa-branca-82b73.appspot.com/o/images%2F1669590282441-i6.webp?alt=media&token=f6c19c23-8773-42bd-ba39-e2c34e432fb1"
                alt=""
                className="w-40 -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex items-end flex-col justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                nombre del producto
              </p>
              <p className="mt-1 text-sm text-gray-500">calorias</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold ">
                  <span className="text-sm text-red-500">$</span> precio
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
