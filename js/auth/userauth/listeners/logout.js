import { logout } from "../logout.js";

const logoutButton = document.getElementById('logout-btn');
logoutButton.addEventListener('click', (event) => {
  event.preventDefault();
  logout();
  window.location.href = "/dist/html/login.html";
});