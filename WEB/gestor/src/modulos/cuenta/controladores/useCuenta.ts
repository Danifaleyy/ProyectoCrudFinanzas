import { ref } from "vue"
import type { Cuenta, CuentaAgregar } from "../interfaces/cuenta-interfaces"
import cuentaApi from "../api/cuentaAPI";


export const useCuenta = () =>{
    //Se crea la estructura del arreglo: personal-interfaces.ts
    const cuentas = ref<Cuenta[]>([])
    //Se mostrara el mensaje cuandol este en 1 y no cuando este en 0
    let mensaje = ref(0);

    //Traer todos los registros de la tabla
    const traeCuenta = async () =>{
        const respuesta = await cuentaApi.get<Cuenta[]>('/')
        //Cuando si traiga datos
        cuentas.value = respuesta.data
    }
    //Traer 1 registro en especifico para poderlo modificar
    const traeCuentaId = async (id_cuenta:number) => {
        const respuesta = await cuentaApi.get<Cuenta[]>('/'+id_cuenta)
        cuentas.value = respuesta.data
    }

    //Agregar un nuevo registro
    const agregarCuenta = async (cuentas:CuentaAgregar) => {
    const respuesta = await cuentaApi.post('/', cuentas)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Modificar registro
    const actualizarCuenta = async (cuentas:Cuenta) => {
        const respuesta = await cuentaApi.put('/',cuentas)
        if(respuesta.data.affectedRows >= 1) {
            mensaje.value = 1;
        }
    }
    //Eliminar registro
    const borrarCuenta = async (cuentas:Cuenta) => {
        const respuesta = await cuentaApi.delete('/',{data: {id_cuenta: cuentas.id_cuenta}})
        if(respuesta.data.fieldCount >= 0) {
            mensaje.value = 1;
        }
    }

    return{
        cuentas,
        mensaje,
        traeCuenta,
        traeCuentaId,
        agregarCuenta,
        actualizarCuenta,
        borrarCuenta
    }
}