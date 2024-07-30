// src/api.js
const API_URL = 'http://localhost:8080/api/users';
const API_URL2 = 'http://localhost:8080/api/userform';

export const createUserDetails = async (userDetails) => {
  
  try {
    const response = await fetch(`${API_URL2}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });

    if (!response.ok) {
      throw new Error('Failed to create user details');
    }

    return response.json();
  } catch (error) {
    console.error('Error during creating user details:', error);
    throw error;
  }
};

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
    throw error;
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
    throw error;
  }
};

