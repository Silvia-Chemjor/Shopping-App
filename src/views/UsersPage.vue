<template>
  <v-container>
    <v-sheet border rounded>
      <v-data-table
        :headers="headers"        
        :items="userStore.users"
      >
        <template v-slot:top>
          <v-toolbar color="teal" flat>
            <v-toolbar-title>
              <v-icon
                color="medium-emphasis"
                icon="mdi-user-multiple"
                size="x-small"
                start
              ></v-icon>

              Popular users
            </v-toolbar-title>

            <v-btn
              class="me-2"
              prepend-icon="mdi-plus"
              rounded="lg"
              text="Add a User"
              border
              @click="userStore.add"
            ></v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item.title="{ value }">
          <v-chip :text="value" border="thin opacity-25" prepend-icon="mdi-user" label>
            <template v-slot:prepend>
              <v-icon color="medium-emphasis"></v-icon>
            </template>
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <div class="d-flex ga-2 justify-end">
            <v-icon
              color="medium-emphasis"
              icon="mdi-pencil"
              size="small"
              @click="userStore.edit(item.id)"
            ></v-icon>

            <v-icon
              color="medium-emphasis"
              icon="mdi-delete"
              size="small"
              @click="userStore.remove(item.id)"
            ></v-icon>
          </div>
        </template>

        <template v-slot:no-data>
          <v-btn
            prepend-icon="mdi-backup-restore"
            rounded="lg"
            text="Reset data"
            variant="text"
            border
            @click="userStore.reset"
          ></v-btn>
        </template>
      </v-data-table>
    </v-sheet>

    <v-dialog v-model="userStore.dialog" max-width="500">
      <v-card
        :subtitle="`${isEditing ? 'Update' : 'Create'} your favorite user`"
        :title="`${isEditing ? 'Edit' : 'Add'} a User`"
      >
        <template v-slot:text>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="userStore.formModel.name" label="Name"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="userStore.formModel.email" label="Email"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="userStore.formModel.password" label="Password"></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="userStore.formModel.password_confirmation" label="Password Confirmation"></v-text-field>
            </v-col>
          </v-row>
        </template>

        <v-divider></v-divider>

        <v-card-actions class="bg-surface-light">
          <v-btn text="Cancel" variant="plain" @click="userStore.dialog = false"></v-btn>

          <v-spacer></v-spacer>

          <v-btn text="Save" @click="userStore.save"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()

const headers = [
  { title: 'ID', key: 'id', align: 'start' },
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Password', key: 'password' },
  { title: 'Password Confirmation', key: 'password_confirmation' },
  { title: 'Actions', key: 'actions', align: 'end', sortable: false },
]

onMounted(() => {
  userStore.getUsers()
})
</script>
