import { getPosts } from "../auth/posts/methods/getposts.js"

export async function displayPosts(tag = "", searchQuery = "") {
  const posts = await getPosts(tag, searchQuery)
  const postsContainer = document.getElementById("post-container")
  postsContainer.innerHTML = ""

  posts.forEach((post) => {
    if (isValidListing(post) && matchesSearchQuery(post, searchQuery)) {
      const postElement = createPostElement(post)
      postsContainer.appendChild(postElement)
    }
  })
}

function isValidListing(post) {
  return post.title && post.description && post.media && post.media.length > 0
}

function matchesSearchQuery(post, searchQuery) {
  if (!searchQuery) {
    return true
  }

  const postTitle = post.title.toLowerCase()
  const postDescription = post.description.toLowerCase()

  return (
    postTitle.includes(searchQuery) || postDescription.includes(searchQuery)
  )
}

function createPostElement(post) {
  const postElement = document.createElement("div")
  postElement.innerHTML = `
    <div class="col col-lg-11">
      <a href="/html/login.html">
        <div class="card">
          <img src="${post.media}" class="card-img-top" alt="${post.title}">
          <div class="card-body">
            <h2 class="card-title d-flex justify-content-center">${post.title}</h2>
            <p>${post.description}</p>
          </div>
          <div class="bid-desc container pt-3">
            <p class="bids fw-bold">Bids: ${post._count.bids}</p>
            <p>Created: ${post.created}</p>
            <p class="deadline fw-bold">Deadline: ${post.endsAt}</p>
          </div>
        </div>
      </a>
    </div>
  `
  return postElement
}

document.addEventListener("DOMContentLoaded", async () => {
  const filterForm = document.getElementById("filter-form")
  const searchInput = document.getElementById("search-input")

  filterForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    const searchQuery = searchInput.value
    await displayPosts(searchQuery)
  })

  // Initial display of posts
  await displayPosts()
})
