import { getCurrentBid, userBid } from "../methods/postBid.js";

document.addEventListener('DOMContentLoaded', async () => {
  const bidButton = document.getElementById('bid-btn');
  const bidForm = document.getElementById('bid-form');
  const bidError = document.getElementById('bid-error');

  bidButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const amountInput = document.getElementById('bid-input');
    const amount = parseFloat(amountInput.value);

    bidError.textContent = '';

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const listingId = urlParams.get('id');

      const listing = await getCurrentBid(listingId);
      const currentHighestBid = listing.highestBid || 0;

      if (amount > currentHighestBid) {
        const bid = {
          amount: amount
        };

        await userBid(listingId, bid);

        bidForm.reset();
        window.location.reload();
      } else {
        document.getElementById('bid-error').textContent = 'Make sure your bid is higher than the current and check if you have enough credit'
      }
    } catch (error) {
      console.error(error);
    }
  });
});









