<template>
  <div>
    <h1>Imagen de Pikachu</h1>
    <img v-if="pikachuImage" :src="pikachuImage" alt="Pikachu" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pikachuImage: ''
    }
  },
  async created() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/25')
      this.pikachuImage = response.data.sprites.front_default
      console.log('Imagen de Pikachu cargada:', this.pikachuImage)
    } catch (error) {
      console.error('Error al cargar la imagen de Pikachu:', error)
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
  height: auto;
}
</style>
