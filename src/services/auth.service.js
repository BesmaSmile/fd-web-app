import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URI;
const instance = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

function register(user) {
  return instance.post('/user/register', user)
    .catch((error) => {
      console.log(error);
    });
}

function login(credentials) {
  return instance.post('/user/login', credentials)
    .catch((error) => {
      switch (error.response?.data?.error) {
        case 'incorrect_credentials':
          throw new Error('Email ou mot de passe incorrect !');
        default:
          throw new Error('Echec de connexion !');
      }
    });
}

export const authService = {
  register,
  login,
};
