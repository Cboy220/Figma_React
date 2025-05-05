const baseURL = 'https://florigroup.onrender.com'; // Replace with your API base URL

const getHeaders = () => {
  const token = localStorage.getItem('authToken'); // Replace with your token storage logic
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

const apiClient = {
  get: async (url, options = {}) => {
    const response = await fetch(`${baseURL}${url}`, {
      method: 'GET',
      headers: getHeaders(),
      ...options,
    });
    return response.json();
  },
  post: async (url, data, options = {}) => {
    const response = await fetch(`${baseURL}${url}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
      ...options,
    });
    return response.json();
  },
  put: async (url, data, options = {}) => {
    const response = await fetch(`${baseURL}${url}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
      ...options,
    });
    return response.json();
  },
  delete: async (url, options = {}) => {
    const response = await fetch(`${baseURL}${url}`, {
      method: 'DELETE',
      headers: getHeaders(),
      ...options,
    });
    return response.json();
  },
};

// Example API functions
export const logIn = (data) => apiClient.post('/api/auth/Client/1', data);
export const validateCoupon = (data) => apiClient.post('/api/clientusers/tiket', data);
// /api/secuencias/{{idevent}}/cliente?idclient=1
export const startGame = (idevent) => apiClient.post(`/api/secuencias/${idevent}/cliente?idclient=1`);
// {{base_url}}/api/eventinteractions
export const finishGame = (data) => apiClient.post(`/api/eventinteractions`, data);

export const createUser = (data) => apiClient.post('/api/users', data);
export const getAllUsers = () => apiClient.get('/api/users/all');
export const getUserById = (id) => apiClient.get(`/api/users/${id}`);
export const updateUser = (id, data) => apiClient.put(`/api/users/${id}`, data);
export const deleteUser = (id) => apiClient.delete(`/api/users/${id}`);
export const restoreUser = (id) => apiClient.post(`/api/users/${id}/restore`);

export const getAllEvents = () => apiClient.get('/api/events');
export const getEventById = (id) => apiClient.get(`/api/events/${id}`);
export const createEvent = (data) => apiClient.post('/api/events', data);
export const updateEvent = (id, data) => apiClient.put(`/api/events/${id}`, data);
export const deleteEvent = (id) => apiClient.delete(`/api/events/${id}`);
export const restoreEvent = (id) => apiClient.post(`/api/events/${id}/restore`);

export const createComment = (data) => apiClient.post('/api/comments', data);
export const getComments = (params) => apiClient.get('/api/comments', { params });
export const getCommentById = (id) => apiClient.get(`/api/comments/${id}`);
export const updateComment = (id, data) => apiClient.put(`/api/comments/${id}`, data);
export const deleteComment = (id) => apiClient.delete(`/api/comments/${id}`);

export default apiClient;