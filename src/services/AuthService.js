import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

export const login = (username, password) => {
    return axios.post(`${API_URL}/login`, { username, password });
};

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "login", {
      email,
      password,
    });
  }

  register(name, email, password) {
    return axios.post(API_URL + "register", {
      name,
      email,
      password,
    });
  }
}

export default new AuthService();
