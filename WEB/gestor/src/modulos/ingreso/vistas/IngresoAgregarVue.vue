<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Ingreso</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con éxito
            </div>
            <div class="card-body">
                <Form @submit="onTodoBien">
                    <div class="mb-3">
                        ID Cuenta
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_cuenta" type="number" class="form-control" v-model="ingreso.fk_id_cuenta"/>
                        <ErrorMessage name="fk_id_cuenta" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        fk_id_categoria_ingreso
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_categoria_ingreso" type="number" class="form-control" v-model="ingreso.fk_id_categoria_ingreso"/>
                        <ErrorMessage name="fk_id_categoria_ingreso" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        descripcion
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="descripcion" type="text" class="form-control" v-model="ingreso.descripcion"/>
                        <ErrorMessage name="descripcion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        monto
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="monto" type="number" class="form-control" v-model="ingreso.monto"/>
                        <ErrorMessage name="monto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        ID Cuenta
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fecha_operacion" type="date" class="form-control" v-model="ingreso.fecha_operacion"/>
                        <ErrorMessage name="fecha_operacion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        <!--<Field name="nombre" button class="btn btn-primary" @click="agregarIngreso(ingreso)">Agregar</Field>-->
                        <button class="btn btn-primary" type="submit">Agregar</button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { IngresoAgregar } from '../interfaces/ingreso-interfaces';
import { useIngreso } from '../controladores/useIngreso';
const { agregarIngreso, mensaje } = useIngreso()
import { IngresoSchema } from '../schemas/IngresoSchema';
import { Field, Form, ErrorMessage } from 'vee-validate';


//-----------------Redirigiendo al usuario a la pagina de inicio
//Importamos watch para redirlo y se elimina ref
import { onMounted, watch } from 'vue';
//Importamos useRouter para redirlo
import { useRoute, useRouter } from 'vue-router';
//-----------------
//Nuevo: redirigirlo a la pagina de inicio de ingreso
const routeRedirect = useRouter();
// Observa cambios en `mensaje` para mostrar el mensaje y luego redirigir
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/ingreso'); // Redirige después de 1 segundo
            }, 1000); // Espera 1 segundo antes de redirigir
        }
    }
);
//-----------------


let ingreso = ref<IngresoAgregar>({
    fk_id_cuenta: 0,
    fk_id_categoria_ingreso: 0,
    descripcion: '',
    monto: 0,
    fecha_operacion: new Date()
});

const onTodoBien = async () => {
    await agregarIngreso(ingreso.value);
}
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>
