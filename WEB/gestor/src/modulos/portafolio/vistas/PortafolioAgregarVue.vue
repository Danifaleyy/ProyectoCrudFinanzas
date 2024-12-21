<template>
    <div class="contedenor_padre">
        <div class="card">
            <div class="contenedor_formulario">
                <Form class="formulario" @submit="onTodoBien">
                    <h4>Add Investment</h4>
                    <div v-if="mensaje == 1" class="alert alert-success mensaje_alerta" role="alert" >
                        Data added successfully
                    </div>
                    <div class="mb-3">
                        Instrument:
                        <!-- Aquí sustituimos el input de número por un menú desplegable -->
                        <select name="fk_id_instrumento" class="form-control campo_input" v-model="portafolio.fk_id_instrumento">
                            <option v-for="instrumento in instrumentos" :key="instrumento.id_instrumento" :value="instrumento.id_instrumento">
                                {{ instrumento.nombre }}
                            </option>
                        </select>
                        <ErrorMessage name="fk_id_instrumento" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Investment Type:
                        <!-- Aquí sustituimos el input de número por un menú desplegable -->
                        <select name="fk_id_tipo_inversion" class="form-control campo_input" v-model="portafolio.fk_id_tipo_inversion">
                            <option v-for="tipo_inversion in tipo_inversiones" :key="tipo_inversion.id_tipo_inversion" :value="tipo_inversion.id_tipo_inversion">
                                {{ tipo_inversion.nombre }}
                            </option>
                        </select>
                        <ErrorMessage name="fk_id_tipo_inversion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Description:
                        <Field name="descripcion" type="text" class="form-control campo_input" v-model="portafolio.descripcion"/>
                        <ErrorMessage name="descripcion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Amount:
                        <Field name="monto" type="number" class="form-control campo_input" v-model="portafolio.monto"/>
                        <ErrorMessage name="monto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Rate:
                        <Field name="tasa" type="number" class="form-control campo_input" v-model="portafolio.tasa"/>
                        <ErrorMessage name="tasa" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Start Date:
                        <Field name="fecha_inicio" type="date" class="form-control campo_input" v-model="portafolio.fecha_inicio"/>
                        <ErrorMessage name="fecha_inicio" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        End Date:
                        <Field name="fecha_final" type="date" class="form-control campo_input" v-model="portafolio.fecha_final"/>
                        <ErrorMessage name="fecha_final" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Document:
                        <Field name="comprobante" type="text" class="form-control campo_input" v-model="portafolio.comprobante"/>
                        <ErrorMessage name="comprobante" class="errorValidacion"/>
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
import type { PortafolioAgregar } from '../interfaces/portafolio-interfaces';
import { usePortafolio } from '../controladores/usePortafolio';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { useRouter } from 'vue-router';
import axios from 'axios';

const { agregarPortafolio, mensaje } = usePortafolio();
const routeRedirect = useRouter();


// ------------------------------
// Variables para las categorías
const instrumentos = ref<{ id_instrumento: number; nombre: string }[]>([]);

// Obtener categorías desde el backend al montar el componente
const fetchInstrumento = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/instrumento/');
        instrumentos.value = response.data; // Guardar categorías en la variable reactiva
    } catch (error) {
        console.error('Error al obtener las instrumentos:', error);
    }
};

// Llamamos a fetchCategorias al montar el componente
onMounted(fetchInstrumento);



// ------------------------------
// Variables para las categorías
const tipo_inversiones = ref<{ id_tipo_inversion: number; nombre: string }[]>([]);

// Obtener categorías desde el backend al montar el componente
const fetchTipo_inversion = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/tipo_inversion/');
        tipo_inversiones.value = response.data; // Guardar categorías en la variable reactiva
    } catch (error) {
        console.error('Error al obtener las tipo_inversion:', error);
    }
};

// Llamamos a fetchCategorias al montar el componente
onMounted(fetchTipo_inversion);
// ------------------------------
// Observa cambios en `mensaje` para mostrar el mensaje y luego redirigir
watch(
    () => mensaje.value,
    (newValue) => {
        if (newValue === 1) {
            setTimeout(() => {
                routeRedirect.push('/portafolio'); // Redirige después de 1 segundo
            }, 1000); // Espera 1 segundo antes de redirigir
        }
    }
);

// Variable para el formulario
let portafolio = ref<PortafolioAgregar>({
    fk_id_instrumento: 0,
    fk_id_tipo_inversion: 0, // Será modificado por el menú desplegable
    descripcion: '',
    monto: 0,
    tasa: 0,
    fecha_inicio: new Date(),
    fecha_final: new Date(),
    comprobante: ''
});

// Función para manejar el envío del formulario
const onTodoBien = async () => {
    await agregarPortafolio(portafolio.value);
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
