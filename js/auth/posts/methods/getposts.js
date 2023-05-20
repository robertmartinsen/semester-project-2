import { postsUrl } from "../../../endpoints/urls.js"
import { headers } from "../../../headers.js"

export async function getPosts(tag = '') {
  const response = await fetch(`${postsUrl}?_active=true&_tag=${tag}`, { headers: headers() })
  console.log(response)
  if (response.ok) {
    return await response.json()
  }

  throw new Error('Failed to fetch posts')
}





