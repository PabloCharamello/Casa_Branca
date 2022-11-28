import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./tailwind.css";
import Navbar from "./components/Navbar";
import { CreateProduct, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence>
      <div className="flex flex-col bg-primary">
        <Navbar />
        <main className="mt-14 md:mt-20 px-3 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createitem" element={<CreateProduct />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
