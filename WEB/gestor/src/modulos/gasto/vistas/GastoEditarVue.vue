<template>
    <div class="contedenor_padre" v-if="gastos[0]">
        <div class="card">
            <div class="contenedor_formulario">
                <div class="formulario">
                    <h4>Update Spent</h4>
                    <div v-if="mensaje == 1" class="alert alert-success mensaje_alerta" role="alert" >
                        Data updated successfully
                    </div>
                    <div class="mb-3">
                        ID:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <input type="number" class="form-control" v-model="gastos[0].id_gasto" disabled>
                    </div>
                    <div class="mb-3">
                        Account:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <input type="number" class="form-control" v-model="gastos[0].fk_id_cuenta">
                    </div>
                    <div class="mb-3">
                        Spent Category:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <input type="number" class="form-control" v-model="gastos[0].fk_id_categoria_gasto">
                    </div>
                    <div class="mb-3">
                        Store:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <input type="number" class="form-control" v-model="gastos[0].fk_id_lugar_gasto">
                    </div>
                    <div class="mb-3">
                        Description:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <input type="text" class="form-control" v-model="gastos[0].descripcion">
                    </div>
                    <div class="mb-3">
                        Amount:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <input type="number" class="form-control" v-model="gastos[0].monto">
                    </div>
                    <div class="mb-3">
                        Operation Date:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <input type="date" class="form-control" v-model="gastos[0].fecha_operacion">
                    </div>
                    <div class="mb-3">
                        Payment Date:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <input type="date" class="form-control" v-model="gastos[0].fecha_pago">
                    </div>
                    <div class="mb-3">
                        User:
                        <!--v-model=: Es para conectarlo, te permite usar ts en HTML-->
                        <input type="number" class="form-control" v-model="gastos[0].fk_id_hecho_gasto">
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary boton_submit" @click="actualizarGasto(gastos[0])">Actualizar</button>
                    </div>
                </div>
            </div>

            <div class="card-body">
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useGasto } from '../controladores/useGasto';
const { traeGastoId, actualizarGasto, mensaje, gastos } = useGasto()
let idGasto = 0
const route = useRoute()

//-----------------Redirigiendo al usuario a la pagina de inicio
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
//-----------------
const routeRedirect = useRouter();
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

onMounted(async() => {
    idGasto = Number(route.params.id_gasto);
    await traeGastoId(Number(idGasto))
})
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
            background-color: #C51E3A;
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
</style>


