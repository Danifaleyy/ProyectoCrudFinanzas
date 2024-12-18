<script setup lang="ts">
import MenuVue from './modulos/principal/vistas/MenuVue.vue';
import { RouterView } from 'vue-router';


</script>

<template>
  <header>
    <!--Nombre del archivo del nav bar en forma de etiqueta-->
    <MenuVue/>
  </header>
  <!--Las vistas estarn debajo del nav bar-->
  <RouterView/>
</template>