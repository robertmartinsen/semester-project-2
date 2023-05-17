import { getListing } from "../methods/getListingbyID.js";

async function displayListing() {
  const urlParams = new URLSearchParams(window.location.search);
  const listingId = urlParams.get("id");

  if (listingId) {
    try {
      const listing = await getListing(listingId);
      const listingContainer = document.getElementById("listing-container");

      const listingElement = document.createElement("div");
      listingElement.classList.add("product-box", "py-4", "row");
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
              <p>Amount of bidders: ${listing._count && listing._count.bids || 0}</p>
            </div>
            <hr />
            <div>
              <h4 class="d-flex justify-content-center">Enter an amount</h4>
              <form action="" id="credit-input">
                <div class="mb-3">
                  <input
                    type="number"
                    class="form-control form-control-sm input-box"
                    placeholder="Enter an amount"
                    id="credit-input"
                  />
                  <div id="credit-error" class="error"></div>
                </div>
              </form>
              <div class="mt-3 d-flex justify-content-center">
                <button class="bid-btn btn fw-bold" id="credit-btn">Make a bid</button>
              </div>
            </div>
          </div>
        </div>
      `;

      // Append the listing element to the container
      listingContainer.appendChild(listingElement);
    } catch (error) {
      console.error("Failed to retrieve listing", error);
    }
  } else {
    console.error("Listing ID is missing");
  }
}

displayListing();
