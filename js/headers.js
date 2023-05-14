import { load } from './storage/index.js';

export const headers = (contentType) => {
  const token = load("accessToken");
  const headers = {};

  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  if (token) {
    headers.Authorization = `Bearer ${token.accessToken}`; // Access the token value correctly
  }

  return headers;
};



