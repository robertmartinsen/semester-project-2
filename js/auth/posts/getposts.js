import { postsUrl } from "../../endpoints/urls.js"
import { headers } from "../../headers.js"

export async function getPosts() {
  const response = await fetch(`${postsUrl}`, { headers: headers() })
  if (response.ok) {
    return await response.json()
  }

  throw new Error("Failed to fetch posts")
}
