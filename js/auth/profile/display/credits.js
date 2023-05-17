import { getProfile } from "../methods/fetchprofile.js"
import { profile } from "../state.js"

function updateCredits(credits) {
  const creditsLgElement = document.getElementById("profile-credits-lg")
  const creditsElement = document.getElementById("profile-credits")
  creditsElement.textContent = `My Credits: ${credits}`
  creditsLgElement.textContent = `My Credits: ${credits}`
}

window.addEventListener("load", async () => {
  const me = profile()
  if (me) {
    try {
      const profile = await getProfile(me.name)
      updateCredits(profile.credits)
    } catch (error) {
      console.error("Failed to retrieve profile information", error)
    }
  } else {
    console.error("Failed to retrieve profile information")
  }
})
