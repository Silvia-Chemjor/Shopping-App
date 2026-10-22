<template>
    <v-container align="center" class="mt-12">
        <v-row justify="center">
            <v-col cols="12" md="10" lg="9">
                <v-card max-width="1000" class="pa-6" elevation="6" rounded="xl">
                    <div class="text-center mt-2">
                        <v-img src="/purplelogo.png" height="100" width="200" class="mx-auto" contain></v-img>
                    </div>
        
                    <v-card-title class="text-h4 text-center text-primary mt-2">Login User</v-card-title>
                    <v-card-subtitle class="text-center mb-5">Login to your account</v-card-subtitle>
                    <v-divider></v-divider>

                    <form @submit.prevent="login">
                        <v-text-field 
                        label="E-mail"
                        v-model="email"
                        ></v-text-field>

                        <v-text-field 
                        label="Password"
                        v-model="password"
                        ></v-text-field>


                        <v-btn class="me-4" type="submit">submit</v-btn>

                        <v-btn @click="handleReset"> clear</v-btn>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
const email = ref('')
const password = ref('')


async function login(){
    const response = await axios.post('http://127.0.0.1:8000/api/login_user',
    {
        email: email.value,
        password:password.value,
    });
    alert(response.data.message)
}
</script>

