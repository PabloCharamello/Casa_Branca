import { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
// import { total } from "./CartItem";

const Chekout = () => {
  const [{ cartItems }] = useStateValue();
  const [total, setTotal] = useState();

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTotal(totalPrice);
    console.log(total);
  }, [total, cartItems]);

  return (
    <div>
      <h1 className="flex items-center justify-center">{total}</h1>
    </div>
  );
};

export default Chekout;
