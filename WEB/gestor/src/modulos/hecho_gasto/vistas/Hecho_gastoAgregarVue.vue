<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Hecho Gasto</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con éxito
            </div>
            <div class="card-body">
                <Form @submit="onTodoBien">
                    <div class="mb-3">
                        Nombre
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="nombre" type="text" class="form-control" v-model="hecho_gasto.nombre"/>
                        <ErrorMessage name="nombre" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        <!--<Field name="nombre" button class="btn btn-primary" @click="agregarPersonal(personal)">Agregar</Field>-->
                        <button class="btn btn-primary" type="submit">Agregar</button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Hecho_gastoAgregar } from '../interfaces/hecho_gasto-interfaces';
import { useHecho_gasto } from '../controladores/useHecho_gasto';
const { agregarHecho_gasto, mensaje } = useHecho_gasto()
import { Hecho_gastoSchema } from '../schemas/Hecho_gastoSchema';
import { Field, Form, ErrorMessage } from 'vee-validate';

//-----------------Redirigiendo al usuario a la página de inicio
//Importamos watch para redirigir y se elimina ref
import { onMounted, watch } from 'vue';
//Importamos useRouter para redirigir
import { useRoute, useRouter } from 'vue-router';
//-----------------
//Nuevo: redirigirlo a la página de inicio de hecho_gasto
const routeRedirect = useRouter();
// Observa cambios en `mensaje` para mostrar el mensaje y luego redirigir
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/hecho_gasto'); // Redirige después de 1 segundo
            }, 1000); // Espera 1 segundo antes de redirigir
        }
    }
);
//-----------------

let hecho_gasto = ref<Hecho_gastoAgregar>({
    nombre: '',
});

const onTodoBien = async () => {
    await agregarHecho_gasto(hecho_gasto.value);
}
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>
