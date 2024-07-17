// const API_BASE_URL = "https://backend-api-vercel-dep.vercel.app/"; // Replace with your actual backend URL

// export const fetchBlogs = async () => {
//   const response = await fetch(`${API_BASE_URL}/blogs`);
//   return response.json();
// };

// export const login = async (credentials) => {
//   const response = await fetch(`${API_BASE_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   });
//   return response.json();
// };

// export const createBlog = async (blogData) => {
//   const response = await fetch(`${API_BASE_URL}/blogs`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${localStorage.getItem('token')}`
//     },
//     body: JSON.stringify(blogData),
//   });
//   return response.json();
// };

// export const updateUser = async (userId, userData) => {
//   const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${localStorage.getItem('token')}`
//     },
//     body: JSON.stringify(userData),
//   });
//   return response.json();
// };

// export const deleteUser = async (userId) => {
//   const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//     method: "DELETE",
//     headers: {
//       "Authorization": `Bearer ${localStorage.getItem('token')}`
//     }
//   });
//   return response.json();
// };









// // frontend/src/api/api.js
// const API_BASE_URL = "https://backend-api-vercel-dep.vercel.app/"; // Replace with your actual backend URL

// export const fetchBlogs = async () => {
//   const response = await fetch(`${API_BASE_URL}/blogs`);
//   return response.json();
// };

// export const login = async (credentials) => {
//   const response = await fetch(`${API_BASE_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   });
//   return response.json();
// };

// export const createBlog = async (blogData) => {
//   const response = await fetch(`${API_BASE_URL}/blogs`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${localStorage.getItem('token')}`
//     },
//     body: JSON.stringify(blogData),
//   });
//   return response.json();
// };

// export const updateUser = async (userId, userData) => {
//   const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${localStorage.getItem('token')}`
//     },
//     body: JSON.stringify(userData),
//   });
//   return response.json();
// };

// export const deleteUser = async (userId) => {
//   const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//     method: "DELETE",
//     headers: {
//       "Authorization": `Bearer ${localStorage.getItem('token')}`
//     }
//   });
//   return response.json();
// };









// const API_BASE_URL = "https://backend-api-vercel-dep.vercel.app"; // Remove trailing slash

// export const fetchBlogs = async () => {
//   const response = await fetch(`${API_BASE_URL}/blogs`);
//   return response.json();
// };

// export const login = async (credentials) => {
//   const response = await fetch(`${API_BASE_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   });
//   return response.json();
// };

// export const createBlog = async (blogData) => {
//   const response = await fetch(`${API_BASE_URL}/blogs`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${localStorage.getItem('token')}`
//     },
//     body: JSON.stringify(blogData),
//   });
//   return response.json();
// };

// export const updateUser = async (userId, userData) => {
//   const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${localStorage.getItem('token')}`
//     },
//     body: JSON.stringify(userData),
//   });
//   return response.json();
// };

// export const deleteUser = async (userId) => {
//   const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//     method: "DELETE",
//     headers: {
//       "Authorization": `Bearer ${localStorage.getItem('token')}`
//     }
//   });
//   return response.json();
// };








// const API_BASE_URL = "https://backend-api-vercel-dep.vercel.app"; 

// export const fetchBlogs = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/blogs`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('fetchBlogs data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching blogs:', error);
//     throw error;
//   }
// };

// export const login = async (credentials) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(credentials),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('login data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// };

// export const createBlog = async (blogData) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/blogs`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify(blogData),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('createBlog data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error creating blog:', error);
//     throw error;
//   }
// };

// export const updateUser = async (userId, userData) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify(userData),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('updateUser data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error updating user:', error);
//     throw error;
//   }
// };

// export const deleteUser = async (userId) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//       method: "DELETE",
//       headers: {
//         "Authorization": `Bearer ${localStorage.getItem('token')}`
//       }
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('deleteUser data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     throw error;
//   }
// };













// const API_BASE_URL = "https://backend-api-vercel-dep.vercel.app"; // Replace with your actual backend URL

// export const fetchBlogs = async () => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/blogs`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('fetchBlogs data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching blogs:', error);
//     throw error;
//   }
// };

// export const login = async (credentials) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(credentials),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('login data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// };

// export const createBlog = async (blogData) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/blogs`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify(blogData),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('createBlog data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error creating blog:', error);
//     throw error;
//   }
// };

// export const updateUser = async (userId, userData) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify(userData),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('updateUser data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error updating user:', error);
//     throw error;
//   }
// };

// export const deleteUser = async (userId) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
//       method: "DELETE",
//       headers: {
//         "Authorization": `Bearer ${localStorage.getItem('token')}`
//       }
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('deleteUser data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     throw error;
//   }
// };















//  *****************************           process.env.REACT_APP_API_BASE_URL  ***************

// api.js

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000"; // Default to local development URL

export const fetchBlogs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('fetchBlogs data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('login data:', data);
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const createBlog = async (blogData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(blogData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('createBlog data:', data);
    return data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('updateUser data:', data);
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('deleteUser data:', data);
    return data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
