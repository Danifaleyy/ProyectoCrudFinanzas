<template>
    <div class="container mt-5" v-if="lugar_gastos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Lugar Gasto</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert">
                Datos actualizados con éxito
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Id
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="lugar_gastos[0].id_lugar_gasto" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="lugar_gastos[0].nombre">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarLugar_gasto(lugar_gastos[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLugar_gasto } from '../controladores/useLugar_gasto';

const { traeLugar_gastoId, actualizarLugar_gasto, mensaje, lugar_gastos } = useLugar_gasto()
let idLugar_gasto = 0
const route = useRoute()

//-----------------Redirigiendo al usuario a la pagina de inicio
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
//-----------------
const routeRedirect = useRouter();

// Observa cambios en `mensaje` para mostrar el mensaje y luego redirigir
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/lugar_gasto'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);

onMounted(async() => {
    idLugar_gasto = Number(route.params.id_lugar_gasto);
    await traeLugar_gastoId(Number(idLugar_gasto))
})
</script>

<style scoped>
</style>
