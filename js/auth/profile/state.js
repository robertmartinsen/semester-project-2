import { load } from "../../storage/index.js";

export const profile = () => {
  const loadedProfile = load("accessToken");
  return loadedProfile;
};