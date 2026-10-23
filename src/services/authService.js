// src/services/auth.service.js
import { ref, computed } from 'vue'
import TokenService from './tokenService'
import api from './api'

// Create reactive state
const user = ref(null)
const loading = ref(false)
const error = ref(null)

// Export composable function to use the auth service
export function useAuth() {
  // Initialize auth on first use
  if (!user.value && TokenService.isAuthenticated()) {
  }

  // Check if user is authenticated
  const isAuthenticated = computed(() => !!user.value)
  

  // Get current user
  const currentUser = computed(() => user.value)


  // Register method
  async function register(userData) {
    loading.value = true
    error.value = null
    
    try {
      const response = await api.post('register', userData)
      return response
    } catch (err) {
      error.value = err.response?.data?.message || 'Registration failed'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Logout method
  function logout() {
    user.value = null
    // abilities.value = {}
    TokenService.removeToken()
  }

  


  return {
    user,
    loading,
    error,
    isAuthenticated,
    currentUser,
    register,
    logout,
  }
}

// Create a global instance for non-composition API usage
const globalAuthService = {
  isAuthenticated: () => !!user.value,
  getCurrentUser: () => user.value,
  getLoading: () => loading.value,
  getError: () => error.value,
  register: async (userData) => {
    const { register } = useAuth()
    return register(userData)
  },
  logout: () => {
    const { logout } = useAuth()
    logout()
  },
}

export default globalAuthService