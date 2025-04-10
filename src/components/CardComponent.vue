<script setup lang="ts">
import Pelicula from "../interfaces/Pelicula.ts";
import movies from '../resource/movies.ts';
import { ref } from 'vue';

const props = defineProps<{pelicula:Pelicula}>(); 

const mostrar = ref(props.pelicula.portada == null);



</script>


<template>
    <div>
        <h2>{{ props.pelicula.id }}</h2>
        <h3>Titulo: {{ props.pelicula.titulo }}</h3>
        <h4>Año: {{ props.pelicula.anio }}</h4>
        <h4>Genero: {{ props.pelicula.genero }}</h4>
        <h4>Director: {{ props.pelicula.director }}</h4>
        <h4 v-if="mostrar"> No hay información sobre la portada </h4>
        <h4 v-else>  <a :href="props.pelicula.portada" target="_blank">Ver Portada</a> </h4>
        <h4>Likes: {{ props.pelicula.likes }}</h4>  
    </div>
</template>

<style scoped>

div{
    background-color: rgb(236, 213, 142);
    margin: 100px;
    padding: 10px;
    border: solid 5px rgb(35, 28, 28);

}

h2{
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: bold;
}

h3{
    color: rgb(0, 0, 0);
    font-size: 24px;
    font-weight: bold;
    background-color: rgb(255, 255, 255);
}

h4{
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(242, 210, 114);
}

</style>