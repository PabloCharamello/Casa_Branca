import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./tailwind.css";
import Navbar from "./components/Navbar";
import { CreateProduct, MainContainer, ThanksForPurchase } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Chekout from "./components/Chekout";
import Error404 from "./components/Error404";

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
        <main className="mt-14 md:mt-20 px-3 md:px-16 pt-4 w-full">
          <Routes>
            <Route exact path="/" element={<MainContainer />} />
            <Route exact path="/createitem" element={<CreateProduct />} />
            <Route exact path="/chekout" element={<Chekout />} />
            <Route
              exact
              path="/thanksForPurchase"
              element={<ThanksForPurchase />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
