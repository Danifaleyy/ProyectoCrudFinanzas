<template>
    <div class="container mt-5" v-if="categoria_gastos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Categoria Gasto</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la información?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="categoria_gastos[0].id_categoria_gasto" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="categoria_gastos[0].nombre" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarCategoria_gasto(categoria_gastos[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCategoria_gasto } from '../controladores/useCategoria_gasto';
const { traeCategoria_gastoId, borrarCategoria_gasto, mensaje, categoria_gastos } = useCategoria_gasto()
//Traer los datos del registro de cada id
let idCategoria_gasto = 0
//Para los parametros de la URL
const route = useRoute()
//Para moverme de URL: A otra pagina
const routeRedirect = useRouter()
//Observador(Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/categoria_gasto')
    }
)

onMounted(async() => {
    idCategoria_gasto = Number(route.params.id_categoria_gasto);
    await traeCategoria_gastoId(Number(idCategoria_gasto))
})
</script>

<style scoped></style>
