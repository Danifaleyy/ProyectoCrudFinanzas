<template>
    <div class="container mt-5" v-if="gastos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Gasto</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos actualizados con exito
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
                    <input type="number" class="form-control" v-model="gastos[0].fk_id_cuenta">
                </div>
                <div class="mb-3">
                    ID Categoria Gasto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].fk_id_categoria_gasto">
                </div>
                <div class="mb-3">
                    ID Lugar Gasto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].fk_id_lugar_gasto">
                </div>
                <div class="mb-3">
                    Descripcion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="gastos[0].descripcion">
                </div>
                <div class="mb-3">
                    Monto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].monto">
                </div>
                <div class="mb-3">
                    Fecha De Operacion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="gastos[0].fecha_operacion">
                </div>
                <div class="mb-3">
                    Fecha De Pago
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="gastos[0].fecha_pago">
                </div>
                <div class="mb-3">
                    ID Hecho Gasto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="gastos[0].fk_id_hecho_gasto">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarGasto(gastos[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGasto } from '../controladores/useGasto';
const { traeGastoId, actualizarGasto, mensaje, gastos } = useGasto()
let idGasto = 0
const route = useRoute()

//-----------------Redirigiendo al usuario a la pagina de inicio
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
//-----------------
const routeRedirect = useRouter();
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/gasto'); // Redirige después de 1 segundo
            }, 1000); // Espera 1 segundo antes de redirigir
        }
    }
);

onMounted(async() => {
    idGasto = Number(route.params.id_gasto);
    await traeGastoId(Number(idGasto))
})
</script>

<style scoped>
    
</style>
