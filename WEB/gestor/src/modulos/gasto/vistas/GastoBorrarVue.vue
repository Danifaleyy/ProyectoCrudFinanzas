<template>
    <div class="container mt-5" v-if="gastos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Borrar Gasto</h4>
            </div>
            <div class="alert alert-warning" role="alert" >
                ¿Seguro que deseas borrar la información?
                <i class="fa fa-warning"></i>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].id_gasto" disabled>
                </div>
                <div class="mb-3">
                    ID Cuenta
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].fk_id_cuenta" disabled>
                </div>
                <div class="mb-3">
                    ID Categoria Gasto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].fk_id_categoria_gasto" disabled>
                </div>
                <div class="mb-3">
                    ID Tipo Gasto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].fk_id_tipo_gasto" disabled>
                </div>
                <div class="mb-3">
                    ID Lugar Gasto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].fk_id_lugar_gasto" disabled>
                </div>
                <div class="mb-3">
                    Descripcion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="gastos[0].descripcion" disabled>
                </div>
                <div class="mb-3">
                    Monto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].monto" disabled>
                </div>
                <div class="mb-3">
                    Fecha De Operacion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="gastos[0].fecha_operacion" disabled>
                </div>
                <div class="mb-3">
                    Fecha De Pago
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="gastos[0].fecha_pago" disabled>
                </div>
                <div class="mb-3">
                    ID Hecho Gasto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].fk_id_hecho_gasto" disabled>
                </div>
                <div class="mb-3">
                    <button class="btn btn-danger" @click="borrarGasto(gastos[0])">Borrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGasto } from '../controladores/useGasto';
const { traeGastoId, borrarGasto, mensaje, gastos } = useGasto()
let idGasto = 0
const route = useRoute()
const routeRedirect = useRouter()

watch(
    () => mensaje.value,
    newId => {
        routeRedirect.push('/gasto')
    }
)

onMounted(async() => {
    idGasto = Number(route.params.id_gasto);
    await traeGastoId(Number(idGasto))
})
</script>

<style scoped></style>
