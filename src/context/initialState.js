import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";
// eslint-disable-next-line
const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
