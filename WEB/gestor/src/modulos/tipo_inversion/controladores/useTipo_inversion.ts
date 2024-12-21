import { ref } from "vue";
import type { Tipo_inversion, Tipo_inversionAgregar } from "../interfaces/tipo_inversion-interfaces";
import tipo_inversionApi from "../api/tipo_inversionAPI";

export const useTipo_inversion = () => {
    // Se crea la estructura del arreglo: personal-interfaces.ts
    const tipo_inversiones = ref<Tipo_inversion[]>([]);
    // Se mostrará el mensaje cuando esté en 1 y no cuando esté en 0
    let mensaje = ref(0);

    // Traer todos los registros de la tabla
    const traeTipo_inversion = async () => {
        const respuesta = await tipo_inversionApi.get<Tipo_inversion[]>('/');
        // Cuando sí traiga datos
        tipo_inversiones.value = respuesta.data;
    };

    // Traer 1 registro en específico para poderlo modificar
    const traeTipo_inversionId = async (id_tipo_inversion: number) => {
        const respuesta = await tipo_inversionApi.get<Tipo_inversion[]>('/' + id_tipo_inversion);
        tipo_inversiones.value = respuesta.data;
    };

    // Agregar un nuevo registro
    const agregarTipo_inversion = async (tipo_inversiones: Tipo_inversionAgregar) => {
        const respuesta = await tipo_inversionApi.post('/', tipo_inversiones);
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    };

    // Modificar registro
    const actualizarTipo_inversion = async (tipo_inversiones: Tipo_inversion) => {
        const respuesta = await tipo_inversionApi.put('/', tipo_inversiones);
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    };

    // Eliminar registro
    const borrarTipo_inversion = async (tipo_inversiones: Tipo_inversion) => {
        const respuesta = await tipo_inversionApi.delete('/', { data: { id_tipo_inversion: tipo_inversiones.id_tipo_inversion } });
        if (respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    };

    return {
        tipo_inversiones,
        mensaje,
        traeTipo_inversion,
        traeTipo_inversionId,
        agregarTipo_inversion,
        actualizarTipo_inversion,
        borrarTipo_inversion
    };
};
