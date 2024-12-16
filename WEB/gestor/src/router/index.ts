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
import Tipo_gastoAgregarVue from '@/modulos/tipo_gasto/vistas/Tipo_gastoAgregarVue.vue'
import Tipo_gastoBorrarVue from '@/modulos/tipo_gasto/vistas/Tipo_gastoBorrarVue.vue'
import Tipo_gastoEditarVue from '@/modulos/tipo_gasto/vistas/Tipo_gastoEditarVue.vue'
import Tipo_gastoVue from '@/modulos/tipo_gasto/vistas/Tipo_gastoVue.vue'
import TransaccionAgregarVue from '@/modulos/transaccion/vistas/TransaccionAgregarVue.vue'
import TransaccionBorrarVue from '@/modulos/transaccion/vistas/TransaccionBorrarVue.vue'
import TransaccionEditarVue from '@/modulos/transaccion/vistas/TransaccionEditarVue.vue'
import TransaccionVue from '@/modulos/transaccion/vistas/TransaccionVue.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Ruta de cuenta: Inicio
    {
      path: '/cuenta',
      name: 'cuenta',
      component: CuentaVue,
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
  ],
});

export default router