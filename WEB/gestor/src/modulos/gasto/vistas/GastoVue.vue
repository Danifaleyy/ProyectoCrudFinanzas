<template>
    <h3>GASTOS</h3>
    <section class="contenedorinicio">
        <div class="botones">
            <!--Boton para agregar un nuevo registro-->
            <RouterLink :to = "{path: '/gasto/agregar'}">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
            &nbsp;
            <!--Boton para imprimir-->
            <button @click.prevent="gastoPDF" class="btn btn-sm btn-outline-primary" v-if="gastos.length > 0">
                Imprimir <i class="fa fa-print"></i>
            </button>
            &nbsp;
            <!--Agregamos un boton nuevo para Excel-->
            <button class="btn btn-sm btn-outline-primary" v-if="gastos.length > 0">
                <download-excel :data="gastos" type="xlsx" name="gasto.xlsx">
                    Excel <i class="fa fa-file-excel-o"></i>
                </download-excel>
            </button>
        </div>
    </section>
    <section class="ContenedorTabla">
        <table class="desingtable" id="tablaGasto">
        <thead class="thead-dark">
            <tr>
                <th class="icon-arrow">ID</th>
                <th class="icon-arrow">ID Cuenta</th>
                <th class="icon-arrow">ID Categoria Gasto</th>
                <th class="icon-arrow">ID Tipo Gasto</th>
                <th class="icon-arrow">ID Lugar Gasto</th>
                <th class="icon-arrow">Descripcion</th>
                <th class="icon-arrow">Monto</th>
                <th class="icon-arrow">Fecha De Operacion</th>
                <th class="icon-arrow">Fecha De Pago</th>
                <th class="icon-arrow">ID Hecho Gasto</th>
                <th class="icon-arrow">Botones de Accion</th>
            </tr>
        </thead>
        <!--Debemos traer los datos de la base de datos, en api, se instala: npm install axios -save-->
        <tbody>
            <!--Cuando no trae datos-->
            <tr v-if="gastos.length == 0">
                <td class="centrado" colspan="11">Sin gasto registrado</td>
            </tr>
            <!--Ciclo for para que muestre tantos como sean-->
            <tr v-else v-for="(gasto,index) in gastos" :key="index">
                <td>{{ gasto.id_gasto }}</td>
                <td>{{ gasto.fk_id_cuenta}}</td>
                <td>{{ gasto.fk_id_categoria_gasto }}</td>
                <td>{{ gasto.fk_id_tipo_gasto }}</td>
                <td>{{ gasto.fk_id_lugar_gasto }}</td>
                <td>{{ gasto.descripcion }}</td>
                <td>{{ gasto.monto }}</td>
                <td>{{ dayjs(gasto.fecha_operacion).format('DD-MM-YYYY') }}</td> <!-- Formato de fecha -->
                <td>{{ dayjs(gasto.fecha_pago).format('DD-MM-YYYY') }}</td> <!-- Formato de fecha -->
                <td>{{ gasto.fk_id_hecho_gasto }}</td>
                <!--Botones para modificar y eliminar-->
                <td class="centrado">
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary botonmodificar">
                            <!--Boton modificar-->
                            <RouterLink class="nav-link item" :to = "{path: '/gasto/'+ gasto.id_gasto + '/editar'}"><i class="fa fa-pencil"></i></RouterLink>
                        </button>
                        <button type="button" class="btn btn-sm btn-outline-danger botonborrar">
                            <!--Boton eliminar-->
                            <RouterLink class="nav-link item" :to = "{path: '/gasto/'+ gasto.id_gasto + '/borrar'}"><i class="fa fa-trash"></i></RouterLink>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </section>
    
</template>

<script setup lang="ts">
    //Importar para imprimir página en PDF
    import html2PDF from 'jspdf-html2canvas';
    import { onMounted } from 'vue'
    import { useGasto } from '../controladores/useGasto'
    import dayjs from 'dayjs'; // Importar dayjs
    const { traeGasto, gastos} = useGasto();
    //Cuando la página es visible y está cargada
    onMounted(async () => {
        await traeGasto();
    });

    const gastoPDF = async () => {
        const pagina = document.getElementById('tablaGasto');
        if (!pagina) {
            console.error("Elemento 'tablaGasto' no encontrado.");
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
            output: './gasto.pdf',
        });
    };

    //load <----- Carga en memoria
    //mounted <----- Cargada y se ve en la pantalla
</script>

<style scoped>
.contenedorinicio {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  /* Alinea verticalmente los elementos al centro */
    margin-top: 0px;
    gap: 20px;
}
.titulo {
    text-align: left;
}
/* General */
h3 {
    color: #303f9f;
    font-weight: bold;
    font-size: 2.5rem; /* Ajusta el tamaño según lo que necesites */
    padding: 0;
    margin: 0;
    margin-top: 20px;
    text-align: center;
    margin-bottom: 10px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Sombra sutil */
    font-family: 'Roboto', sans-serif; /* O una fuente de tu preferencia */
}


.botones {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin: 0;
    padding: 0;
}

/* Diseño de la tabla */
.ContenedorTabla {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    margin: 0;
}

.desingtable {
    width: 100%;
    margin: 20px;
    border-collapse: collapse;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

/* Estilo de las celdas de encabezado */
th {
    background-color: #3f51b5;
    color: whitesmoke;
    padding: 8px;  /* Reducido */
    text-align: center;
    font-size: 0.9rem; /* Reducido */
    border: 1px solid #ddd;
}

/* Estilo de las filas */
td {
    padding: 8px;  /* Reducido */
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ddd;
    font-size: 0.9rem;  /* Reducido */
}

/* Filas pares e impares */
.desingtable tr:nth-child(even) {
    background-color: #f1f8ff;
}

.desingtable tr:nth-child(odd) {
    background-color: #e3f2fd;
}

/* Efecto hover en las filas */
.desingtable tr:hover {
    background-color: #bbdefb; /* Azul claro cuando el cursor pasa */
}

/* Botones dentro de la tabla */
.btn-group {
    display: flex;
    justify-content: center;
    gap: 10px;
}

/* Estilo de los botones */
button {
    padding: 8px 12px;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s;
}

button:hover {
    background-color: #5c6bc0; /* Azul oscuro cuando el botón está en hover */
    transform: scale(1.05); /* Efecto de agrandar el botón */
}
.botonborrar:hover {
    background-color: #e57373; /* Azul oscuro cuando el botón está en hover */
}

.btn-outline-primary {
    border: 1px solid #3f51b5;
    color: #3f51b5;
    background-color: transparent;
}

.btn-outline-danger {
    border: 1px solid #e57373;
    color: #e57373;
    background-color: transparent;
}

button i {
    margin-right: 8px;
}

/* Botones de acción */
.botones .btn {
    background-color: #3f51b5;
    color: white;
}

.botones .btn:hover {
    background-color: #03045e;
}

/* Estilo para los iconos */
.icon-arrow {
    background-color: #3f51b5;
    color: whitesmoke;
    padding: 8px;
    border-radius: 5px;
}

/* Mensaje cuando no hay registros */
.centrado {
    text-align: center;
    vertical-align: middle;
    font-size: 1rem;  /* Reducido */
    color: #555;
    padding: 10px 0;
}
td{
        font-weight: bold;
        font-size: 1rem;
    }
</style>