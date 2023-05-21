import { updateProfileImage } from "../methods/updateprofile.js"
import { profile } from "../state.js"

const editProfileBtn = document.getElementById('editprofile-btn')
const editProfileForm = document.getElementById('edit-profile-form')
const saveBtn = document.getElementById('save-btn')
const mediaInput = document.getElementById('avatar')
const profilePic = document.getElementById('profile-pic')
const errorContainer = document.getElementById('error-container')

editProfileBtn.addEventListener('click', () => {
  editProfileBtn.classList.add('d-none')
  editProfileForm.classList.remove('d-none')
  errorContainer.textContent = ''
})

saveBtn.addEventListener("click", async (event) => {
  event.preventDefault()

  const newMedia = mediaInput.value.trim()

  if (!isValidImageUrl(newMedia)) {
    errorContainer.textContent = 'Invalid image URL'
    return
  }

  try {
    const isValid = await checkImageExists(newMedia)
    if (!isValid) {
      errorContainer.textContent = 'Invalid image URL'
      return
    }
    await updateProfileImage(newMedia)
    editProfileForm.classList.add('d-none')
    editProfileBtn.classList.remove('d-none')
    profilePic.src = newMedia
  } catch (error) {
    console.error(error)
  }
})

window.addEventListener('load', () => {
  const me = profile()
  const username = document.getElementById('username')

  if (me) {
    if (me.avatar !== null) {
      profilePic.src = me.avatar
    } else {
      profilePic.src = "/dist/assets/profile.jpeg"
    }
    username.textContent = `@${me.name}`
    editProfileBtn.classList.toggle('d-none', !userIsAuthorized(me))
  } else {
    console.error('Failed to fetch profile information')
  }
})

function userIsAuthorized(me) {
  const loggedInUser = profile()
  return loggedInUser && loggedInUser.name === me.name
}

function isValidImageUrl(url) {
  const imageUrlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/i
  return imageUrlRegex.test(url)
}

function checkImageExists(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}


