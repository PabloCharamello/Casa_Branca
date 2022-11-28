import { fetchUser } from "../utils/fetchLocalStorageData";
// eslint-disable-next-line
const userInfo = fetchUser;

export const initialState = {
  user: null,
  foodItems: null,
};
