import { updateProfileImage } from "../updateProfile.js";
import { profile } from "../state.js";

const editProfileBtn = document.getElementById("editprofile-btn");
const editProfileForm = document.getElementById("edit-profile-form");
const saveBtn = document.getElementById("save-btn");
const mediaInput = document.getElementById("avatar");
const descriptionInput = document.getElementById("description-input");
const profilePic = document.getElementById("profile-pic");

editProfileBtn.addEventListener("click", () => {
  console.log("Edit profile button clicked");
  editProfileBtn.classList.add("d-none");
  editProfileForm.classList.remove("d-none");
});

saveBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const newMedia = mediaInput.value.trim();
  const newDescription = descriptionInput.value.trim();

  try {
    await updateProfileImage(newMedia);
    editProfileForm.classList.add("d-none"); 
    editProfileBtn.classList.remove("d-none"); 
    profilePic.src = newMedia;
  } catch (error) {
    console.error(error);
  }
});

window.addEventListener("load", () => {
  const me = profile();
  const username = document.getElementById("username");

  if (me) {
    if (me.avatar !== null) {
      profilePic.src = me.avatar;
    } else {

      profilePic.src = "/assets/profile.jpeg";
    }
    username.textContent = `@${me.name}`;
    editProfileBtn.classList.toggle("d-none", !userIsAuthorized(me));

  } else {
    console.error("Failed to retrieve profile information");
  }
});

function userIsAuthorized(me) {
  const loggedInUser = profile();
  return loggedInUser && loggedInUser.name === me.name;
}



  


  
  

