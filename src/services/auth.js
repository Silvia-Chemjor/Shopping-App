import { ref } from 'vue'

export function useAuth() {
    const isAuthenticated = ref(false)
    const isAdmin = ref(false)

    // Login
    async function login(credentials) {

        try {

            if (!credentials.email || !credentials.password) {
                throw new Error('Email and password are required')
            }

            
            
            const userData = localStorage.getItem("user")

            if (userData) {
                isAuthenticated.value = true
                if (userData.role == 1) isAdmin.value = true

                localStorage.setItem("isAuthenticated", isAuthenticated.value);
                localStorage.setItem("isAdmin", isAdmin.value);

                return response
            } else {
                throw new Error('No user found')
            }

        } catch (err) {
            console.log("Login failed")
           
        } 
    }

    // Register
    async function signup(data) {
        try{
            async function register(){
                const response = await axios.post('http://127.0.0.1:8000/api/register_user',
                {
                    name: credentials.name.value,
                    email: credentials.email.value,
                    password:credentials.password.value,
                    password_confirmation:credentials.password_confirmation.value
                });
                alert(response.data.message)
            }
        }catch{
            console.log("Error signing up")
        }
    }

    // Logout
    function logout() {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("isAdmin");
    }
    return {
        login,
        signup,
        logout,
    }
 }