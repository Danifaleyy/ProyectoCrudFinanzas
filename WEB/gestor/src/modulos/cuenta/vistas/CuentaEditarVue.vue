<template>
    <div class="container mt-5" v-if="cuentas[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Cuenta</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos actualizados con exito
            </div>
            <div class="card-body">
                <div class="mb-3">
                    ID
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="cuentas[0].id_cuenta" disabled>
                </div>
                <div class="mb-3">
                    Nombre
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="cuentas[0].nombre">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarCuenta(cuentas[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCuenta } from '../controladores/useCuenta';
const { traeCuentaId, actualizarCuenta, mensaje, cuentas } = useCuenta()
//Traer los datos del registro de cada id
let idCuenta = 0
const route = useRoute()


//-----------------Redirigiendo al usuario a la pagina de inicio
//Importamos watch para redirlo y se elimina ref
import { onMounted, watch  } from 'vue';
//Importamos useRouter para redirlo
import { useRoute, useRouter } from 'vue-router';
//-----------------
//Nuevo: redirigirlo a la pagina de inicio de articulo
const routeRedirect = useRouter();
// Observa cambios en mensaje para mostrar el mensaje y luego redirigir
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/cuenta'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


onMounted(async() => {
    idCuenta = Number(route.params.id_cuenta);
    await traeCuentaId(Number(idCuenta))
})
</script>

<style scoped>
    
</style>