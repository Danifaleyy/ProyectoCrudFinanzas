<template>
    <div class="container mt-5" v-if="transacciones[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Transacción</h4>
            </div>
            <div class="alert alert-warning" role="alert">
                ¿Seguro que deseas borrar la información?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="transacciones[0].id_transaccion" disabled>
                </div>
                <div class="mb-3">
                    ID Cuenta Saliente
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="transacciones[0].fk_id_cuenta_saliente" disabled>
                </div>
                <div class="mb-3">
                    ID Cuenta Entrante
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="transacciones[0].fk_id_cuenta_entrante" disabled>
                </div>
                <div class="mb-3">
                    Descripcion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="transacciones[0].descripcion" disabled>
                </div>
                <div class="mb-3">
                    Monto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="transacciones[0].monto" disabled>
                </div>
                <div class="mb-3">
                    Fecha
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="transacciones[0].fecha" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarTransaccion(transacciones[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTransaccion } from '../controladores/useTransaccion';
const { traeTransaccionId, borrarTransaccion, mensaje, transacciones } = useTransaccion()
//Traer los datos del registro de cada id
let idTransaccion = 0
//Para los parámetros de la URL
const route = useRoute()
//Para moverme de URL: A otra página
const routeRedirect = useRouter()
//Observador (Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/transaccion')
    }
)

onMounted(async () => {
    idTransaccion = Number(route.params.id_transaccion);
    await traeTransaccionId(Number(idTransaccion))
})
</script>

<style scoped></style>
