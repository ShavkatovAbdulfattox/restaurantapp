import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

export const InitialState = {
  user: userInfo,
  foodItems: null,
};
