import { ref } from "vue";
import type { Categoria_gasto, Categoria_gastoAgregar } from "../interfaces/categoria_gasto-interfaces";
import categoria_gastoApi from "../api/categoria_gastoAPI";

export const useCategoria_gasto = () => {
  // Arreglo para almacenar los clientes
  const categoria_gastos = ref<Categoria_gasto[]>([]);
  // Mensaje para mostrar estado de las operaciones
  let mensaje = ref(0);
  
  const traeCategoria_gasto = async () =>{
    const respuesta = await categoria_gastoApi.get<Categoria_gasto[]>('/')
    //Cuando si traiga datos
    categoria_gastos.value = respuesta.data
}
  //Traer Personal para poder editar un registro
  const traeCategoria_gastoId = async (id_categoria_gasto:number) => {
    const respuesta = await categoria_gastoApi.get<Categoria_gasto[]>('/'+id_categoria_gasto)
    categoria_gastos.value = respuesta.data
  }
  //Agregar Personal
  const agregarCategoria_gasto = async (categoria_gastos:Categoria_gastoAgregar) => {
    const respuesta = await categoria_gastoApi.post('/', categoria_gastos)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
  //Modificar Personal
  const actualizarCategoria_gasto = async (categoria_gastos:Categoria_gasto) => {
    const respuesta = await categoria_gastoApi.put('/',categoria_gastos)
    if(respuesta.data.affectedRows >= 1) {
        mensaje.value = 1;
    }
  }
  //Eliminar Personal
  const borrarCategoria_gasto = async (categoria_gastos:Categoria_gasto) => {
    const respuesta = await categoria_gastoApi.delete('/',{data: {id_categoria_gasto: categoria_gastos.id_categoria_gasto}})
    if(respuesta.data.fieldCount >= 0) {
        mensaje.value = 1;
    }
  } 

  return {
    categoria_gastos,
    mensaje,
    traeCategoria_gasto,
    traeCategoria_gastoId,
    agregarCategoria_gasto,
    actualizarCategoria_gasto,
    borrarCategoria_gasto
  };
};
