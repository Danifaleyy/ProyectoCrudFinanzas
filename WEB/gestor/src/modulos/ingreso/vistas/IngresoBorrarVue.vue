<template>
    <div class="container mt-5" v-if="ingresos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Ingreso</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la información?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="ingresos[0].id_ingreso" disabled>
                </div>
                <div class="mb-3">
                    fk_id_cuenta
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="ingresos[0].fk_id_cuenta" disabled>
                </div>
                <div class="mb-3">
                    fk_id_categoria_ingreso
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="ingresos[0].fk_id_categoria_ingreso" disabled>
                </div>
                <div class="mb-3">
                    Descripcion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="ingresos[0].descripcion" disabled>
                </div>
                <div class="mb-3">
                    Monto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="ingresos[0].monto" disabled>
                </div>
                <div class="mb-3">
                    Fecha De Operacion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="ingresos[0].fecha_operacion" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarIngreso(ingresos[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useIngreso } from '../controladores/useIngreso';
const { traeIngresoId, borrarIngreso, mensaje, ingresos } = useIngreso()
//Traer los datos del registro de cada id
let idIngreso = 0
//Para los parámetros de la URL
const route = useRoute()
//Para moverme de URL: A otra página
const routeRedirect = useRouter()
//Observador(Watch): sirve para ver el comportamiento de una variable
watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/ingreso')
    }
)

onMounted(async() => {
    idIngreso = Number(route.params.id_ingreso);
    await traeIngresoId(Number(idIngreso))
})
</script>

<style scoped></style>
