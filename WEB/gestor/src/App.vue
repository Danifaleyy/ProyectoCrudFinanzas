<script setup lang="ts">
import MenuVue from './modulos/principal/vistas/MenuVue.vue';
import { RouterView, useRoute } from 'vue-router';

// Obtén información sobre la ruta actual
const route = useRoute();
</script>

<template>
  <div>
    <!-- Mostrar el Navbar solo si no estamos en la ruta /home -->
    <header v-if="!route.meta.hideLayout">
      <MenuVue />
    </header>

    <!-- Las vistas estarán debajo del Navbar -->
    <RouterView />
  </div>
</template>
