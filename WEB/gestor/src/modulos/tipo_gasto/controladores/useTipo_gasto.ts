import { ref } from "vue";
import type { Tipo_gasto, Tipo_gastoAgregar } from "../interfaces/tipo_gasto-interfaces";
import tipo_gastoApi from "../api/tipo_gastoAPI";

export const useTipo_gasto = () => {
  // Arreglo para almacenar los clientes
  const tipo_gastos = ref<Tipo_gasto[]>([]);
  // Mensaje para mostrar estado de las operaciones
  let mensaje = ref(0);
  
  const traeTipo_gasto = async () => {
    const respuesta = await tipo_gastoApi.get<Tipo_gasto[]>('/')
    //Cuando si traiga datos
    tipo_gastos.value = respuesta.data;
  };

  //Traer Personal para poder editar un registro
  const traeTipo_gastoId = async (id_tipo_gasto: number) => {
    const respuesta = await tipo_gastoApi.get<Tipo_gasto[]>('/' + id_tipo_gasto);
    tipo_gastos.value = respuesta.data;
  };

  //Agregar Personal
  const agregarTipo_gasto = async (tipo_gastos: Tipo_gastoAgregar) => {
    const respuesta = await tipo_gastoApi.post('/', tipo_gastos);
    if (respuesta.data.affectedRows >= 1) {
      mensaje.value = 1;
    }
  };

  //Modificar Personal
  const actualizarTipo_gasto = async (tipo_gastos: Tipo_gasto) => {
    const respuesta = await tipo_gastoApi.put('/', tipo_gastos);
    if (respuesta.data.affectedRows >= 1) {
      mensaje.value = 1;
    }
  };

  //Eliminar Personal
  const borrarTipo_gasto = async (tipo_gastos: Tipo_gasto) => {
    const respuesta = await tipo_gastoApi.delete('/', { data: { id_tipo_gasto: tipo_gastos.id_tipo_gasto } });
    if (respuesta.data.fieldCount >= 0) {
      mensaje.value = 1;
    }
  };

  return {
    tipo_gastos,
    mensaje,
    traeTipo_gasto,
    traeTipo_gastoId,
    agregarTipo_gasto,
    actualizarTipo_gasto,
    borrarTipo_gasto
  };
};
