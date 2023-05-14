import { login } from "../login.js"

export const loginForm = document.getElementById("login-form")
loginForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  const emailInput = document.getElementById("email-input")
  const passwordInput = document.getElementById("password-input")

  const email = emailInput.value.trim()
  const password = passwordInput.value.trim()

  let isValid = true

  if (!email) {
    document.getElementById("email-error").textContent = "Email is required"
    isValid = false
  }

  if (!password) {
    document.getElementById("password-error").textContent =
      "Password is required"
    isValid = false
  }

  if (isValid) {
    loginForm.reset()

    try {
      const accessToken = await login({ email, password })
      if (accessToken) {
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
        window.location.href = "/auth/index.html"
      }
    } catch (error) {
      console.log(error)
    }
  }
})
