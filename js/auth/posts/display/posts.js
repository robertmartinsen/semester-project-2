import { getPosts } from "../methods/getposts.js"

async function displayPosts() {
  const posts = await getPosts()
  const postsContainer = document.getElementById("post-container")
  postsContainer.innerHTML = ""

  posts.forEach((post) => {
    if (post.title && post.description && post.media) {
      const postElement = document.createElement("div")
      postElement.innerHTML = `
        <div class="col col-lg-11">
          <a href="/html/product.html">
            <div class="card">
              <img src="${post.media}" class="card-img-top" alt="${post.title}">
              <div class="card-body">
                <h2 class="card-title d-flex justify-content-center">${post.title}</h2>
                <p class="card-desc">${post.description}</p>
              </div>
              <div class="bid-desc container pt-3">
                <p class="bid-price fw-bold">Current bid price: 300 credits</p>
                <p class="bids fw-bold">Bids: ${post._count.bids}</p>
                <p class="deadline fw-bold">Deadline: ${post.endsAt}</p>
              </div>
            </div>
          </a>
        </div>
      `
      postsContainer.appendChild(postElement)
    }
  })
}

displayPosts()
