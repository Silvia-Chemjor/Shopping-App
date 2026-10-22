```vue
<script setup>
import { ref } from 'vue'

const firstname = ref('Silvia')
const lastname = ref('Chemjor')
const email = ref('example@email.com')
const phone = ref('0712345678')
</script>

<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="5" rounded="xl" class="pa-6">

          <div class="text-center mb-6">
            <v-avatar size="100" color="primary"class="mb-4">
              <span class="text-h3 text-secondary">
                {{ firstname.charAt(0) }}
              </span>
            </v-avatar>

            <div class="text-h5 font-weight-bold">
              {{ firstname }} {{ lastname }}
            </div>

            <div class="text-body-2 text-grey mt-1">
              Manage your account information
            </div>
          </div>

          <v-divider class="mb-6"></v-divider>

          <div class="text-h6 font-weight-bold mb-4">
            Personal Information
          </div>


          <v-text-field
            v-model="firstname"
            label="First Name"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            color="primary"
            class="mb-3"
          ></v-text-field>


          <v-text-field
            v-model="lastname"
            label="Last Name"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            color="primary"
            class="mb-3"
          ></v-text-field>


          <v-text-field
            v-model="email"
            label="Email"
            prepend-inner-icon="mdi-email"
            variant="outlined"
            color="primary"
            class="mb-3"
          ></v-text-field>


          <v-text-field
            v-model="phone"
            label="Phone Number"
            prepend-inner-icon="mdi-phone"
            variant="outlined"
            color="primary"
            class="mb-3"
          ></v-text-field>


          <!-- Buttons -->
          <v-card-actions class="justify-center mt-4">

            <v-btn
              color="primary"
              variant="outlined"
              prepend-icon="mdi-pencil"
              class="px-6"
            >
              Edit Profile
            </v-btn>

            <v-btn
              color="primary"
              variant="elevated"
              prepend-icon="mdi-content-save"
              class="px-6"
            >
              Save Changes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
