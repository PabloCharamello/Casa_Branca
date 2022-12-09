import React from "react";
import Logo from "../assets/img/Logo1.png";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="p-1 bg-white rounded-tr-[100%] rounded-tl-xl  shadow md:px-6 dark:bg-orange-500 ">
      <div class="sm:flex flex sm:justify-between lg:justify-between md:justify-between xl:justify-between xxl:justify-between flex-wrap ml-2 ">
        <ul class="flex text-lg flex-wrap items-end dark:text-slate-100 ulFooter justify-center">
          <li>
            <a href="#" class="mr-3 hover:underline md:mr-6">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 h-10 w-10 hover:underline md:mr-6">
              Menu
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              <BsLinkedin className="h-9 w-9 mt-10 md:h-7 md:w-7 mb-[5.5px] drop-shadow-md" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/PabloCharamello/Casa_Branca"
              class="hover:underline"
            >
              <AiFillGithub className="h-10 w-10 md:h-8 md:w-8 mb-1 ulFooter drop-shadow-md  ml-1" />
            </a>
          </li>
        </ul>
        <a
          href="https://flowbite.com/"
          class="flex items-center mb-4 sm:mb-0 mt-1"
        >
          <img
            src={Logo}
            class="mr-3 mb-3 h-12 sm:h-8 sm:mr-2"
            alt="CasaBranca Logo"
          />
          <span class="casaBranca self-center xl:text-[2.2rem] lg:text-[2.2rem] md:text-[2.2rem] whitespace-nowrap dark:text-slate-100 sm:mr-2 sm:text-[1.8rem]">
            Casa Branca
          </span>
        </a>
      </div>
      <hr class="my-1 border-gray-200 sm:mx-auto dark:border-slate-100 lg:my-1" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-slate-100">
        © 2022{" "}
        <a href="" class="hover:underline">
          Casa Branca
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
