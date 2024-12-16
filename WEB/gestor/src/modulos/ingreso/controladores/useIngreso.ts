import { ref } from "vue"
import type { Ingreso, IngresoAgregar } from "../interfaces/ingreso-interfaces"
import ingresoApi from "../api/ingresoAPI";

export const useIngreso = () => {
    //Se crea la estructura del arreglo: ingreso-interfaces.ts
    const ingresos = ref<Ingreso[]>([])
    //Se mostrara el mensaje cuando este en 1 y no cuando este en 0
    let mensaje = ref(0);

    //Traer todos los registros de la tabla
    const traeIngreso = async () => {
        const respuesta = await ingresoApi.get<Ingreso[]>('/')
        //Cuando si traiga datos
        ingresos.value = respuesta.data
    }
    //Traer 1 registro en específico para poderlo modificar
    const traeIngresoId = async (id_ingreso: number) => {
        const respuesta = await ingresoApi.get<Ingreso[]>('/' + id_ingreso)
        ingresos.value = respuesta.data
    }

    //Agregar un nuevo registro
    const agregarIngreso = async (ingresos: IngresoAgregar) => {
        const respuesta = await ingresoApi.post('/', ingresos)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Modificar registro
    const actualizarIngreso = async (ingresos: Ingreso) => {
        const respuesta = await ingresoApi.put('/', ingresos)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Eliminar registro
    const borrarIngreso = async (ingresos: Ingreso) => {
        const respuesta = await ingresoApi.delete('/', { data: { id_ingreso: ingresos.id_ingreso } })
        if (respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    return {
        ingresos,
        mensaje,
        traeIngreso,
        traeIngresoId,
        agregarIngreso,
        actualizarIngreso,
        borrarIngreso
    }
}
