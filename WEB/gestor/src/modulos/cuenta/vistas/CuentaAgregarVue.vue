<!--Boton para agregar un nuevo registro-->
<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Cuenta</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con exito
            </div>
            <div class="card-body">
                <Form @submit="onTodoBien">
                    <div class="mb-3">
                        Nombre
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="nombre" type="text" class="form-control" v-model="cuenta.nombre"/>
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
import type { CuentaAgregar } from '../interfaces/cuenta-interfaces';
import { useCuenta } from '../controladores/useCuenta';
const { agregarCuenta, mensaje } = useCuenta()
import { CuentaSchema } from '../schemas/CuentaSchema';
import { Field, Form, ErrorMessage } from 'vee-validate';


//-----------------Redirigiendo al usuario a la pagina de inicio
//Importamos watch para redirlo y se elimina ref
import { onMounted, watch  } from 'vue';
//Importamos useRouter para redirlo
import { useRoute, useRouter } from 'vue-router';
//-----------------
//Nuevo: redirigirlo a la pagina de inicio de articulo
const routeRedirect = useRouter();
// Observa cambios en `mensaje` para mostrar el mensaje y luego redirigir
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


    let cuenta = ref<CuentaAgregar>({
        nombre: '',
    });


    const onTodoBien = async () => {
    console.log("Formulario enviado, datos:", cuenta.value);
    await agregarCuenta(cuenta.value);
};
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>