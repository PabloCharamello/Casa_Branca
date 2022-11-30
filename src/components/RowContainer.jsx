import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 flex items-center gap-3 scroll-smooth h-[400px] ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item?.id}
            className="w-[300px] sm:min-w-[150px  md:min-w-[340px] h-[270px] sm:h-[240px] rounded-lg p-4 my-12  backdrop-blur-lg hover:drop-shadow-md transition-all duration-150 flex flex-col items-center justify-end bg-slate-50"
          >
            <div className="w-[180px] flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt=""
                className="w-auto -mt-8 h-[120px] sm:h-[100px] md:h-[160px] lg:h-[160px] xxl:h-[160px] drop-shadow-2xl"
              />
            </div>
            <div className="w-full flex items-end flex-col ">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Calories: {item?.calories}
              </p>
              <div className="flex items-center gap-8">
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer"
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
                <p className="text-lg text-headingColor font-semibold ">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
