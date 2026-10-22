<template>
    <v-container align="center" class="mt-12">
        <v-row justify="center">
            <v-col cols="12" md="10" lg="9">
                <v-card max-width="1000" class="pa-6" elevation="6" rounded="xl">
                    <div class="text-center mt-2">
                        <v-img src="/purplelogo.png" height="100" width="200" class="mx-auto" contain></v-img>
                    </div>
        
                    <v-card-title class="text-h4 text-center text-primary mt-2">Create Your Account</v-card-title>
                    <v-card-subtitle class="text-center mb-5">Sign up to get started</v-card-subtitle>
                    <v-divider></v-divider>

                    <form @submit.prevent="register">
                        <v-text-field 
                        label="Name"
                        v-model="name"
                        ></v-text-field>

                        <v-text-field 
                        label="E-mail"
                        v-model="email"
                        ></v-text-field>

                        <v-text-field 
                        label="Password"
                        v-model="password"
                        ></v-text-field>

                        <v-text-field 
                        label="Password Confirmation"
                        v-model="password_confirmation"
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
import { useAuth } from '@/services/auth';

const {signup} = useAuth()
const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')

function register(){
    const data = {
        name:name.value,
        email:email.value,
        password:password.value,
        password_confirmation: password_confirmation.value
    }
    signup(data)
}
</script>

