import { postsUrl } from "../../../endpoints/urls.js"
import { headers } from "../../../storage/headers.js"

export async function saveListing(listing) {
  try {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(listing),
      headers: headers("application/json"),
    }
    const response = await fetch(`${postsUrl}`, requestOptions)
    const responseData = await response.json()

    if (response.ok) {
      return responseData
    }
  } catch (error) {
    console.error(error)
    throw new Error("Failed to create the listing")
  }
}
