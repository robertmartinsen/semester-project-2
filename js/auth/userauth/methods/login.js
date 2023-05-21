import { loginUrl } from "../../../endpoints/urls.js"
import { save } from "../../../storage/save.js"

export async function login(userLogin) {
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })

    if (response.status === 200) {
      const user = await response.json()
      save("accessToken", user.accessToken)
      return user
    }

    if (!response.ok) {
      throw new Error('Failed to login user')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
