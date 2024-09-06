<script>
import axios from 'axios'

export default {
  data() {
    return {
      dolarValue: ''
    }
  },
  async created() {
    try {
      const response = await axios.get('/api/api/dolar/2024/02/28')
      if (response.data && response.data.serie && response.data.serie.length > 0) {
        this.dolarValue = response.data.serie[0].valor
        console.log('Valor del dólar cargado:', this.dolarValue)
      } else {
        console.error('No se encontraron datos para la fecha solicitada.')
      }
    } catch (error) {
      console.error('Error al cargar el valor del dólar:', error)
    }
  }
}
</script>

<template>
  <div>
    <h1>Valor del dólar el 28/02/2024</h1>
    <h2 v-if="dolarValue">{{ dolarValue }}</h2>
    <p v-else>No se encontró el valor del dólar para esta fecha.</p>
  </div>
</template>

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
  color: red;
}
</style>
