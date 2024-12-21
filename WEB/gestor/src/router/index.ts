import SignInVue from '@/modulos/autentica/vistas/SigninVue.vue'
import SignUpVue from '@/modulos/autentica/vistas/SignupVue.vue'
import Categoria_gastoAgregarVue from '@/modulos/categoria_gasto/vistas/Categoria_gastoAgregarVue.vue'
import Categoria_gastoBorrarVue from '@/modulos/categoria_gasto/vistas/Categoria_gastoBorrarVue.vue'
import Categoria_gastoEditarVue from '@/modulos/categoria_gasto/vistas/Categoria_gastoEditarVue.vue'
import Categoria_gastoVue from '@/modulos/categoria_gasto/vistas/Categoria_gastoVue.vue'
import Categoria_ingresoAgregarVue from '@/modulos/categoria_ingreso/vistas/Categoria_ingresoAgregarVue.vue'
import Categoria_ingresoBorrarVue from '@/modulos/categoria_ingreso/vistas/Categoria_ingresoBorrarVue.vue'
import Categoria_ingresoEditarVue from '@/modulos/categoria_ingreso/vistas/Categoria_ingresoEditarVue.vue'
import Categoria_ingresoVue from '@/modulos/categoria_ingreso/vistas/Categoria_ingresoVue.vue'
import CuentaAgregarVue from '@/modulos/cuenta/vistas/CuentaAgregarVue.vue'
import CuentaBorrarVue from '@/modulos/cuenta/vistas/CuentaBorrarVue.vue'
import CuentaEditarVue from '@/modulos/cuenta/vistas/CuentaEditarVue.vue'
import CuentaVue from '@/modulos/cuenta/vistas/CuentaVue.vue'
import GastoAgregarVue from '@/modulos/gasto/vistas/GastoAgregarVue.vue'
import GastoBorrarVue from '@/modulos/gasto/vistas/GastoBorrarVue.vue'
import GastoEditarVue from '@/modulos/gasto/vistas/GastoEditarVue.vue'
import GastoVue from '@/modulos/gasto/vistas/GastoVue.vue'
import Hecho_gastoAgregarVue from '@/modulos/hecho_gasto/vistas/Hecho_gastoAgregarVue.vue'
import Hecho_gastoBorrarVue from '@/modulos/hecho_gasto/vistas/Hecho_gastoBorrarVue.vue'
import Hecho_gastoEditarVue from '@/modulos/hecho_gasto/vistas/Hecho_gastoEditarVue.vue'
import Hecho_gastoVue from '@/modulos/hecho_gasto/vistas/Hecho_gastoVue.vue'
import IngresoAgregarVue from '@/modulos/ingreso/vistas/IngresoAgregarVue.vue'
import IngresoBorrarVue from '@/modulos/ingreso/vistas/IngresoBorrarVue.vue'
import IngresoEditarVue from '@/modulos/ingreso/vistas/IngresoEditarVue.vue'
import IngresoVue from '@/modulos/ingreso/vistas/IngresoVue.vue'
import Lugar_gastoAgregarVue from '@/modulos/lugar_gasto/vistas/Lugar_gastoAgregarVue.vue'
import Lugar_gastoBorrarVue from '@/modulos/lugar_gasto/vistas/Lugar_gastoBorrarVue.vue'
import Lugar_gastoEditarVue from '@/modulos/lugar_gasto/vistas/Lugar_gastoEditarVue.vue'
import Lugar_gastoVue from '@/modulos/lugar_gasto/vistas/Lugar_gastoVue.vue'
import HomeVue from '@/modulos/principal/vistas/HomeVue.vue'
import Tipo_gastoAgregarVue from '@/modulos/tipo_gasto/vistas/Tipo_gastoAgregarVue.vue'
import Tipo_gastoBorrarVue from '@/modulos/tipo_gasto/vistas/Tipo_gastoBorrarVue.vue'
import Tipo_gastoEditarVue from '@/modulos/tipo_gasto/vistas/Tipo_gastoEditarVue.vue'
import Tipo_gastoVue from '@/modulos/tipo_gasto/vistas/Tipo_gastoVue.vue'
import TransaccionAgregarVue from '@/modulos/transaccion/vistas/TransaccionAgregarVue.vue'
import TransaccionBorrarVue from '@/modulos/transaccion/vistas/TransaccionBorrarVue.vue'
import TransaccionEditarVue from '@/modulos/transaccion/vistas/TransaccionEditarVue.vue'
import TransaccionVue from '@/modulos/transaccion/vistas/TransaccionVue.vue'
import MyWalletVue from '@/modulos/principal/vistas/MyWalletVue.vue'
import { getAuth } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import DashboardVue from '@/modulos/principal/vistas/DashboardVue.vue'
import PortafolioVue from '@/modulos/portafolio/vistas/PortafolioVue.vue'
import PortafolioAgregarVue from '@/modulos/portafolio/vistas/PortafolioAgregarVue.vue'
import PortafolioEditarVue from '@/modulos/portafolio/vistas/PortafolioEditarVue.vue'
import PortafolioBorrarVue from '@/modulos/portafolio/vistas/PortafolioBorrarVue.vue'
import InstrumentoVue from '@/modulos/instrumento/vistas/InstrumentoVue.vue'
import InstrumentoEditarVue from '@/modulos/instrumento/vistas/InstrumentoEditarVue.vue'
import InstrumentoAgregarVue from '@/modulos/instrumento/vistas/InstrumentoAgregarVue.vue'
import InstrumentoBorrarVue from '@/modulos/instrumento/vistas/InstrumentoBorrarVue.vue'
import Tipo_inversionBorrarVue from '@/modulos/tipo_inversion/vistas/Tipo_inversionBorrarVue.vue'
import Tipo_inversionEditarVue from '@/modulos/tipo_inversion/vistas/Tipo_inversionEditarVue.vue'
import Tipo_inversionAgregarVue from '@/modulos/tipo_inversion/vistas/Tipo_inversionAgregarVue.vue'
import Tipo_inversionVue from '@/modulos/tipo_inversion/vistas/Tipo_inversionVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     // Redirección de la raíz (/) a /home
     {
      path: '/',
      redirect: '/home',
    },
    // Ruta del home
    {
      path: '/home',
      name: 'home',
      component: HomeVue,
      meta: { hideLayout: true },
    },
    // Ruta inicio de sesión
    {
      path: '/signin',
      name: 'signin',
      component: SignInVue,
      meta: { hideLayout: true },
    },
    // Ruta registrar un nuevo usuario
    {
      path: '/signup',
      name: 'signup',
      component: SignUpVue,
      meta: { hideLayout: true },
    },
    {
      path: '/my_wallet',
      name: 'my_wallet',
      component: MyWalletVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },


    //Ruta de cuenta: Inicio
    {
      path: '/cuenta',
      name: 'cuenta',
      component: CuentaVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de cuenta: Agregar
    {
      path: '/cuenta/agregar',
      name: 'cuentaagregar',
      component: CuentaAgregarVue,
    },
    //Ruta de cuenta: Editar
    {
      path: '/cuenta/:id_cuenta/editar',
      name: 'cuentaeditar',
      component: CuentaEditarVue,
    },
    //Ruta de cuenta: Borrar
    {
      path: '/cuenta/:id_cuenta/borrar',
      name: 'cuentaborrar',
      component: CuentaBorrarVue,
    },


    //Ruta de categoria_ingreso: Inicio
    {
      path: '/categoria_ingreso',
      name: 'categoria_ingreso',
      component: Categoria_ingresoVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de categoria_ingreso: Agregar
    {
      path: '/categoria_ingreso/agregar',
      name: 'categoria_ingresoagregar',
      component: Categoria_ingresoAgregarVue,
    },
    //Ruta de categoria_ingreso: Editar
    {
      path: '/categoria_ingreso/:id_categoria_ingreso/editar',
      name: 'categoria_ingresoeditar',
      component: Categoria_ingresoEditarVue,
    },
    //Ruta de categoria_ingreso: Borrar
    {
      path: '/categoria_ingreso/:id_categoria_ingreso/borrar',
      name: 'categoria_ingresoborrar',
      component: Categoria_ingresoBorrarVue,
    },


    //Ruta de categoria_gasto: Inicio
    {
      path: '/categoria_gasto',
      name: 'categoria_gasto',
      component: Categoria_gastoVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de categoria_gasto: Agregar
    {
      path: '/categoria_gasto/agregar',
      name: 'categoria_gastoagregar',
      component: Categoria_gastoAgregarVue,
    },
    //Ruta de categoria_gasto: Editar
    {
      path: '/categoria_gasto/:id_categoria_gasto/editar',
      name: 'categoria_gastooeditar',
      component: Categoria_gastoEditarVue,
    },
    //Ruta de categoria_ingreso: Borrar
    {
      path: '/categoria_gasto/:id_categoria_gasto/borrar',
      name: 'categoria_gastoborrar',
      component: Categoria_gastoBorrarVue,
    },


    //Ruta de tipo_gasto: Inicio
    {
      path: '/tipo_gasto',
      name: 'tipo_gasto',
      component: Tipo_gastoVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de tipo_gasto: Agregar
    {
      path: '/tipo_gasto/agregar',
      name: 'tipo_gastoagregar',
      component: Tipo_gastoAgregarVue,
    },
    //Ruta de tipo_gasto: Editar
    {
      path: '/tipo_gasto/:id_tipo_gasto/editar',
      name: 'tipo_gastooeditar',
      component: Tipo_gastoEditarVue,
    },
    //Ruta de tipo_ingreso: Borrar
    {
      path: '/tipo_gasto/:id_tipo_gasto/borrar',
      name: 'tipo_gastoborrar',
      component: Tipo_gastoBorrarVue,
    },
    

    //Ruta de lugar_gasto: Inicio
    {
      path: '/lugar_gasto',
      name: 'lugar_gasto',
      component: Lugar_gastoVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de lugar_gasto: Agregar
    {
      path: '/lugar_gasto/agregar',
      name: 'lugar_gastoagregar',
      component: Lugar_gastoAgregarVue,
    },
    //Ruta de lugar_gasto: Editar
    {
      path: '/lugar_gasto/:id_lugar_gasto/editar',
      name: 'lugar_gastooeditar',
      component: Lugar_gastoEditarVue,
    },
    //Ruta de lugar_gasto: Borrar
    {
      path: '/lugar_gasto/:id_lugar_gasto/borrar',
      name: 'lugar_gastoborrar',
      component: Lugar_gastoBorrarVue,
    },


    //Ruta de hecho_gasto: Inicio
    {
      path: '/hecho_gasto',
      name: 'hecho_gasto',
      component: Hecho_gastoVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de hecho_gasto: Agregar
    {
      path: '/hecho_gasto/agregar',
      name: 'hecho_gastoagregar',
      component: Hecho_gastoAgregarVue,
    },
    //Ruta de hecho_gasto: Editar
    {
      path: '/hecho_gasto/:id_hecho_gasto/editar',
      name: 'hecho_gastooeditar',
      component: Hecho_gastoEditarVue,
    },
    //Ruta de hecho_gasto: Borrar
    {
      path: '/hecho_gasto/:id_hecho_gasto/borrar',
      name: 'hecho_gastoborrar',
      component: Hecho_gastoBorrarVue,
    },

    
    //Ruta de Ingreso: Inicio
    {
      path: '/ingreso',
      name: 'ingreso',
      component: IngresoVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de Ingreso: Agregar
    {
      path: '/ingreso/agregar',
      name: 'ingresoagregar',
      component: IngresoAgregarVue,
    },
    //Ruta de Ingreso: Editar
    {
      path: '/ingreso/:id_ingreso/editar',
      name: 'ingresoeditar',
      component: IngresoEditarVue,
    },
    //Ruta de Ingreso: Borrar
    {
      path: '/ingreso/:id_ingreso/borrar',
      name: 'ingresoborrar',
      component: IngresoBorrarVue,
    },


    //Ruta de Gasto: Inicio
    {
      path: '/gasto',
      name: 'gasto',
      component: GastoVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de Gasto: Agregar
    {
      path: '/gasto/agregar',
      name: 'gastoagregar',
      component: GastoAgregarVue,
    },
    //Ruta de Gasto: Editar
    {
      path: '/gasto/:id_gasto/editar',
      name: 'gastoeditar',
      component: GastoEditarVue,
    },
    //Ruta de Gasto: Borrar
    {
      path: '/gasto/:id_gasto/borrar',
      name: 'gastoborrar',
      component: GastoBorrarVue,
    },


    //Ruta de Transaccion: Inicio
    {
      path: '/transaccion',
      name: 'transaccion',
      component: TransaccionVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de Transaccion: Agregar
    {
      path: '/transaccion/agregar',
      name: 'transaccionagregar',
      component: TransaccionAgregarVue,
    },
    //Ruta de Transaccion: Editar
    {
      path: '/transaccion/:id_transaccion/editar',
      name: 'transaccioneditar',
      component: TransaccionEditarVue,
    },
    //Ruta de Transaccion: Borrar
    {
      path: '/transaccion/:id_transaccion/borrar',
      name: 'transaccionborrar',
      component: TransaccionBorrarVue,
    },

    //Ruta de Transaccion: Inicio
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de portafolio: Inicio
    {
      path: '/portafolio',
      name: 'portafolio',
      component: PortafolioVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de portafolio: Agregar
    {
      path: '/portafolio/agregar',
      name: 'portafolioagregar',
      component: PortafolioAgregarVue,
    },
    //Ruta de portafolio: Editar
    {
      path: '/portafolio/:id_portafolio/editar',
      name: 'portafolioeditar',
      component: PortafolioEditarVue,
    },
    //Ruta de portafolio: Borrar
    {
      path: '/portafolio/:id_portafolio/borrar',
      name: 'portafolioborrar',
      component: PortafolioBorrarVue,
    },
    //Ruta de portafolio: Inicio
    {
      path: '/instrumento',
      name: 'instrumento',
      component: InstrumentoVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de portafolio: Agregar
    {
      path: '/instrumento/agregar',
      name: 'instrumentoagregar',
      component: InstrumentoAgregarVue,
    },
    //Ruta de portafolio: Editar
    {
      path: '/instrumento/:id_instrumento/editar',
      name: 'instrumentoeditar',
      component: InstrumentoEditarVue,
    },
    //Ruta de portafolio: Borrar
    {
      path: '/instrumento/:id_instrumento/borrar',
      name: 'instrumentoborrar',
      component: InstrumentoBorrarVue,
    },




    //Ruta de portafolio: Inicio
    {
      path: '/tipo_inversion',
      name: 'tipo_inversion',
      component: Tipo_inversionVue,
      beforeEnter: (to, from, next) => {
        const auth = getAuth();
        const usuario = auth.currentUser;
        if (usuario) {
          next();
        } else {
          next('/signin'); // Redirige al login si no hay usuario
        }
      }
    },
    //Ruta de portafolio: Agregar
    {
      path: '/tipo_inversion/agregar',
      name: 'tipo_inversionagregar',
      component: Tipo_inversionAgregarVue,
    },
    //Ruta de portafolio: Editar
    {
      path: '/tipo_inversion/:id_tipo_inversion/editar',
      name: 'tipo_inversioneditar',
      component: Tipo_inversionEditarVue,
    },
    //Ruta de portafolio: Borrar
    {
      path: '/tipo_inversion/:id_tipo_inversion/borrar',
      name: 'tipo_inversionborrar',
      component: Tipo_inversionBorrarVue,
    },
    /*
    */
    /*
    {
      path: '/home',
      name: 'home',
      component: () => import('../modulos/principal/vistas/HomeVue.vue'),
      meta: { showLayout: false }, // Ocultar navbar y sidebar en Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardVue,
    },
    {
      path: '/recent_transactions',
      name: 'recent_transactions',
      component: RecentTransactionsVue,
    },


    */
  ],
});

export default router