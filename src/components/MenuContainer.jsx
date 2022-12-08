import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";
import { categories } from "../utils/DB";
import RowContainer from "./RowContainer";
import { IoFastFood } from "react-icons/io5";

const MenuContainer = () => {
  const [filter, setFilter] = useState({});

  const [{ foodItems }] = useStateValue();

  return (
    <section className="w-full my-5 " id="Menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2x1 font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-1 mr-auto before:l-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 -mb-3 mt-2">
          Our categories and hot dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center sm:gap-7 md:gap-8 lg:gap-8 xl:gap-8 gap-3 mt-16 pb-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.8 }}
                duration={{ duration: 100 }}
                key={category.id}
                className={`group shadow-md ${
                  filter === category.urlParamName
                    ? "bg-cartNumBg"
                    : "bg-cardMenu"
                } hover:md:bg-red-400 hover:lg:bg-red-400 hover:xl:bg-red-400 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 ${
                    filter === category.urlParamName
                      ? "bg-red-800"
                      : "bg-cartNumBg"
                  } rounded-full group-hover:bg-cardMenu group-hover:shadow-xl flex items-center justify-center`}
                >
                  <IoFastFood className="text-white group-hover:text-textColor text-xl" />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
