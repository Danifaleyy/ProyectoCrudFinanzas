import { ref } from "vue";
import type { Lugar_gasto, Lugar_gastoAgregar } from "../interfaces/lugar_gasto-interfaces";
import lugar_gastoApi from "../api/lugar_gastoAPI";

export const useLugar_gasto = () => {
  // Arreglo para almacenar los lugares
  const lugar_gastos = ref<Lugar_gasto[]>([]);
  // Mensaje para mostrar estado de las operaciones
  let mensaje = ref(0);
  
  const traeLugar_gasto = async () => {
    const respuesta = await lugar_gastoApi.get<Lugar_gasto[]>('/')
    //Cuando si traiga datos
    lugar_gastos.value = respuesta.data;
  };

  //Traer lugar para poder editar un registro
  const traeLugar_gastoId = async (id_lugar_gasto: number) => {
    const respuesta = await lugar_gastoApi.get<Lugar_gasto[]>('/' + id_lugar_gasto);
    lugar_gastos.value = respuesta.data;
  };

  //Agregar lugar
  const agregarLugar_gasto = async (lugar_gastos: Lugar_gastoAgregar) => {
    const respuesta = await lugar_gastoApi.post('/', lugar_gastos);
    if (respuesta.data.affectedRows >= 1) {
      mensaje.value = 1;
    }
  };

  //Modificar lugar
  const actualizarLugar_gasto = async (lugar_gastos: Lugar_gasto) => {
    const respuesta = await lugar_gastoApi.put('/', lugar_gastos);
    if (respuesta.data.affectedRows >= 1) {
      mensaje.value = 1;
    }
  };

  //Eliminar lugar
  const borrarLugar_gasto = async (lugar_gastos: Lugar_gasto) => {
    const respuesta = await lugar_gastoApi.delete('/', { data: { id_lugar_gasto: lugar_gastos.id_lugar_gasto } });
    if (respuesta.data.fieldCount >= 0) {
      mensaje.value = 1;
    }
  };

  return {
    lugar_gastos,
    mensaje,
    traeLugar_gasto,
    traeLugar_gastoId,
    agregarLugar_gasto,
    actualizarLugar_gasto,
    borrarLugar_gasto
  };
};
