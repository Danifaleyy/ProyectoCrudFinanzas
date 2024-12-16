<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Gasto</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con éxito
            </div>
            <div class="card-body">
                <Form @submit="onTodoBien">
                    <div class="mb-3">
                        ID Cuenta
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_cuenta" type="number" class="form-control" v-model="gasto.fk_id_cuenta"/>
                        <ErrorMessage name="fk_id_cuenta" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        ID Categoria Gasto
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_categoria_gasto" type="number" class="form-control" v-model="gasto.fk_id_categoria_gasto"/>
                        <ErrorMessage name="fk_id_categoria_gasto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        ID Tipo Gasto
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_tipo_gasto" type="number" class="form-control" v-model="gasto.fk_id_tipo_gasto"/>
                        <ErrorMessage name="fk_id_tipo_gasto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        ID Lugar Gasto
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_lugar_gasto" type="number" class="form-control" v-model="gasto.fk_id_lugar_gasto"/>
                        <ErrorMessage name="fk_id_lugar_gasto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Descripcion
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="descripcion" type="text" class="form-control" v-model="gasto.descripcion"/>
                        <ErrorMessage name="descripcion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Monto
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="monto" type="number" class="form-control" v-model="gasto.monto"/>
                        <ErrorMessage name="monto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Fecha De Operacion
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fecha_operacion" type="date" class="form-control" v-model="gasto.fecha_operacion"/>
                        <ErrorMessage name="fecha_operacion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Fecha De Pago
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fecha_pago" type="date" class="form-control" v-model="gasto.fecha_pago"/>
                        <ErrorMessage name="fecha_pago" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        ID Hecho Gasto
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_hecho_gasto" type="number" class="form-control" v-model="gasto.fk_id_hecho_gasto"/>
                        <ErrorMessage name="fk_id_hecho_gasto" class="errorValidacion"/>
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
import type { GastoAgregar } from '../interfaces/gasto-interfaces';
import { useGasto } from '../controladores/useGasto';
const { agregarGasto, mensaje } = useGasto()
import { GastoSchema } from '../schemas/GastoSchema';
import { Field, Form, ErrorMessage } from 'vee-validate';

//-----------------Redirigiendo al usuario a la página de inicio
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
                routeRedirect.push('/gasto'); // Redirige después de 1 segundo
            }, 1000); // Espera 1 segundo antes de redirigir
        }
    }
);
//-----------------

let gasto = ref<GastoAgregar>({
    fk_id_cuenta: 0,
    fk_id_categoria_gasto: 0,
    fk_id_tipo_gasto: 0,
    fk_id_lugar_gasto: 0,
    descripcion: '',
    monto: 0,
    fecha_operacion: new Date(),
    fecha_pago: new Date(),
    fk_id_hecho_gasto: 0
});

const onTodoBien = async () => {
    await agregarGasto(gasto.value);
}
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>
