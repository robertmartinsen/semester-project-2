import { load } from "./load.js"

export const headers = (contentType) => {
  const token = load("accessToken")
  const headers = {}

  if (contentType) {
    headers["Content-Type"] = contentType
  }

  if (token) {
    headers.Authorization = `Bearer ${token.accessToken}`
  }

  return headers
}
