// src/api.js
const API_URL = 'http://localhost:8080/api/users';

export const signup = async (user) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to sign up');
    }

    return response.json();
  } catch (error) {
    console.error('Error during signup:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

export const login = async (user) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }
    

    return response.json();
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

