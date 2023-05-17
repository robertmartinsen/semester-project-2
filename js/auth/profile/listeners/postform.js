import { saveListing } from "../methods/fetchposts.js"

const publishBtn = document.getElementById("publish-btn")
publishBtn.addEventListener("click", handlePublish)

export function validateForm(listing) {
  const errors = []

  if (!listing.title.trim()) {
    errors.push("Title is required")
  }

  if (!listing.description.trim()) {
    errors.push("Description is required")
  }

  if (listing.media.length === 0 || !listing.media[0].trim()) {
    errors.push("Media URL is required")
  }

  if (!listing.endsAt) {
    errors.push("Deadline is required")
  } else {
    const deadline = new Date(listing.endsAt)
    if (isNaN(deadline.getTime())) {
      errors.push("Invalid deadline date")
    } else if (deadline < new Date()) {
      errors.push("Deadline must be in the future")
    }
  }

  return errors
}

export async function handlePublish(event) {
  event.preventDefault()

  const titleInput = document.getElementById("title")
  const descriptionInput = document.getElementById("description")
  const mediaInput = document.getElementById("media")
  const endsAtInput = document.getElementById("endsAt")

  const title = titleInput.value
  const description = descriptionInput.value
  const media = [mediaInput.value.trim()]
  const endsAt = endsAtInput.value

  const listing = {
    title,
    description,
    media,
    endsAt,
  }

  console.log("Title:", listing.title)
  console.log("Description:", listing.description)
  console.log("Media:", listing.media)
  console.log("EndsAt:", listing.endsAt)

  const errors = validateForm(listing)

  if (errors.length > 0) {
    // Display form errors to the user
    // Example: You can create an error container element and populate it with the error messages
    const errorContainer = document.getElementById("error-container")
    errorContainer.innerHTML = errors.map((error) => `<p>${error}</p>`).join("")
    return
  }

  try {
    // Call the saveListing function passing the listing object
    await saveListing(listing)
    // Listing created successfully
  } catch (error) {
    console.error("Failed to save the listing", error)
  }
}

