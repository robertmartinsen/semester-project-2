import { saveListing } from "../methods/fetchposts.js"

const publishBtn = document.getElementById('publish-btn')
publishBtn.addEventListener('click', handlePublish)

export function validateForm(listing) {
  const errors = []

  if (!listing.title.trim()) {
    document.getElementById('title-error').textContent = 'Title is required'
  }

  if (!listing.description.trim()) {
    document.getElementById('desc-error').textContent = 'Description is required'
  }

  if (listing.media.length === 0 || !listing.media[0].trim()) {
    document.getElementById('media-error').textContent = 'Media URL is required'
  }

  if (!listing.endsAt) {
    document.getElementById('endsAt-error').textContent = 'End date is required'
  } else {
    const deadline = new Date(listing.endsAt)
    if (isNaN(deadline.getTime())) {
      errors.push('Invalid deadline date')
    } else if (deadline < new Date()) {
      errors.push('Deadline must be in the future')
    }
  }

  return errors
}

export async function handlePublish(event) {
  event.preventDefault()

  const titleInput = document.getElementById('title')
  const descriptionInput = document.getElementById('description')
  const mediaInput = document.getElementById('media')
  const endsAtInput = document.getElementById('endsAt')

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

  const errors = validateForm(listing)

  if (errors.length > 0) {
    const errorContainer = document.getElementById('error-container')
    errorContainer.innerHTML = errors.map((error) => `<p>${error}</p>`).join('')
    return
  }

  try {
    await saveListing(listing)
  } catch (error) {
    console.error('Failed to save the listing', error)
  }
}

