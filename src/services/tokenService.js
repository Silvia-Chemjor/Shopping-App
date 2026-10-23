import router from '../router/index';
import api from './api';

class TokenService {
  setToken(token) {
    localStorage.setItem("authToken", token);
  }
  
  setUser(user) {
    // Store as JSON string since localStorage only supports strings
    localStorage.setItem("user", JSON.stringify(user));
  }
  
  
  getToken() {
    return localStorage.getItem("authToken");
  }
  
  getUser() {
    const userStr = localStorage.getItem("user");
    try {
      return userStr ? JSON.parse(userStr) : null;
    } catch (e) {
      console.error("Error parsing user data:", e);
      return null;
    }
  }
  
  
  removeToken() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  }
  
  isAuthenticated() {
    return !!this.getToken();
  }  
  
}

const myTokenInstance = new TokenService();
export default myTokenInstance;