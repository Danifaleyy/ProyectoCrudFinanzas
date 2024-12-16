<template>
    <div class="container mt-5" v-if="hecho_gastos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Hecho Gasto</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la información?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="hecho_gastos[0].id_hecho_gasto" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="hecho_gastos[0].nombre" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarHecho_gasto(hecho_gastos[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useHecho_gasto } from '../controladores/useHecho_gasto';

const { traeHecho_gastoId, borrarHecho_gasto, mensaje, hecho_gastos } = useHecho_gasto()

let idHecho_gasto = 0
const route = useRoute()
const routeRedirect = useRouter()

watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/hecho_gasto')
    }
)

onMounted(async() => {
    idHecho_gasto = Number(route.params.id_hecho_gasto);
    await traeHecho_gastoId(Number(idHecho_gasto))
})
</script>

<style scoped></style>
