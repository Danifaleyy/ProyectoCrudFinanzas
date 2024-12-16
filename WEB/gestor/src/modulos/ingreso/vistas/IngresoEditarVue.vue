<template>
    <div class="container mt-5" v-if="ingresos[0]">
        <div class="card">
            <div class="card-header">
                <h4>Editar Ingreso</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos actualizados con exito
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
                    <input type="number" class="form-control" v-model="ingresos[0].fk_id_cuenta">
                </div>
                <div class="mb-3">
                    fk_id_categoria_ingreso
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="ingresos[0].fk_id_categoria_ingreso">
                </div>
                <div class="mb-3">
                    Descripcion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="text" class="form-control" v-model="ingresos[0].descripcion">
                </div>
                <div class="mb-3">
                    Monto
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="number" class="form-control" v-model="ingresos[0].monto">
                </div>
                <div class="mb-3">
                    Fecha De Operacion
                    <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                    <input type="date" class="form-control" v-model="ingresos[0].fecha_operacion">
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" @click="actualizarIngreso(ingresos[0])">Actualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIngreso } from '../controladores/useIngreso';
const { traeIngresoId, actualizarIngreso, mensaje, ingresos } = useIngreso()
//Traer los datos del registro de cada id
let idIngreso = 0
const route = useRoute()

//-----------------Redirigiendo al usuario a la pagina de inicio
//Importamos watch para redirigirlo y se elimina ref
import { onMounted, watch  } from 'vue';
//Importamos useRouter para redirigirlo
import { useRoute, useRouter } from 'vue-router';
//-----------------
//Nuevo: redirigirlo a la pagina de inicio de ingreso
const routeRedirect = useRouter();
// Observa cambios en mensaje para mostrar el mensaje y luego redirigir
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/ingreso'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundo antes de redirigir
        }
    }
);
//-----------------


onMounted(async() => {
    idIngreso = Number(route.params.id_ingreso);
    await traeIngresoId(Number(idIngreso))
})
</script>

<style scoped>
    
</style>
