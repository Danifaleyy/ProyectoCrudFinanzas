<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Transacción</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert">
                Datos agregados con éxito
            </div>
            <div class="card-body">
                <Form @submit="onTodoBien">
                    <div class="mb-3">
                        ID Cuenta Saliente
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_cuenta_saliente" type="select" class="form-control" v-model="transaccion.fk_id_cuenta_saliente" />
                        <ErrorMessage name="fk_id_cuenta_saliente" class="errorValidacion" />
                    </div>
                    <div class="mb-3">
                        ID Cuenta Entrante
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_cuenta_entrante" type="select" class="form-control" v-model="transaccion.fk_id_cuenta_entrante" />
                        <ErrorMessage name="fk_id_cuenta_entrante" class="errorValidacion" />
                    </div>
                    <div class="mb-3">
                        Descripcion
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="descripcion" type="text" class="form-control" v-model="transaccion.descripcion" />
                        <ErrorMessage name="descripcion" class="errorValidacion" />
                    </div>
                    <div class="mb-3">
                        Monto
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="monto" type="number" class="form-control" v-model="transaccion.monto" />
                        <ErrorMessage name="monto" class="errorValidacion" />
                    </div>
                    <div class="mb-3">
                        Fecha
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fecha" type="date" class="form-control" v-model="transaccion.fecha" />
                        <ErrorMessage name="fecha" class="errorValidacion" />
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit">Agregar</button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TransaccionAgregar } from '../interfaces/transaccion-interfaces';
import { useTransaccion } from '../controladores/useTransaccion';
const { agregarTransaccion, mensaje } = useTransaccion();
import { TransaccionSchema } from '../schemas/TransaccionSchema';
import { Field, Form, ErrorMessage } from 'vee-validate';

//-----------------Redirigiendo al usuario a la página de inicio
//Importamos watch para redirigirlo y se elimina ref
import { onMounted, watch } from 'vue';
//Importamos useRouter para redirigirlo
import { useRoute, useRouter } from 'vue-router';
//-----------------
//Nuevo: redirigirlo a la página de inicio de transacciones
const routeRedirect = useRouter();
// Observa cambios en `mensaje` para mostrar el mensaje y luego redirigir
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

let transaccion = ref<TransaccionAgregar>({
    fk_id_cuenta_saliente: 0,
    fk_id_cuenta_entrante: 0,
    descripcion: '',
    monto: 0,
    fecha: new Date()
});

const onTodoBien = async () => {
    await agregarTransaccion(transaccion.value);
};
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>
