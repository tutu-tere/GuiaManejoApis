<template>
  <div>
    <h1>Clima en Quilpué</h1>
    <h2 v-if="clima">{{ clima }}</h2>
    <p v-else>Cargando...</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      clima: ''
    }
  },
  async created() {
    try {
      const response = await axios.get('https://api.gael.cloud/general/public/clima/quilpue')
      this.clima = response.data[0].descripcion
      console.log('Clima en Quilpué cargado:', this.clima)
    } catch (error) {
      console.error('Error al cargar el clima:', error)
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 1.5em;
  color: #007bff;
}

p {
  font-size: 1.2em;
  color: gray;
}
</style>
