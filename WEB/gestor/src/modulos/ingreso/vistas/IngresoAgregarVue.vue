<template>
    <div class="contedenor_padre">
        <div class="card">
            <div class="contenedor_formulario">
                <Form class="formulario" @submit="onTodoBien">
                    <h4>Add Income</h4>
                    <div v-if="mensaje == 1" class="alert alert-success mensaje_alerta" role="alert" >
                        Data added successfully
                    </div>
                    <div class="mb-3">
                        Account:
                        <!-- Aquí sustituimos el input de número por un menú desplegable -->
                        <select name="fk_id_cuenta" class="form-control campo_input" v-model="ingreso.fk_id_cuenta">
                            <option v-for="cuenta in cuentas" :key="cuenta.id_cuenta" :value="cuenta.id_cuenta">
                                {{ cuenta.nombre }}
                            </option>
                        </select>
                        <ErrorMessage name="fk_id_cuenta" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Category:
                        <!-- Aquí sustituimos el input de número por un menú desplegable -->
                        <select name="fk_id_categoria_ingreso" class="form-control campo_input" v-model="ingreso.fk_id_categoria_ingreso">
                            <option v-for="categoria in categorias" :key="categoria.id_categoria_ingreso" :value="categoria.id_categoria_ingreso">
                                {{ categoria.nombre }}
                            </option>
                        </select>
                        <ErrorMessage name="fk_id_categoria_ingreso" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Description:
                        <Field name="descripcion" type="text" class="form-control campo_input" v-model="ingreso.descripcion"/>
                        <ErrorMessage name="descripcion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Amount:
                        <Field name="monto" type="number" class="form-control campo_input" v-model="ingreso.monto"/>
                        <ErrorMessage name="monto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Date:
                        <Field name="fecha_operacion" type="date" class="form-control campo_input" v-model="ingreso.fecha_operacion"/>
                        <ErrorMessage name="fecha_operacion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary boton_submit" type="submit">Add</button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import type { IngresoAgregar } from '../interfaces/ingreso-interfaces';
import { useIngreso } from '../controladores/useIngreso';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router';
import axios from 'axios';

const { agregarIngreso, mensaje } = useIngreso();
const routeRedirect = useRouter();


// ------------------------------
// Variables para las categorías
const cuentas = ref<{ id_cuenta: number; nombre: string }[]>([]);

// Obtener categorías desde el backend al montar el componente
const fetchCuenta = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/cuenta/');
        cuentas.value = response.data; // Guardar categorías en la variable reactiva
    } catch (error) {
        console.error('Error al obtener las cuentas:', error);
    }
};

// Llamamos a fetchCategorias al montar el componente
onMounted(fetchCuenta);



// ------------------------------
// Variables para las categorías
const categorias = ref<{ id_categoria_ingreso: number; nombre: string }[]>([]);

// Obtener categorías desde el backend al montar el componente
const fetchCategorias = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/categoria_ingreso/');
        categorias.value = response.data; // Guardar categorías en la variable reactiva
    } catch (error) {
        console.error('Error al obtener las categorías:', error);
    }
};

// Llamamos a fetchCategorias al montar el componente
onMounted(fetchCategorias);
// ------------------------------
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

// Variable para el formulario
let ingreso = ref<IngresoAgregar>({
    fk_id_cuenta: 0,
    fk_id_categoria_ingreso: 0, // Será modificado por el menú desplegable
    descripcion: '',
    monto: 0,
    fecha_operacion: new Date()
});

// Función para manejar el envío del formulario
const onTodoBien = async () => {
    await agregarIngreso(ingreso.value);
};
</script>



<style scoped>
    .errorValidacion {
        color: red;
        font-weight: bold;
    }
    @media screen and (max-width: 450px) {
        h4{
            text-align: center;
            color: #3f51b5;
            font-weight: bold;
            font-size: 2rem;
        }
        .contedenor_padre{
            margin: 0 auto;
            width: 100%;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .card{
            width: 100%;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .contenedor_formulario{
            margin: 0 auto;
            width: 100%;
        }
        .formulario{
            margin: 0 auto;
            margin-top: 30px;
            width: 90%;
            font-size: 1rem;
            color: black;
            font-weight: bold;
        }
        /* From Uiverse.io by Praashoo7 */ 
        .formulario{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        padding: 2.5em;
        border-radius: 25px;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
        }
        .formulario:hover {
        transform: translateX(-0.5em) translateY(-0.5em);
        border: 1px solid #171717;
        box-shadow: 10px 10px 0px #666666;
        }
        .campo_input{
        border-radius: 5px;
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        outline: none;
        padding: 0.7em;
        transition: .4s ease-in-out;
        }
        .campo_input:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        }
        .campo_input:focus {
        background: #ffffff;
        box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
        }
        .boton_submit{
            background-color: #3f51b5;
        }
        .formulario .boton_submit{
        margin-top: 2em;
        align-self: center;
        padding: 0.7em;
        padding-left: 1em;
        padding-right: 1em;
        border-radius: 10px;
        border: none;
        color: white;
        font-weight: bold;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
        }
        .formulario .boton_submit:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        transform: translateX(-0.5em) translateY(-0.5em);
        }
        .formulario .boton_submit:active {
        transition: .2s;
        transform: translateX(0em) translateY(0em);
        box-shadow: none;
        }
        .mensaje_alerta{
            text-align: center;
            font-weight: bold;
        }
    }


    @media screen and (max-width: 1149px) {
        h4{
            text-align: center;
            color: #3f51b5;
            font-weight: bold;
            font-size: 2rem;
        }
        .contedenor_padre{
            margin: 0 auto;
            width: 100%;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .card{
            width: 100%;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .contenedor_formulario{
            margin: 0 auto;
            width: 100%;
        }
        .formulario{
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 0 auto;
            margin-top: 30px;
            max-width: 500px;
            font-size: 1rem;
            color: black;
            font-weight: bold;
            background-color: white;
            padding: 2.5em;
            border-radius: 25px;
            transition: .4s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
        }
        .formulario:hover {
        transform: translateX(-0.5em) translateY(-0.5em);
        border: 1px solid #171717;
        box-shadow: 10px 10px 0px #666666;
        }
        .campo_input{
        border-radius: 5px;
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        outline: none;
        padding: 0.7em;
        transition: .4s ease-in-out;
        }
        .campo_input:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        }
        .campo_input:focus {
        background: #ffffff;
        box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
        }
        .boton_submit{
            background-color: #3f51b5;
        }
        .formulario .boton_submit{
        margin-top: 2em;
        align-self: center;
        padding: 0.7em;
        padding-left: 1em;
        padding-right: 1em;
        border-radius: 10px;
        border: none;
        color: white;
        font-weight: bold;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
        }
        .formulario .boton_submit:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        transform: translateX(-0.5em) translateY(-0.5em);
        }
        .formulario .boton_submit:active {
        transition: .2s;
        transform: translateX(0em) translateY(0em);
        box-shadow: none;
        }
        .mensaje_alerta{
            text-align: center;
            font-weight: bold;
        }
    }
    @media screen and (min-width: 1150px) {
        h4{
            text-align: center;
            color: #3f51b5;
            font-weight: bold;
            font-size: 2rem;
        }
        .contedenor_padre{
            margin-left: 120px;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .card{
            width: 100%;
            background-color: transparent;
            border: 0px solid transparent;
        }
        .contenedor_formulario{
            margin: 0 auto;
            width: 100%;
        }
        .formulario{
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 0 auto;
            margin-top: 30px;
            max-width: 600px;
            font-size: 1rem;
            color: black;
            font-weight: bold;
            background-color: white;
            padding: 2.5em;
            border-radius: 25px;
            transition: .4s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
        }
        .formulario:hover {
        transform: translateX(-0.5em) translateY(-0.5em);
        border: 1px solid #171717;
        box-shadow: 10px 10px 0px #666666;
        }
        .campo_input{
        border-radius: 5px;
        border: 1px solid whitesmoke;
        background-color: whitesmoke;
        outline: none;
        padding: 0.7em;
        transition: .4s ease-in-out;
        }
        .campo_input:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        }
        .campo_input:focus {
        background: #ffffff;
        box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
        }
        .boton_submit{
            background-color: #3f51b5;
        }
        .formulario .boton_submit{
        margin-top: 2em;
        align-self: center;
        padding: 0.7em;
        padding-left: 1em;
        padding-right: 1em;
        border-radius: 10px;
        border: none;
        color: white;
        font-weight: bold;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
        }
        .formulario .boton_submit:hover {
        box-shadow: 6px 6px 0px #969696,
                    -3px -3px 10px #ffffff;
        transform: translateX(-0.5em) translateY(-0.5em);
        }
        .formulario .boton_submit:active {
        transition: .2s;
        transform: translateX(0em) translateY(0em);
        box-shadow: none;
        }
        .mensaje_alerta{
            text-align: center;
            font-weight: bold;
        }
    }
</style>
