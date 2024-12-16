<template>
    <div class="container mt-5" v-if="tipo_gastos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Tipo Gasto</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la información?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="tipo_gastos[0].id_tipo_gasto" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="tipo_gastos[0].nombre" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarTipo_gasto(tipo_gastos[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTipo_gasto } from '../controladores/useTipo_gasto';
const { traeTipo_gastoId, borrarTipo_gasto, mensaje, tipo_gastos } = useTipo_gasto()
//Traer los datos del registro de cada id
let idTipo_gasto = 0
//Para los parámetros de la URL
const route = useRoute()
//Para moverme de URL: A otra página
const routeRedirect = useRouter()
//Observador(Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/tipo_gasto')
    }
)

onMounted(async() => {
    idTipo_gasto = Number(route.params.id_tipo_gasto);
    await traeTipo_gastoId(Number(idTipo_gasto))
})
</script>

<style scoped></style>
