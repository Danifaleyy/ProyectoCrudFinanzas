<!--Registrar nuevo usuario-->
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
            <h3>No User</h3>
            <span>NoUser@gmail.com</span>
          </div>
        </div>
  
        <!--Seccion para: Ver informacion-->
        <div class="sidebar__content">
          <div>
            <h3 class="sidebar__title">OPTION</h3>
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
        </div>
  
        <div class="sidebar__actions">
          <button class="sidebar__link" @click="toggleTheme">
            <i :class="['sidebar__theme', themeIcon]">
              <span>Theme</span>
            </i>
          </button>
        </div>
      </div>
    </nav>


    <div class="contededor_padre">
        <div class="card">
            <div class="contenedor_formulario">
                <form @submit.prevent="registrarUsuario" class="formulario">
                    <h4>Sign Up</h4>
                    <div class="grupo">
                        <label>Email:</label>
                        <input class="campo_input"
                            type="email" 
                            v-model="correo"
                            required
                        >
                    </div>
                    <div class="grupo">
                        <label>Password:</label>
                        <input class="campo_input"
                            type="password" 
                            v-model="clave"
                            required
                        >
                    </div>
                    <div class="error" v-if="error">
                        {{ error }}
                    </div>
                    <button class="boton_submit" type="submit">
                        Sign Un
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
    import { useRouter } from 'vue-router';
    import '../../../firebase/config.js';
    const correo = ref('');
    const clave = ref('');
    const error = ref(null);
    const router = useRouter();

    const registrarUsuario = async () => {
    const error = ref<string | null>(null);
    
    try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, correo.value, clave.value);
        router.push({ name: 'my_wallet' });
    } catch (err) {
        switch (err) {
            case 'auth/email-alredy-in-use':
                    error.value = "Este correo ya esta registrado";
                    break;
            case 'auth/weak-password':
                    error.value = "La contraseña debe de tener al menos 6 caracteres";
                    break;
            default:
                    error.value = "Ocurrio un error durante el registro";
                    break;
        }
    }
}

//Navbar y slidebar
import {onMounted } from 'vue'
  
  // Estado para mostrar/ocultar el sidebar
  const isSidebarVisible = ref(false)
  
  // Estados para el tema (light/dark)
  const darkThemeClass = 'dark-theme'
  const themeIcon = ref('ri-moon-clear-fill')
  
  // Manejo del estado activo para enlaces
  const activeLink = ref(0)
  
  // Datos de navegación
  const manageItems = [
    { icon: 'ri-home-2-fill', label: 'Home', route: '/home' },
    { icon: 'ri-user-shared-2-fill', label: 'Sign In', route: '/signin' },
    { icon: 'ri-user-add-fill', label: 'Sing Up', route: '/signup' },
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
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
    .grupo{
        display: flex;
        flex-direction: column;
    }
    .contededor_padre{
        margin-top: 80px;
    }
    @media screen and (max-width: 450px) {
        h4{
            text-align: center;
            color: #3f51b5;
            font-weight: bold;
            font-size: 2rem;
        }
        .contedenor_padre{
            margin: 0 auto;
            width: 100%;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .card{
            width: 100%;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .contenedor_formulario{
            margin: 0 auto;
            width: 100%;
        }
        .formulario{
            margin: 0 auto;
            margin-top: 30px;
            width: 90%;
            font-size: 1rem;
            color: black;
            font-weight: bold;
        }
        /* From Uiverse.io by Praashoo7 */ 
        .formulario{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        padding: 2.5em;
        border-radius: 25px;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
        }
        .formulario:hover {
        transform: translateX(-0.5em) translateY(-0.5em);
        border: 1px solid #171717;
        box-shadow: 10px 10px 0px #666666;
        }
        .campo_input{
        border-radius: 5px;
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        outline: none;
        padding: 0.7em;
        transition: .4s ease-in-out;
        }
        .campo_input:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        }
        .campo_input:focus {
        background: #ffffff;
        box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
        }
        .boton_submit{
            background-color: #3f51b5;
        }
        .formulario .boton_submit{
        margin-top: 2em;
        align-self: center;
        padding: 0.7em;
        padding-left: 1em;
        padding-right: 1em;
        border-radius: 10px;
        border: none;
        color: white;
        font-weight: bold;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
        }
        .formulario .boton_submit:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        transform: translateX(-0.5em) translateY(-0.5em);
        }
        .formulario .boton_submit:active {
        transition: .2s;
        transform: translateX(0em) translateY(0em);
        box-shadow: none;
        }
        .mensaje_alerta{
            text-align: center;
            font-weight: bold;
        }
    }


    @media screen and (max-width: 1149px) {
        h4{
            text-align: center;
            color: #3f51b5;
            font-weight: bold;
            font-size: 2rem;
        }
        .contedenor_padre{
            width: 100%;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .card{
            margin: 0 auto;
            max-width: 700px;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .contenedor_formulario{
            margin: 0 auto;
            width: 100%;
        }
        .formulario{
            margin: 0 auto;
            margin-top: 30px;
            width: 90%;
            font-size: 1rem;
            color: black;
            font-weight: bold;
        }
        /* From Uiverse.io by Praashoo7 */ 
        .formulario{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        padding: 2.5em;
        border-radius: 25px;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
        }
        .formulario:hover {
        transform: translateX(-0.5em) translateY(-0.5em);
        border: 1px solid #171717;
        box-shadow: 10px 10px 0px #666666;
        }
        .campo_input{
        border-radius: 5px;
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        outline: none;
        padding: 0.7em;
        transition: .4s ease-in-out;
        }
        .campo_input:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        }
        .campo_input:focus {
        background: #ffffff;
        box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
        }
        .boton_submit{
            background-color: #3f51b5;
        }
        .formulario .boton_submit{
        margin-top: 2em;
        align-self: center;
        padding: 0.7em;
        padding-left: 1em;
        padding-right: 1em;
        border-radius: 10px;
        border: none;
        color: white;
        font-weight: bold;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
        }
        .formulario .boton_submit:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        transform: translateX(-0.5em) translateY(-0.5em);
        }
        .formulario .boton_submit:active {
        transition: .2s;
        transform: translateX(0em) translateY(0em);
        box-shadow: none;
        }
        .mensaje_alerta{
            text-align: center;
            font-weight: bold;
        }
    }
    @media screen and (min-width: 1150px) {
        h4{
            text-align: center;
            color: #3f51b5;
            font-weight: bold;
            font-size: 2rem;
        }
        .contedenor_padre{
            width: 100%;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .card{
            margin: 0 auto;
            max-width: 700px;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .contenedor_formulario{
            margin: 0 auto;
            width: 100%;
        }
        .formulario{
            margin: 0 auto;
            margin-top: 30px;
            width: 90%;
            font-size: 1rem;
            color: black;
            font-weight: bold;
        }
        /* From Uiverse.io by Praashoo7 */ 
        .formulario{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        padding: 2.5em;
        border-radius: 25px;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
        }
        .formulario:hover {
        transform: translateX(-0.5em) translateY(-0.5em);
        border: 1px solid #171717;
        box-shadow: 10px 10px 0px #666666;
        }
        .campo_input{
        border-radius: 5px;
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        outline: none;
        padding: 0.7em;
        transition: .4s ease-in-out;
        }
        .campo_input:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        }
        .campo_input:focus {
        background: #ffffff;
        box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
        }
        .boton_submit{
            background-color: #3f51b5;
        }
        .formulario .boton_submit{
        margin-top: 2em;
        align-self: center;
        padding: 0.7em;
        padding-left: 1em;
        padding-right: 1em;
        border-radius: 10px;
        border: none;
        color: white;
        font-weight: bold;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
        }
        .formulario .boton_submit:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        transform: translateX(-0.5em) translateY(-0.5em);
        }
        .formulario .boton_submit:active {
        transition: .2s;
        transform: translateX(0em) translateY(0em);
        box-shadow: none;
        }
        .mensaje_alerta{
            text-align: center;
            font-weight: bold;
        }
    }
</style>

