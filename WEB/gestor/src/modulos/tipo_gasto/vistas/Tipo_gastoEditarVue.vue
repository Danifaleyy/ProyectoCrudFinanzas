<template>
    <div class="container mt-5" v-if="tipo_gastos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Tipo Gasto</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert">
                Datos actualizados con éxito
            </div>
            <div class="card-body">
                <div class="mb-3">
                    Id
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="tipo_gastos[0].id_tipo_gasto" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="tipo_gastos[0].nombre">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarTipo_gasto(tipo_gastos[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTipo_gasto } from '../controladores/useTipo_gasto';

const { traeTipo_gastoId, actualizarTipo_gasto, mensaje, tipo_gastos } = useTipo_gasto()
//Traer los datos del registro de cada id
let idTipo_gasto = 0
const route = useRoute()


//-----------------Redirigiendo al usuario a la pagina de inicio
//Importamos watch para redirlo y se elimina ref
import { onMounted, watch  } from 'vue';
//Importamos useRouter para redirlo
import { useRoute, useRouter } from 'vue-router';
//-----------------
//Nuevo: redirigirlo a la pagina de inicio de tipo
const routeRedirect = useRouter();
// Observa cambios en `mensaje` para mostrar el mensaje y luego redirigir
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/tipo_gasto'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


onMounted(async() => {
    idTipo_gasto = Number(route.params.id_tipo_gasto);
    await traeTipo_gastoId(Number(idTipo_gasto))
})


</script>

<style scoped>

</style>
