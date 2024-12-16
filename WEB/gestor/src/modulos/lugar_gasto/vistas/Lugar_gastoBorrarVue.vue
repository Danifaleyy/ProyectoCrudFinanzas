<template>
    <div class="container mt-5" v-if="lugar_gastos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Lugar Gasto</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la información?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="lugar_gastos[0].id_lugar_gasto" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="lugar_gastos[0].nombre" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarLugar_gasto(lugar_gastos[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useLugar_gasto } from '../controladores/useLugar_gasto';

const { traeLugar_gastoId, borrarLugar_gasto, mensaje, lugar_gastos } = useLugar_gasto()

let idLugar_gasto = 0
const route = useRoute()
const routeRedirect = useRouter()

watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/lugar_gasto')
    }
)

onMounted(async() => {
    idLugar_gasto = Number(route.params.id_lugar_gasto);
    await traeLugar_gastoId(Number(idLugar_gasto))
})
</script>

<style scoped></style>
