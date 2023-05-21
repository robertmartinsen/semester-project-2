import { postsUrl } from "../../../../endpoints/urls.js"
import { headers } from "../../../../storage/headers.js"

export async function userBid(listingId, bid) {
  try {
    const currentBid = await getCurrentBid(listingId)

    if (bid.amount > currentBid) {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(bid),
        headers: headers("application/json"),
      }

      const response = await fetch(
        `${postsUrl}/${listingId}/bids`,
        requestOptions
      )
      const responseData = await response.json()

      if (response.ok) {
        return responseData
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getCurrentBid(listingId) {
  try {
    const response = await fetch(`${postsUrl}/${listingId}`)
    const responseData = await response.json()

    if (response.ok) {
      return responseData.currentBid || 0
    } 
  } catch (error) {
    console.error(error)
  }
}
