<template>
    <h3>Investment Type</h3>
    <section class="contenedor_section">
        <div class="contenedor_botones">
            <!-- Botón para agregar un nuevo registro -->
            <RouterLink :to="{ path: '/tipo_inversion/agregar' }">
                <button class="btn btn-sm boton_accion">
                    Add <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
            &nbsp;
            <!-- Botón para exportar a Excel -->
            <button class="btn btn-sm boton_accion" v-if="tipo_inversiones.length > 0">
                <download-excel :data="tipo_inversiones" type="xlsx" name="tipo_inversion.xlsx">
                    Excel <i class="fa fa-file-excel-o"></i>
                </download-excel>
            </button>
        </div>
    </section>

    <section class="contenedor_section_tabla">
        <!-- Si no hay tipos de inversión, mostrar un mensaje -->
        <div v-if="tipo_inversiones.length == 0" class="no-registros">
            No investment type registered
        </div>

        <!-- Mostrar los tipos de inversión en bloques -->
        <div v-else v-for="(tipo_inversion, index) in tipo_inversiones" :key="index" class="bloque-transaccion">
            <div class="bloque-detalle" id="tablaTipoInversion">
                <!--<p><strong>ID:</strong> {{ tipo_inversion.id_tipo_inversion }}</p>-->
                <p><strong>Type: </strong> {{ tipo_inversion.nombre }}</p>
            </div>
            <div class="bloque-acciones">
                <!-- Botón para editar -->
                <button type="button" class="boton_accion_botonmodificar">
                    <RouterLink :to="{ path: '/tipo_inversion/' + tipo_inversion.id_tipo_inversion + '/editar' }"><i class="fa fa-pencil"></i></RouterLink>
                </button>
                <!-- Botón para borrar -->
                <button type="button" class="boton_accion_botonborrar">
                    <RouterLink :to="{ path: '/tipo_inversion/' + tipo_inversion.id_tipo_inversion + '/borrar' }"><i class="fa fa-trash"></i></RouterLink>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    // Importar para imprimir página en PDF
    import html2PDF from 'jspdf-html2canvas';
    import { onMounted } from 'vue';
    import { useTipo_inversion } from '../controladores/useTipo_inversion';
    const { traeTipo_inversion, tipo_inversiones } = useTipo_inversion();

    // Cuando la página es visible y está cargada
    onMounted(async () => {
        await traeTipo_inversion();
    });

    const tipoInversionPDF = async () => {
        const pagina = document.getElementById('tablaTipoInversion');
        if (!pagina) {
            console.error("Elemento 'tablaTipoInversion' no encontrado.");
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
            output: './tipo_inversion.pdf',
        });
    };
</script>



<style scoped>

@media screen and (max-width: 450px) {
    
    .contenedor_section {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
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
        padding: 10px;
        justify-items: stretch;
        align-items: stretch;
        margin-left: 0px;
    }
    .bloque-transaccion {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: 100%; /* Llenar toda la altura del contenedor */
        width: 90%;
        padding: 1rem;
        box-sizing: border-box;
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

    .boton_accion_botonmodificar{
        box-sizing: border-box;
        max-width: 50px;
        max-height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        background-color: #74c69d;
        padding: none;
        border-radius: 5px;
        transition: all ease 0.1s;
        box-shadow: 0px 5px 0px 0px #40916c;
    }
    .boton_accion_botonmodificar:active {
        transform: translateY(5px);
        box-shadow: 0px 0px 0px 0px #40916c;
    }
    .fa-pencil{
        width: 100%;
        height: 100%;
    }
    .ri-delete-bin-fill{
        width: 100%;
        height: 100%;
    }
    .nav-link{
        color: #3f51b5;
        font-weight: bold;
    }
    .boton_accion_botonborrar{
        box-sizing: border-box;
        max-width: 50px;
        max-height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        background-color: #ff97b7;
        padding: none;
        border-radius: 5px;
        transition: all ease 0.1s;
        box-shadow: 0px 5px 0px 0px #ff5d8f;
    }
    .boton_accion_botonborrar:active {
        transform: translateY(5px);
        box-shadow: 0px 0px 0px 0px #ff5d8f;
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
        row-gap: 15px;
        column-gap: 1px;
        padding: 10px;
        justify-items: stretch;
        align-items: stretch;
    }
    h3 {
        box-sizing: border-box;
        text-align: center;
        color: #3f51b5;
        font-weight: bold;
        font-size: 2rem;
    }
    .bloque-transaccion {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: 100%; /* Llenar toda la altura del contenedor */
        width: 90%;
        padding: 1rem;
        box-sizing: border-box;
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

    .boton_accion_botonmodificar{
        box-sizing: border-box;
        max-width: 50px;
        max-height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        background-color: #74c69d;
        padding: none;
        border-radius: 5px;
        transition: all ease 0.1s;
        box-shadow: 0px 5px 0px 0px #40916c;
    }
    .boton_accion_botonmodificar:active {
        transform: translateY(5px);
        box-shadow: 0px 0px 0px 0px #40916c;
    }
    .fa-pencil{
        width: 100%;
        height: 100%;
    }
    .ri-delete-bin-fill{
        width: 100%;
        height: 100%;
    }
    .nav-link{
        color: #3f51b5;
        font-weight: bold;
    }
    .boton_accion_botonborrar{
        box-sizing: border-box;
        max-width: 50px;
        max-height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        background-color: #ff97b7;
        padding: none;
        border-radius: 5px;
        transition: all ease 0.1s;
        box-shadow: 0px 5px 0px 0px #ff5d8f;
    }
    .boton_accion_botonborrar:active {
        transform: translateY(5px);
        box-shadow: 0px 0px 0px 0px #ff5d8f;
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
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Ajusta el número de columnas */
        row-gap: 15px;
        column-gap: 20px;
        padding: 10px;
        justify-items: stretch;
        align-items: stretch;
        margin-left: 120px;
    }
    h3 {
        box-sizing: border-box;
        text-align: center;
        color: #3f51b5;
        font-weight: bold;
        font-size: 2rem;
    }
    .bloque-transaccion {
        display: flex;
        flex-direction: column;
        height: 100%; /* Llenar toda la altura del contenedor */
        padding: 1rem;
        box-sizing: border-box;
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

    .boton_accion_botonmodificar{
        box-sizing: border-box;
        max-width: 50px;
        max-height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        background-color: #74c69d;
        padding: none;
        border-radius: 5px;
        transition: all ease 0.1s;
        box-shadow: 0px 5px 0px 0px #40916c;
    }
    .boton_accion_botonmodificar:active {
        transform: translateY(5px);
        box-shadow: 0px 0px 0px 0px #40916c;
    }
    .fa-pencil{
        width: 100%;
        height: 100%;
    }
    .ri-delete-bin-fill{
        width: 100%;
        height: 100%;
    }
    .nav-link{
        color: #3f51b5;
        font-weight: bold;
    }
    .boton_accion_botonborrar{
        box-sizing: border-box;
        max-width: 50px;
        max-height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        background-color: #ff97b7;
        padding: none;
        border-radius: 5px;
        transition: all ease 0.1s;
        box-shadow: 0px 5px 0px 0px #ff5d8f;
    }
    .boton_accion_botonborrar:active {
        transform: translateY(5px);
        box-shadow: 0px 0px 0px 0px #ff5d8f;
    }
}
</style>