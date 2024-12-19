<template>
    <h3>Income</h3>
    <section class="contenedorinicio">
        <div class="contenedor_botones">
            <!--Boton para agregar un nuevo registro-->
            <RouterLink :to = "{path: '/ingreso/agregar'}">
                <button class="btn btn-sm boton_accion">
                    Add <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
            &nbsp;
            <!--Boton para imprimir-->
            <!--<button @click.prevent="ingresoPDF" class="btn btn-sm btn-outline-primary" v-if="ingresos.length > 0">
                Imprimir <i class="fa fa-print"></i>
            </button>
            &nbsp;-->
            <!--Agregamos un boton nuevo para Excel-->
            <button class="btn btn-sm boton_accion" v-if="ingresos.length > 0">
                <download-excel :data="ingresos" type="xlsx" name="ingreso.xlsx">
                    Excel <i class="fa fa-file-excel-o"></i>
                </download-excel>
            </button>
        </div>
    </section>

    <section class="contenedor_section_tabla">
        <!-- Si no hay transacciones, mostrar un mensaje -->
        <div v-if="ingresos.length == 0" class="no-registros">
            Sin ingreso registrado
        </div>

        <!-- Mostrar las transacciones como bloques -->
        <div v-else v-for="(ingreso, index) in ingresos" :key="index" class="bloque-transaccion">
            <div class="bloque-detalle" id="tablaIngreso">
                <!--<p><strong>ID:</strong> {{ ingreso.id_ingreso }}</p>-->
                <p><strong>Count: </strong> {{ ingreso.fk_id_cuenta }}</p>
                <p><strong>Income Category: </strong> {{ ingreso.fk_id_categoria_ingreso }}</p>
                <p><strong>Description: </strong> {{ ingreso.descripcion }}</p>
                <p><strong>Amount: </strong> {{ ingreso.monto }}</p>
                <p><strong>Date: </strong> {{ dayjs(ingreso.fecha_operacion).format('DD-MM-YYYY') }}</p>
            </div>

            <div class="bloque-acciones">
                    <button type="button" class="btn btn-sm btn-outline-primary botonmodificar">
                        <!--Boton modificar-->
                        <RouterLink class="nav-link item" :to = "{path: '/ingreso/'+ ingreso.id_ingreso + '/editar'}"><i class="fa fa-pencil"></i></RouterLink>
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-danger botonborrar">
                        <!--Boton eliminar-->
                        <RouterLink class="nav-link item" :to = "{path: '/ingreso/'+ ingreso.id_ingreso + '/borrar'}"><i class="fa fa-trash"></i></RouterLink>
                    </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    //Importar para imprimir página en PDF
    import html2PDF from 'jspdf-html2canvas';
    import { onMounted } from 'vue'
    import { useIngreso } from '../controladores/useIngreso'
    import dayjs from 'dayjs'; // Importar dayjs
    const { traeIngreso, ingresos} = useIngreso();
    //Cuando la página es visible y está cargada
    onMounted(async () => {
        await traeIngreso();
    });

    const ingresoPDF = async () => {
        const pagina = document.getElementById('tablaIngreso');
        if (!pagina) {
            console.error("Elemento 'tablaIngreso' no encontrado.");
            return;
        }

        await html2PDF(pagina, {
            jsPDF: {
                // Tamaño de hoja
                format: 'a4',
            },
            // Definimos de qué tipo son las imágenes
            imageType: 'image/jpeg',
            // Nombre del archivo de salida
            output: './ingreso.pdf',
        });
    };

    //load <----- Carga en memoria
    //mounted <----- Cargada y se ve en la pantalla
</script>


<style scoped>
    .btn-outline-primary {
        box-sizing: border-box;
        border: 1px solid #3f51b5;
        color: #171717;
    }

    .btn-outline-danger {
        box-sizing: border-box;
        border: 1px solid #e57373;
        color: #171717;
    }


@media screen and (max-width: 450px) {
    .contenedor_section {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        gap: 15px;
    }
    .contenedor_botones{
        box-sizing: border-box;
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .contenedor_section_tabla{
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;
    }
    .bloque-transaccion {
        box-sizing: border-box;
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 0px;
        padding: 1rem;
        margin: 0px;
        background-color: white;
        border-radius: 25px;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
    }
    .bloque-transaccion:hover {
        box-sizing: border-box;
        transform: translateX(-0.5em) translateY(-0.5em);
        border: 1px solid #171717;
        box-shadow: 10px 10px 0px #666666;
    }

    h3 {
        box-sizing: border-box;
        text-align: center;
        color: #3f51b5;
        font-weight: bold;
        font-size: 2rem;
    }
    .bloque-detalle {
        box-sizing: border-box;
        font-size: 0.9rem;
        font-weight: bold;
        color: #333;
    }
    .bloque-acciones{
        box-sizing: border-box;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }
    .bloque-acciones button {
        box-sizing: border-box;
        font-size: 0.8rem;
        padding: 6px 12px;
        
    }
    /* From Uiverse.io by krlozCJ */ 
    .boton_accion {
        box-sizing: border-box;
  border: none;
  outline: none;
  background-color: #3f51b5;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px #024192;
}

.boton_accion:active {
  transform: translateY(5px);
  box-shadow: 0px 0px 0px 0px #024192;
}
}


@media screen and (max-width: 1149px) {
    .contenedor_section {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        gap: 15px;
    }
    .contenedor_botones{
        box-sizing: border-box;
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .contenedor_section_tabla {
        box-sizing: border-box;
        display: grid; /* Cambiamos de flexbox a grid */
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Ajusta el número de columnas */
        gap: 15px; /* Espacio entre tarjetas */
        width: 100%;
        padding: 10px;
        justify-items: center;
        align-items: start;
    }
    h3 {
        box-sizing: border-box;
        text-align: center;
        color: #3f51b5;
        font-weight: bold;
        font-size: 2rem;
    }
    .bloque-transaccion {
        box-sizing: border-box;
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 0px;
        padding: 1rem;
        margin: 0px;
        background-color: white;
        border-radius: 25px;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
    }
    .bloque-transaccion:hover {
        transform: translateX(-0.5em) translateY(-0.5em);
        border: 1px solid #171717;
        box-shadow: 10px 10px 0px #666666;
    }
    .bloque-detalle {
        box-sizing: border-box;
        font-size: 1.0rem;
        font-weight: bold;
        color: #333;
    }
    .bloque-acciones {
        box-sizing: border-box;
        display: flex;
        gap: 8px;
        justify-content: end;
    }
    .bloque-acciones button {
        font-size: 0.8rem;
        padding: 12px 18px;
    }
    /* From Uiverse.io by krlozCJ */ 
    .boton_accion {
        box-sizing: border-box;
        border: none;
        outline: none;
        background-color: #3f51b5;
        padding: 10px 20px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        border-radius: 5px;
        transition: all ease 0.1s;
        box-shadow: 0px 5px 0px 0px #024192;
    }
    .boton_accion:active {
    transform: translateY(5px);
    box-shadow: 0px 0px 0px 0px #024192;
    }
}

@media screen and (min-width: 1150px) {
    .contenedor_section {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        gap: 15px;
    }
    .contenedor_botones{
        box-sizing: border-box;
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .contenedor_section_tabla {
        box-sizing: border-box;
        display: grid; /* Cambiamos de flexbox a grid */
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Ajusta el número de columnas */
        gap: 15px; /* Espacio entre tarjetas */
        padding: 10px;
        justify-items: center;
        align-items: start;
        margin-left: 100px;
    }
    h3 {
        box-sizing: border-box;
        text-align: center;
        color: #3f51b5;
        font-weight: bold;
        font-size: 2rem;
    }
    .bloque-transaccion {
        box-sizing: border-box;
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 0px;
        padding: 1rem;
        margin: 0px;
        background-color: white;
        border-radius: 25px;
        transition: .4s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
    }
    .bloque-transaccion:hover {
        transform: translateX(-0.5em) translateY(-0.5em);
        border: 1px solid #171717;
        box-shadow: 10px 10px 0px #666666;
    }
    .bloque-detalle {
        box-sizing: border-box;
        font-size: 1.1rem;
        font-weight: bold;
        color: #333;
        display: grid; /* Cambiamos de flexbox a grid */
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Ajusta el número de columnas */
    }

    .bloque-acciones {
        box-sizing: border-box;
        display: flex;
        gap: 8px;
        justify-content: end;
    }

    .bloque-acciones button {
        font-size: 0.8rem;
        padding: 12px 18px;
    }
    /* From Uiverse.io by krlozCJ */ 
    .boton_accion {
        box-sizing: border-box;
        border: none;
        outline: none;
        background-color: #3f51b5;
        padding: 10px 20px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        border-radius: 5px;
        transition: all ease 0.1s;
        box-shadow: 0px 5px 0px 0px #024192;
}

    .boton_accion:active {
        transform: translateY(5px);
        box-shadow: 0px 0px 0px 0px #024192;
    }
}

</style>