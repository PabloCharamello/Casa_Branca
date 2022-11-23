import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "./tailwind.css";
import { CreateContainer, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <div className="flex flex-col bg-primary">
        <Navbar />
        <main className="mt-14 md:mt-20 px-3 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createitem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
