import { ref } from "vue"
import type { Instrumento, InstrumentoAgregar } from "../interfaces/instrumento-interfaces"
import instrumentoApi from "../api/instrumentoAPI";

export const useInstrumento = () =>{
    //Se crea la estructura del arreglo: personal-interfaces.ts
    const instrumentos = ref<Instrumento[]>([])
    //Se mostrara el mensaje cuandol este en 1 y no cuando este en 0
    let mensaje = ref(0);

    //Traer todos los registros de la tabla
    const traeInstrumento = async () =>{
        const respuesta = await instrumentoApi.get<Instrumento[]>('/')
        //Cuando si traiga datos
        instrumentos.value = respuesta.data
    }
    //Traer 1 registro en especifico para poderlo modificar
    const traeInstrumentoId = async (id_instrumento:number) => {
        const respuesta = await instrumentoApi.get<Instrumento[]>('/'+id_instrumento)
        instrumentos.value = respuesta.data
    }

    //Agregar un nuevo registro
    const agregarInstrumento = async (instrumentos:InstrumentoAgregar) => {
    const respuesta = await instrumentoApi.post('/', instrumentos)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Modificar registro
    const actualizarInstrumento = async (instrumentos:Instrumento) => {
        const respuesta = await instrumentoApi.put('/',instrumentos)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Eliminar registro
    const borrarInstrumento = async (instrumentos:Instrumento) => {
        const respuesta = await instrumentoApi.delete('/',{data: {id_instrumento: instrumentos.id_instrumento}})
        if(respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    return{
        instrumentos,
        mensaje,
        traeInstrumento,
        traeInstrumentoId,
        agregarInstrumento,
        actualizarInstrumento,
        borrarInstrumento
    }
}
