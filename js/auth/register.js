import { registerUrl } from "../endpoints/urls";

export async function register(userRegistration); {
try {
    const response = await fetch (registerUrl, {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRegistration),
    });

    if (!response.ok) {
        throw new Error('Failed to register new user')
    }

    const data = await response.json()
    return data;

} catch (error) {
    console.log(error)
}
}