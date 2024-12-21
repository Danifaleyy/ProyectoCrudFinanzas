import { ref } from "vue"
import type { Portafolio, PortafolioAgregar } from "../interfaces/portafolio-interfaces"
import portafolioApi from "../api/portafolioAPI";

export const usePortafolio = () => {
    //Se crea la estructura del arreglo: ingreso-interfaces.ts
    const portafolios = ref<Portafolio[]>([])
    //Se mostrara el mensaje cuando este en 1 y no cuando este en 0
    let mensaje = ref(0);

    //Traer todos los registros de la tabla
    const traePortafolio = async () => {
        const respuesta = await portafolioApi.get<Portafolio[]>('/')
        //Cuando si traiga datos
        portafolios.value = respuesta.data
    }
    //Traer 1 registro en específico para poderlo modificar
    const traePortafolioId = async (id_portafolio: number) => {
        const respuesta = await portafolioApi.get<Portafolio[]>('/' + id_portafolio)
        portafolios.value = respuesta.data
    }

    //Agregar un nuevo registro
    const agregarPortafolio = async (portafolios: PortafolioAgregar) => {
        const respuesta = await portafolioApi.post('/', portafolios)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Modificar registro
    const actualizarPortafolio = async (portafolios: Portafolio) => {
        const respuesta = await portafolioApi.put('/', portafolios)
        if (respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Eliminar registro
    const borrarPortafolio = async (portafolios: Portafolio) => {
        const respuesta = await portafolioApi.delete('/', { data: { id_portafolio: portafolios.id_portafolio } })
        if (respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    return {
        portafolios,
        mensaje,
        traePortafolio,
        traePortafolioId,
        agregarPortafolio,
        actualizarPortafolio,
        borrarPortafolio
    }
}
