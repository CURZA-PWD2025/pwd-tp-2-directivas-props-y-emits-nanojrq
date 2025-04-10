<script setup lang="ts">
import CardComponent from './components/CardComponent.vue';
import Pelicula from "./interfaces/Pelicula";
import { ref } from 'vue';
import movies from './resource/movies.ts';

//let peliculas:Array<Pelicula> = [movies];



// <div v-for="pelicula in movies">
</script>

<template>
  <div>
    <h1>Ranking de Peliculas</h1>
  </div>

  <div>
    <CardComponent v-for="pelicula in movies" :pelicula="pelicula" />
  </div>

</template>








<style scoped>
h1{
  color: rgb(0, 0, 0);
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin: 100px;
}
</style>