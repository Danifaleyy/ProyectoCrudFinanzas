<template>
    <!--Nav Bar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary-gradient">
      <a class="navbar-brand" href="#">LogoApp</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!--RouterLink: Sirve para navegar entre las rutas de las paginas-->
            <li class="nav-item">
              <RouterLink class="nav-link item" to="/cuenta">Cuenta</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link item" to="/categoria_ingreso">Categoria Ingreso</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link item" to="/categoria_gasto">Categoria Gasto</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link item" to="/tipo_gasto">Tipo Gasto</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link item" to="/lugar_gasto">Lugar Gasto</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link item" to="/hecho_gasto">Hecho Gasto</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link item" to="/ingreso">Ingreso</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link item" to="/gasto">Gasto</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link item" to="/transaccion">Transaccion</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  /* Fondo degradado para la navbar */
  .bg-primary-gradient {
    background: linear-gradient(90deg, #0044cc, #0066ff);
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  /* Color y espaciado del logo */
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    transition: color 0.3s;
  }
  
  .navbar-brand:hover {
    color: #ffcc00;
    text-decoration: none;
  }
  
  /* Links del menú */
  .nav-link {
    font-size: 1rem;
    color: #e3f2fd;
    margin: 0 10px;
    transition: color 0.3s, transform 0.2s;
  }
  
  .nav-link:hover {
    color: #ffcc00;
    transform: scale(1.1);
    text-decoration: none;
  }
  
  /* Estilo para los elementos activos */
  .nav-link.active {
    color: #ffcc00;
    font-weight: bold;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  
  /* Botón de hamburguesa */
  .navbar-toggler {
    border: none;
    background-color: transparent;
    outline: none;
  }
  
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.7%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
  
  /* Estilo de los ítems en la lista */
  .nav-item {
    margin: 5px 0;
  }
  
  /* Transiciones suaves */
  .navbar {
    transition: background-color 0.3s ease-in-out;
  }
  
  /* Responsive: Ajustes para dispositivos pequeños */
  @media (max-width: 768px) {
    .navbar-brand {
      font-size: 1.2rem;
    }
  
    .nav-link {
      font-size: 0.9rem;
    }
  }
  </style>
  