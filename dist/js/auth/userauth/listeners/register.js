import { register } from "../methods/register.js"

export const signupForm = document.getElementById('signup-form')
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const emailInput = document.getElementById('email-input')
  const nameInput = document.getElementById('name-input')
  const passwordInput = document.getElementById('password-input')

  const name = nameInput.value.trim()
  const email = emailInput.value.trim()
  const password = passwordInput.value.trim()

  let isValid = true

  if (!name) {
    document.getElementById("name-error").textContent = 'Name is required'
    isValid = false
  }

  if (!email) {
    document.getElementById("email-error").textContent = 'Email is required'
    isValid = false
  } else if (
    !email.endsWith('@noroff.no') &&
    !email.endsWith('@stud.noroff.no')
  ) {
    document.getElementById('email-error').textContent =
      'Email address has to end with "noroff.no" or "stud.noroff.no"'
    isValid = false
  }

  if (!password) {
    document.getElementById('password-error').textContent =
      'Password is required'
    isValid = false
  } else if (password.length < 8) {
    document.getElementById('password-error').textContent =
      'Password must be at least 8 characters long'
    isValid = false
  }

  if (isValid) {
    try {
      await register({ name, email, password })
      signupForm.reset()
      window.location.href = "/dist/html/login.html"
    } catch (error) {
      console.log(error)
    }
  }
})

