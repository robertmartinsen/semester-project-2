import { profilesUrl } from "../../endpoints/urls.js";
import { headers } from "../../headers.js";
import { profile } from "./state.js";

export async function updateProfileImage(avatar) {
  const me = profile();

  try {
    const url = `${profilesUrl}/${me.name}/media`;
    const requestOptions = {
      method: "PUT",
      body: JSON.stringify({ avatar }),
      headers: headers("application/json"),
    };

    const response = await fetch(url, requestOptions);

    const responseData = await response.json(); 

    if (response.ok) {
      return responseData;
    }

    throw new Error(responseData.statusText);
  } catch (error) {
    console.error(error);

  }
}



  
 