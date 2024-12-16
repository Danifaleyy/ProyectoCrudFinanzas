import { ref } from "vue";
import type { Categoria_ingreso, Categoria_ingresoAgregar } from "../interfaces/categoria_ingreso-interfaces";
import categoria_ingresoApi from "../api/categoria_ingresoAPI";

export const useCategoria_ingreso = () => {
  // Arreglo para almacenar los clientes
  const categoria_ingresos = ref<Categoria_ingreso[]>([]);
  // Mensaje para mostrar estado de las operaciones
  let mensaje = ref(0);
  
  const traeCategoria_ingreso = async () =>{
    const respuesta = await categoria_ingresoApi.get<Categoria_ingreso[]>('/')
    //Cuando si traiga datos
    categoria_ingresos.value = respuesta.data
    //console.log(personal.value)
    //Cuando no traiga datos
    //personal.value = []
}
  //Traer Personal para poder editar un registro
  const traeCategoria_ingresoId = async (id_categoria_ingreso:number) => {
    const respuesta = await categoria_ingresoApi.get<Categoria_ingreso[]>('/'+id_categoria_ingreso)
    categoria_ingresos.value = respuesta.data
  }
  //Agregar Personal
  const agregarCategoria_ingreso = async (categoria_ingresos:Categoria_ingresoAgregar) => {
    const respuesta = await categoria_ingresoApi.post('/', categoria_ingresos)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
  //Modificar Personal
  const actualizarCategoria_ingreso = async (categoria_ingresos:Categoria_ingreso) => {
    const respuesta = await categoria_ingresoApi.put('/',categoria_ingresos)
    if(respuesta.data.affectedRows >= 1) {
        mensaje.value = 1;
    }
  }
  //Eliminar Personal
  const borrarCategoria_ingreso = async (categoria_ingresos:Categoria_ingreso) => {
    const respuesta = await categoria_ingresoApi.delete('/',{data: {id_categoria_ingreso: categoria_ingresos.id_categoria_ingreso}})
    if(respuesta.data.fieldCount >= 0) {
        mensaje.value = 1;
    }
  } 

  return {
    categoria_ingresos,
    mensaje,
    traeCategoria_ingreso,
    traeCategoria_ingresoId,
    agregarCategoria_ingreso,
    actualizarCategoria_ingreso,
    borrarCategoria_ingreso
  };
};
