import React from "react";
import Logo from "../assets/img/Logo1.png";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-1 bg-white rounded-tr-[100%] rounded-tl-xl  shadow md:px-6 dark:bg-orange-500 ">
      <div className="sm:flex flex sm:justify-between lg:justify-between md:justify-between xl:justify-between xxl:justify-between flex-wrap ml-2 ">
        <ul className="flex text-lg flex-wrap items-end dark:text-slate-100 ulFooter justify-center">
          <li>
            <Link to="/" className="mr-3 hover:underline md:mr-6">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="mr-5 h-10 w-10 hover:underline md:mr-6">
              Menu
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pablocharamello/"
              className="hover:underline"
            >
              <BsLinkedin className="hover:scale-110 duration-200 transition-transform h-9 w-9 mt-10 md:h-7 md:w-7 mb-[5.5px] drop-shadow-md" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/PabloCharamello/Casa_Branca"
              class="hover:underline"
            >
              <AiFillGithub className="hover:scale-110 duration-200 transition-transform h-10 w-10 md:h-8 md:w-8 mb-1 ulFooter drop-shadow-md  ml-1 mr-20" />
            </a>
          </li>
        </ul>
        <Link to="/" class="flex items-center mb-4 sm:mb-0 mt-1">
          <img
            src={Logo}
            class="mr-3 mb-3 h-12 sm:h-8 sm:mr-2"
            alt="CasaBranca Logo"
          />
          <span class="casaBranca self-center xl:text-[2.2rem] lg:text-[2.2rem] md:text-[2.2rem] whitespace-nowrap dark:text-slate-100 sm:mr-2 sm:text-[1.8rem]">
            Casa Branca
          </span>
        </Link>
      </div>
      <hr className="my-1 border-gray-200 sm:mx-auto dark:border-slate-100 lg:my-1" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-slate-100">
        © 2022{" "}
        <Link to="/" className="hover:underline">
          Casa Branca
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
