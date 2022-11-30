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
      className={`w-full flex items-center gap-3 scroll-smooth h-full py-5 ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item?.id}
            className="w-[250px] h-full sm:w-[200px]  md:w-[200px] lg:w-[200px] sm:h-full rounded-lg lg:p-4 p-14 lg:my-3 md:-my-5  backdrop-blur-lg hover:drop-shadow-md transition-all duration-150 flex flex-col items-center justify-end bg-slate-150 md:h-auto lg:h-full lg:min-w-[250px] xl:h-full xl:w-auto"
          >
            <div className="w-[170px] md:w-[140px] md:h-auto flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt=""
                className="md:w-[170px] -mt-8 sm:h-full lg:w-[200px] lg:h-auto xxl:h-[160px] drop-shadow-2xl content-center xl:w-full xl:h-auto md:h-full xxl:h-full"
              />
            </div>
            <div className="w-full flex items-end flex-col">
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
