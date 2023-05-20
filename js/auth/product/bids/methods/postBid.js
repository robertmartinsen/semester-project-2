import { postsUrl } from "../../../../endpoints/urls.js";
import { headers } from "../../../../headers.js";

export async function userBid(listingId, bid) {
  try {
    // Get the current bid for the listing
    const currentBid = await getCurrentBid(listingId);

    // Validate the bid amount
    if (bid.amount > currentBid) {
      // Proceed with creating the bid
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(bid),
        headers: headers("application/json"),
      };

      const response = await fetch(`${postsUrl}/${listingId}/bids`, requestOptions);
      const responseData = await response.json();

      if (response.ok) {
        return responseData;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getCurrentBid(listingId) {
  try {
    const response = await fetch(`${postsUrl}/${listingId}`);
    const responseData = await response.json();

    if (response.ok) {
      return responseData.currentBid || 0;
    } else {
      throw new Error(responseData.errors[0].message);
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch the current bid');
  }
}



