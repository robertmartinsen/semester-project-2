import { postsUrl } from "../../../endpoints/urls.js"
import { headers } from "../../../storage/headers.js"

export async function getListing(listingId) {
  const response = await fetch(`${postsUrl}/${listingId}`, {
    headers: headers(),
  })
  if (response.ok) {
    return await response.json()
  }

  throw new Error(`Failed to fetch listing with ID: ${listingId}`)
}
