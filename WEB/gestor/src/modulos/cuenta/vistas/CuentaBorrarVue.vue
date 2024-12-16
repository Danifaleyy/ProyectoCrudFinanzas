<template>
    <div class="container mt-5" v-if="cuentas[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Cuenta</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la informacion?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="cuentas[0].id_cuenta" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="cuentas[0].nombre" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarCuenta(cuentas[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCuenta } from '../controladores/useCuenta';
const { traeCuentaId, borrarCuenta, mensaje, cuentas } = useCuenta()
//Traer los datos del registro de cada id
let idCuenta = 0
//Para los parametros de la URL
const route = useRoute()
//Para moverme de URL: A otra pagina
const routeRedirect = useRouter()
//Observador(Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/cuenta')
    }
)

onMounted(async() => {
    idCuenta = Number(route.params.id_cuenta);
    await traeCuentaId(Number(idCuenta))
})
</script>

<style scoped></style>