<template>
    <div class="container mt-5" v-if="transacciones[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Transacción</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos actualizados con éxito
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
                    <input type="number" class="form-control" v-model="transacciones[0].fk_id_cuenta_saliente">
                </div>
                <div class="mb-3">
                    ID Cuenta Entrante
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="transacciones[0].fk_id_cuenta_entrante">
                </div>
                <div class="mb-3">
                    Descripción
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="transacciones[0].descripcion">
                </div>
                <div class="mb-3">
                    Monto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="transacciones[0].monto">
                </div>
                <div class="mb-3">
                    Fecha
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="transacciones[0].fecha">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarTransaccion(transacciones[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTransaccion } from '../controladores/useTransaccion';
const { traeTransaccionId, actualizarTransaccion, mensaje, transacciones } = useTransaccion()
//Traer los datos del registro de cada id
let idTransaccion = 0
const route = useRoute()

//-----------------Redirigiendo al usuario a la pagina de inicio
//Importamos watch para redirigirlo y se elimina ref
import { onMounted, watch  } from 'vue';
//Importamos useRouter para redirigirlo
import { useRoute, useRouter } from 'vue-router';
//-----------------
//Nuevo: redirigirlo a la pagina de inicio de transacción
const routeRedirect = useRouter();
// Observa cambios en mensaje para mostrar el mensaje y luego redirigir
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/transaccion'); // Redirige después de 1 segundo
            }, 1000); // Espera 1 segundo antes de redirigir
        }
    }
);
//-----------------


onMounted(async() => {
    idTransaccion = Number(route.params.id_transaccion);
    await traeTransaccionId(Number(idTransaccion))
})
</script>

<style scoped>
    
</style>
