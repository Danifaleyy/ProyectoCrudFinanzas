import { ref } from "vue"
import type { Transaccion, TransaccionAgregar } from "../interfaces/transaccion-interfaces"
import transaccionApi from "../api/transaccionAPI";

export const useTransaccion = () => {
    //Se crea la estructura del arreglo: transaccion-interfaces.ts
    const transacciones = ref<Transaccion[]>([])
    //Se mostrara el mensaje cuando este en 1 y no cuando este en 0
    let mensaje = ref(0);

    //Traer todos los registros de la tabla
    const traeTransaccion = async () => {
        const respuesta = await transaccionApi.get<Transaccion[]>('/')
        //Cuando si traiga datos
        transacciones.value = respuesta.data
    }
    //Traer 1 registro en específico para poderlo modificar
    const traeTransaccionId = async (id_transaccion: number) => {
        const respuesta = await transaccionApi.get<Transaccion[]>('/' + id_transaccion)
        transacciones.value = respuesta.data
    }

    //Agregar un nuevo registro
    const agregarTransaccion = async (transacciones: TransaccionAgregar) => {
        const respuesta = await transaccionApi.post('/', transacciones)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Modificar registro
    const actualizarTransaccion = async (transacciones: Transaccion) => {
        const respuesta = await transaccionApi.put('/', transacciones)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Eliminar registro
    const borrarTransaccion = async (transacciones: Transaccion) => {
        const respuesta = await transaccionApi.delete('/', { data: { id_transaccion: transacciones.id_transaccion } })
        if (respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    
    return {
        transacciones,
        mensaje,
        traeTransaccion,
        traeTransaccionId,
        agregarTransaccion,
        actualizarTransaccion,
        borrarTransaccion
    }
}
