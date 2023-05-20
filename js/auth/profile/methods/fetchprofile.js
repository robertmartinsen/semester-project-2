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
      return {
        ...profile,
        credits: profile.credits
      };
    } 
  } catch (error) {
    console.log(error)
  }
}

export async function getListingsByProfile(profileName) {
  try {
    const response = await fetch(`${profilesUrl}/${profileName}/listings`, { headers: headers() });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error)
  }
}







