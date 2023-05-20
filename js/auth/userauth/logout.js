import { clear } from "../../storage/index.js"

export function logout() {
  clear("accessToken")
  clear("profile")
}
