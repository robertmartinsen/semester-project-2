import { profilesUrl } from "../../../endpoints/urls.js";
import { headers } from "../../../headers.js";

export async function getProfiles() {
  const response = await fetch(`${profilesUrl}`, { headers: headers() });
  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText);
}

export async function getProfile(name) {
  try {
    const response = await fetch(`${profilesUrl}/${name}`, { headers: headers() });
    if (response.ok) {
      const profile = await response.json();
      console.log(profile);
      return {
        ...profile,
        credits: profile.credits
      };
    } else {
      throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error in getProfile: ${error.message}`);
  }
}

export async function getListingsByProfile(profileName) {
  try {
    const response = await fetch(`${profilesUrl}/${profileName}/listings`, { headers: headers() });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Failed to fetch listings: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error in getListingsByProfile: ${error.message}`);
  }
}







