export const Token = (accessToken, value) => {
    localStorage.setItem(accessToken, JSON.stringify(value));
    console.log(`Stored access token: ${value}`);
  }