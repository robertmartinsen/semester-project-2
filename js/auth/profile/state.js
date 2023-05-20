import { load } from "../../storage/load.js"

export const profile = () => {
  const loadedProfile = load("accessToken")
  return loadedProfile
}
