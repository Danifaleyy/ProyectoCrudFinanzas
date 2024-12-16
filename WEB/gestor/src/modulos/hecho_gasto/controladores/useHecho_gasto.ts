import { ref } from "vue";
import type { Hecho_gasto, Hecho_gastoAgregar } from "../interfaces/hecho_gasto-interfaces";
import hecho_gastoApi from "../api/hecho_gastoAPI";

export const useHecho_gasto = () => {
  // Arreglo para almacenar los hechos
  const hecho_gastos = ref<Hecho_gasto[]>([]);
  // Mensaje para mostrar estado de las operaciones
  let mensaje = ref(0);
  
  const traeHecho_gasto = async () => {
    const respuesta = await hecho_gastoApi.get<Hecho_gasto[]>('/')
    //Cuando si traiga datos
    hecho_gastos.value = respuesta.data;
  };

  //Traer hecho para poder editar un registro
  const traeHecho_gastoId = async (id_hecho_gasto: number) => {
    const respuesta = await hecho_gastoApi.get<Hecho_gasto[]>('/' + id_hecho_gasto);
    hecho_gastos.value = respuesta.data;
  };

  //Agregar hecho
  const agregarHecho_gasto = async (hecho_gastos: Hecho_gastoAgregar) => {
    const respuesta = await hecho_gastoApi.post('/', hecho_gastos);
    if (respuesta.data.affectedRows >= 1) {
      mensaje.value = 1;
    }
  };

  //Modificar hecho
  const actualizarHecho_gasto = async (hecho_gastos: Hecho_gasto) => {
    const respuesta = await hecho_gastoApi.put('/', hecho_gastos);
    if (respuesta.data.affectedRows >= 1) {
      mensaje.value = 1;
    }
  };

  //Eliminar hecho
  const borrarHecho_gasto = async (hecho_gastos: Hecho_gasto) => {
    const respuesta = await hecho_gastoApi.delete('/', { data: { id_hecho_gasto: hecho_gastos.id_hecho_gasto } });
    if (respuesta.data.fieldCount >= 0) {
      mensaje.value = 1;
    }
  };

  return {
    hecho_gastos,
    mensaje,
    traeHecho_gasto,
    traeHecho_gastoId,
    agregarHecho_gasto,
    actualizarHecho_gasto,
    borrarHecho_gasto
  };
};
