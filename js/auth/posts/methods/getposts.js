import { postsUrl } from "../../../endpoints/urls.js"
import { headers } from "../../../storage/headers.js"

export async function getPosts(tag = "") {
  const response = await fetch(`${postsUrl}?_active=true&_tag=${tag}`, {
    headers: headers(),
  })

  if (response.ok) {
    return await response.json()
  }

  throw new Error("Failed to fetch posts")
}
