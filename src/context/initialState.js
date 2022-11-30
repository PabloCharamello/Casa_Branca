import { fetchUser } from "../utils/fetchLocalStorageData";
// eslint-disable-next-line
const userInfo = fetchUser;

export const initialState = {
  user: userInfo,
  foodItems: null,
};
