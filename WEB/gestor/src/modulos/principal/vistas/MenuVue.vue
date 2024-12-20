<template>
  <!--=============== HEADER ===============-->
  <header class="header" id="header">
    <div class="header__container">
      <RouterLink to="/home" class="header__logo">
        <i class="ri-cloud-fill"></i>
        <span>Cloud</span>
      </RouterLink>

      <button class="header__toggle" @click="toggleSidebar">
        <i class="ri-menu-line"></i>
      </button>
    </div>
  </header>

  <!--=============== SIDEBAR ===============-->
  <nav :class="['sidebar', { 'show-sidebar': isSidebarVisible }]" id="sidebar">
    <div class="sidebar__container">
      <div class="sidebar__user">
        <div class="sidebar__img">
          <img src="/perfil.png" alt="User Image">
        </div>

        <div class="sidebar__info">
          <h3>Dani Faley</h3>
          <span>Danifaley@gmail.com</span>
        </div>
      </div>

      <!--Seccion para: Ver informacion-->
      <div class="sidebar__content">
        <div>
          <h3 class="sidebar__title">MANAGE</h3>
          <div class="sidebar__list">
            <RouterLink
              v-for="(item, index) in manageItems"
              :key="index"
              :to="item.route"
              :class="['sidebar__link', { 'active-link': activeLink === index }]"
              @click="setActiveLink(index)"
            >
              <i :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </RouterLink>
          </div>
        </div>

        <!--Seccion para: Agregar datos-->
        <div>
          <h3 class="sidebar__title">SETTINGS</h3>
          <div class="sidebar__list">
            <RouterLink
              v-for="(item, index) in settingsItems"
              :key="index"
              :to="item.route"
              :class="['sidebar__link', { 'active-link': activeLink === index + manageItems.length }]"
              @click="setActiveLink(index + manageItems.length)"
            >
              <i :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="sidebar__actions">
        <button class="sidebar__link" @click="toggleTheme">
          <i :class="['sidebar__theme', themeIcon]">
            <span>Theme</span>
          </i>
        </button>

        <li class="sidebar__link" v-if="usuarioAutenticado">
          <i class="ri-logout-box-r-fill"></i>
          <button @click.prevent="cerrarSesion" class="logout">
            <span>Log Out</span>
          </button>
        </li>
      </div>
    </div>
  </nav>

  <!--=============== MAIN ===============-->
  <main :class="['main', { 'left-pd': isSidebarVisible }]" id="main"></main>

</template>

<script setup lang="ts">
//Boton de cerrar sesion
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const usuarioAutenticado = ref(false);
const auth = getAuth();
const router = useRouter();

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        usuarioAutenticado.value = !!user;
    });
});

const cerrarSesion = async () => {
    try {
        await signOut(auth);
        router.push('/home');
    } catch (error) {
        console.log('Error al cerrar sesión', error);
    }
};


// Estado para mostrar/ocultar el sidebar
const isSidebarVisible = ref(false)

// Estados para el tema (light/dark)
const darkThemeClass = 'dark-theme'
const themeIcon = ref('ri-moon-clear-fill')

// Manejo del estado activo para enlaces
const activeLink = ref(0)

// Datos de navegación
const manageItems = [
  { icon: 'ri-pie-chart-2-fill', label: 'Dashboard', route: '/dashboard' },
  { icon: 'ri-wallet-3-fill', label: 'My Wallet', route: '/my_wallet' },
  { icon: 'ri-arrow-up-down-line', label: 'Recent Transactions', route: '/recent_transactions' },
]

const settingsItems = [
  { icon: 'ri-exchange-box-fill', label: 'Transactions', route: '/transaccion' },
  { icon: 'ri-bank-card-fill', label: 'Bank Accounts', route: '/cuenta' },
  { icon: 'ri-money-dollar-circle-fill', label: 'Income', route: '/ingreso' },
  { icon: 'ri-price-tag-3-fill', label: 'Income Category', route: '/categoria_ingreso' },
  { icon: 'ri-shopping-cart-2-fill', label: 'Spent', route: '/gasto' },
  { icon: 'ri-price-tag-3-fill', label: 'Spent Category', route: '/categoria_gasto' },
  { icon: 'ri-folder-user-fill', label: 'Users', route: '/hecho_gasto' },
  { icon: 'ri-price-tag-fill', label: 'Type Of Expense', route: '/tipo_gasto' },
  { icon: 'ri-store-fill', label: 'Store', route: '/lugar_gasto' }
]

// Función para mostrar/ocultar el sidebar
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}

// Función para cambiar el enlace activo
const setActiveLink = (index: number) => {
  activeLink.value = index
}

// Función para alternar entre temas (Light/Dark)
const toggleTheme = () => {
  const body = document.body
  body.classList.toggle(darkThemeClass)
  themeIcon.value = body.classList.contains(darkThemeClass)
    ? 'ri-sun-fill'
    : 'ri-moon-clear-fill'
  localStorage.setItem(
    'selected-theme',
    body.classList.contains(darkThemeClass) ? 'dark' : 'light'
  )
}

// Establece el tema inicial desde localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('selected-theme')
  if (savedTheme === 'dark') {
    document.body.classList.add(darkThemeClass)
    themeIcon.value = 'ri-sun-fill'
  }
})
</script>

<style scoped>
/* Importar estilos externos */
@import url("https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200..1000&display=swap");

.logout{
  color: #FB607F;
}
</style>