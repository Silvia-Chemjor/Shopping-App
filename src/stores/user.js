import { defineStore } from 'pinia'
import { ref, shallowRef, toRef } from 'vue'
import api from '../services/api'

export const useUserStore = defineStore('user', () => {
  function createNewRecord() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  }

  const users = ref([])
  const formModel = ref(createNewRecord())
  const dialog = shallowRef(false)
  const isEditing = toRef(() => !!formModel.value.id)

  function add() {
    formModel.value = createNewRecord()
    dialog.value = true
  }

  function edit(id) {
    const found = users.value.find((user) => user.id === id)

    formModel.value = {
      id: found.id,
      name: found.name,
      email: found.email,
      password: found.password,
      password_confirmation: found.password_confirmation,
    }

    dialog.value = true
  }

  async function remove(id) {
    //Delete Function
    try {
      await api.delete(`/delete-user/${id}`)
      location.reload()
    } catch (error) {
      console.error('Failed to Delete User.', error?.response?.message)
    }
  }

  async function save() {
    if (isEditing.value) {
      //Update Function
      try {
        await api.post(`/update-user/${formModel.value.id}`, formModel.value)
        location.reload()
      } catch (error) {
        console.error('Failed to Save User.', error?.response?.message)
      }
    } else {
      //Save Function
      try {
        await api.post('/create-user', formModel.value)
        location.reload()
      } catch (error) {
        console.error('Failed to Save User.', error?.response?.message)
      }
    }

    dialog.value = false
  }

  function reset() {
    dialog.value = false
    formModel.value = createNewRecord()
    users.value = []
  }

  async function getUsers() {
    try {
      const response = await api.get('/read-users')
      users.value = response.data.users 
    } catch (error) {
      console.error('Failed to fetch Users', error?.response?.message)
    }
  }

  return {
    users,
    formModel,
    isEditing,
    dialog,
    add,
    edit,
    remove,
    save,
    reset,
    getUsers,
  }
})
