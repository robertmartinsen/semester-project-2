import { profilesUrl } from "../../endpoints/urls.js";
import { headers } from "../../headers.js";

export async function getProfiles() {
  const response = await fetch(`${profilesUrl}`, { headers: headers() });
  if (response.ok) {
    return await response.json()
  }

  throw new Error(response.statusText);
}

export async function getProfile(name) {
  const response = await fetch(`${profilesUrl}/${name}`, { headers: headers() });
  if (response.ok) {
    const profile = await response.json();
    return {
      ...profile,
      credits: profile.credits
    };
  }

  throw new Error(response.statusText);
}



