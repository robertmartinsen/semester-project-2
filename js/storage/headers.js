export const headers = (contentType) => {
    const headers = {};
    const accessToken = localStorage.getItem('accessToken');
  
    if (contentType) {
      headers['Content-Type'] = contentType;
    }
  
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
  
    return headers;
  };
  