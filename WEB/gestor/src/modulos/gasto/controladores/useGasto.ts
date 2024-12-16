import { ref } from "vue"
import type { Gasto, GastoAgregar } from "../interfaces/gasto-interfaces"
import gastoApi from "../api/gastoAPI";

export const useGasto = () => {
    //Se crea la estructura del arreglo: gasto-interfaces.ts
    const gastos = ref<Gasto[]>([])
    //Se mostrara el mensaje cuando este en 1 y no cuando este en 0
    let mensaje = ref(0);

    //Traer todos los registros de la tabla
    const traeGasto = async () => {
        const respuesta = await gastoApi.get<Gasto[]>('/')
        //Cuando si traiga datos
        gastos.value = respuesta.data
    }
    //Traer 1 registro en específico para poderlo modificar
    const traeGastoId = async (id_gasto: number) => {
        const respuesta = await gastoApi.get<Gasto[]>('/' + id_gasto)
        gastos.value = respuesta.data
    }

    //Agregar un nuevo registro
    const agregarGasto = async (gastos: GastoAgregar) => {
        const respuesta = await gastoApi.post('/', gastos)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Modificar registro
    const actualizarGasto = async (gastos: Gasto) => {
        const respuesta = await gastoApi.put('/', gastos)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Eliminar registro
    const borrarGasto = async (gastos: Gasto) => {
        const respuesta = await gastoApi.delete('/', { data: { id_gasto: gastos.id_gasto } })
        if (respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    return {
        gastos,
        mensaje,
        traeGasto,
        traeGastoId,
        agregarGasto,
        actualizarGasto,
        borrarGasto
    }
}
