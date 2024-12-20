<template>
    <div class="contedenor_padre">
        <div class="card">
            <div class="contenedor_formulario">
                <Form class="formulario" @submit="onTodoBien">
                    <h4>Add Spent</h4>
                    <div v-if="mensaje == 1" class="alert alert-success mensaje_alerta" role="alert" >
                        Data added successfully
                    </div>
                    <div class="mb-3">
                        Account:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_cuenta" type="number" class="form-control campo_input" v-model="gasto.fk_id_cuenta"/>
                        <ErrorMessage name="fk_id_cuenta" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Spent Category:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_categoria_gasto" type="number" class="form-control campo_input" v-model="gasto.fk_id_categoria_gasto"/>
                        <ErrorMessage name="fk_id_categoria_gasto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Spent Type:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_tipo_gasto" type="number" class="form-control campo_input" v-model="gasto.fk_id_tipo_gasto"/>
                        <ErrorMessage name="fk_id_tipo_gasto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Store:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_lugar_gasto" type="number" class="form-control campo_input" v-model="gasto.fk_id_lugar_gasto"/>
                        <ErrorMessage name="fk_id_lugar_gasto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Description:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="descripcion" type="text" class="form-control campo_input" v-model="gasto.descripcion"/>
                        <ErrorMessage name="descripcion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Amount:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="monto" type="number" class="form-control campo_input" v-model="gasto.monto"/>
                        <ErrorMessage name="monto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Operation Date:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fecha_operacion" type="date" class="form-control campo_input" v-model="gasto.fecha_operacion"/>
                        <ErrorMessage name="fecha_operacion" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        Payment Date:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fecha_pago" type="date" class="form-control campo_input" v-model="gasto.fecha_pago"/>
                        <ErrorMessage name="fecha_pago" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        User:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <Field name="fk_id_hecho_gasto" type="number" class="form-control campo_input" v-model="gasto.fk_id_hecho_gasto"/>
                        <ErrorMessage name="fk_id_hecho_gasto" class="errorValidacion"/>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primar boton_submit" type="submit">Add</button>
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
