<!--Boton para agregar un nuevo registro-->
<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Categoria Ingreso</h4>
            </div>
            <div v-if="mensaje == 1" class="alert alert-success" role="alert" >
                Datos agregados con exito
            </div>
            <div class="card-body">
                <Form @submit="onTodoBien">
                    <div class="mb-3">
                        Nombre
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="nombre" type="text" class="form-control" v-model="categoria_ingreso.nombre"/>
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
import type { Categoria_ingresoAgregar } from '../interfaces/categoria_ingreso-interfaces';
import { useCategoria_ingreso } from '../controladores/useCategoria_ingreso';
const { agregarCategoria_ingreso, mensaje } = useCategoria_ingreso()
import { Categoria_ingresoSchema } from '../schemas/Categoria_ingresoSchema';
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
                routeRedirect.push('/categoria_ingreso'); // Redirige después de 1 segundos
            }, 1000); // Espera 1 segundos antes de redirigir
        }
    }
);
//-----------------


    let categoria_ingreso = ref<Categoria_ingresoAgregar>({
        nombre: '',
    });


    const onTodoBien = async () => {
    console.log("Formulario enviado, datos:", categoria_ingreso.value);
    await agregarCategoria_ingreso(categoria_ingreso.value);
};
</script>

<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
</style>