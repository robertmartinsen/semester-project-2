export const load = (value) => {
  try {
    return JSON.parse(localStorage.getItem(value));
  } catch {
    return null;
  }
};



