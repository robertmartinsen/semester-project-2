import { getPosts } from "../getposts.js"

async function fetchPosts() {
  try {
    const posts = await getPosts()
    console.log(posts)
  } catch (error) {
    console.error(error)
  }
}

fetchPosts()
