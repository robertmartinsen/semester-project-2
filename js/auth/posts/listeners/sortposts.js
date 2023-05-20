import { displayPosts } from "../display/posts.js";

document.addEventListener('DOMContentLoaded', async () => {
  const filterForm = document.getElementById('filter-form');
  const searchInput = document.getElementById('search-input');

  filterForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchQuery = searchInput.value;
    await displayPosts('', searchQuery);
  });

  // Initial display of posts
  await displayPosts();
});
  

  