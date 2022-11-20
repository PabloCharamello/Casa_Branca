import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full">test</div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full">hola</div>
    </div>
  );
};

export default Navbar;
