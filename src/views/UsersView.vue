<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <ul>
      <li v-for="user in users" :key="user.login.uuid">
        {{ user.name.first }} {{ user.name.last }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },
  async created() {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=200')
      this.users = response.data.results
      console.log('Usuarios cargados:', this.users)
    } catch (error) {
      console.error('Error al cargar usuarios:', error)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
