import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/DB";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");

  return (
    <section className="w-full my-6" id="Menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2x1 font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-1 mr-auto before:l-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Our hot dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <div
                key={category.id}
                className={`group ${
                  filter === category.urlParamName
                    ? "bg-cartNumBg"
                    : "bg-cardMenu"
                } hover:bg-red-600 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center transition-all duration-150 ease-in-out`}
              >
                <div
                  className={`w-10 h-10 ${
                    filter === category.urlParamName
                      ? "bg-cardMenu"
                      : "bg-cartNumBg"
                  } rounded-full group-hover:bg-cardMenu group-hover:shadow-xl flex items-center justify-center`}
                >
                  <IoFastFood className="text-card group-hover:text-textColor text-xl" />
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
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
