import { fetchUser } from "../utils/fetchLocalStorageData";
// eslint-disable-next-line
const userInfo = fetchUser;

export const initialState = {
  user: userInfo,
};
console.log(initialState.user);
