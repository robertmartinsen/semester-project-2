import { getListing } from "../methods/getListingbyID.js";

async function displayListing(listingId) {
  if (listingId) {
    try {
      const listing = await getListing(listingId);
      const listingContainer = document.getElementById("listing-container");

      const listingElement = document.createElement('div');
      listingElement.classList.add('product-box', 'py-4', 'row');
      listingElement.innerHTML = `
        <div class="container col-md-6 mt-5 mt-md-0">
          <img src="${listing.media[0]}" class="mw-100 product-img" alt="${listing.title}" />
        </div>
        <div class="col-md-6 mt-5 mt-md-0">
          <div class="product-text">
            <h1 class="d-flex justify-content-center">${listing.title}</h1>
            <p>${listing.description}</p>
            <div class="pt-5">
              <p>Created: ${listing.created}</p>
              <p>Deadline: ${listing.endsAt}</p>
              <hr />
              <p>Amount of bids: ${listing._count && listing._count.bids || 0}</p>
            </div>
            <hr />
            
          </div>
        </div>
      `;

      listingContainer.appendChild(listingElement);
    } catch (error) {
      console.error('Failed to retrieve listing', error);
    }
  } else {
    console.error('Listing ID is missing');
  }
}

const urlParams = new URLSearchParams(window.location.search);
const listingId = urlParams.get('id');
displayListing(listingId);

