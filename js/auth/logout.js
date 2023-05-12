import { clear } from "../storage";

export function logout() {
    clear("token")
    remove("profile")
}