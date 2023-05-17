import { getListingsByProfile } from "../methods/fetchprofile.js";
import { profile } from "../state.js";

window.addEventListener("load", async () => {
  const me = profile();
  if (me) {
    try {
      const listings = await getListingsByProfile(me.name);
      displayListings(listings);
    } catch (error) {
      console.error("Failed to retrieve user listings", error);
    }
  } else {
    console.error("Failed to retrieve profile information");
  }
});

function displayListings(listings) {
  const listingsContainer = document.getElementById("postbyuser-container");
  listingsContainer.innerHTML = "";

  listings.forEach((listing) => {
    const listingElement = document.createElement("div");
    listingElement.innerHTML = `
      <div class="row align-items-center justify-content-center rounded d-flex">
        <div class="col-md-5 mt-5 mt-md-0 profile-pic-container">
          <img src="${listing.media && listing.media[0]}" class="product-pic">
        </div>
        <div class="col-md-5 mt-5 -mt-md-0 fw-bold">
          <h1 class="fw-bold justify-content-center d-flex">${listing.title}</h1>
          <p>${listing.description}</p>

          <div class="pt-2 fw-bold">
            <p>Created: ${listing.created}</p>
            <p>Deadline: ${listing.endsAt}</p>
            <hr>
            <p>Current bid price:</p>
            <p>Amount of bids: ${listing._count && listing._count.bids || 0}</p>
          </div>
          <div class="mb-3 mt-4">
            <h1 class="justify-content-center d-flex">Enter an amount</h1>
            <form>
              <div class="col-md-12">
                <input type="text" class="form-control" id="amount">
              </div>
            </form>
            <div class="justify-content-center d-flex">
              <button class="btn mt-3" id="bid-btn">Make a bid</button>
            </div>
          </div>
        </div>
      </div>
    `;
    listingsContainer.appendChild(listingElement);
  });
}




  
  

  
  





