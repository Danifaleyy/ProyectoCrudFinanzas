<template>
    <h3>CATEGORIA DE INGRESO</h3>
    <section class="contenedorinicio">
        <div class="botones">
            <RouterLink :to="{ path: '/categoria_ingreso/agregar' }">
                <button class="btn btn-sm btn-outline-primary">
                    Agregar <i class="fa fa-plus"></i>
                </button>
            </RouterLink>
            &nbsp;
            <!--Boton para imprimir-->
            <button @click.prevent="categoria_ingresoPDF" class="btn btn-sm btn-outline-primary" v-if="categoria_ingresos.length > 0">
                Imprimir <i class="fa fa-print"></i>
            </button>
            &nbsp;
            <!--Agregamos un boton nuevo para Excel-->
            <button class="btn btn-sm btn-outline-primary" v-if="categoria_ingresos.length > 0">
                <download-excel :data="categoria_ingresos" type="xlsx" name="categoria_ingresos.xlsx">
                    Excel <i class="fa fa-file-excel-o"></i>
                </download-excel>
            </button>
        </div>
    </section>
    <section class="ContenedorTabla">
        <table class="desingtable" id="tablaCategoria_ingreso">
            <thead class="thead-dark">
                <tr>
                    <th class="icon-arrow">ID</th>
                    <th class="icon-arrow">Nombre</th>
                    <th class="icon-arrow">Botones de Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="categoria_ingresos.length == 0">
                    <td colspan="3">Sin categoria_ingreso registrados</td>
                </tr>
                <tr v-else v-for="(categoria_ingreso, index) in categoria_ingresos" :key="index">
                    <td>{{ categoria_ingreso.id_categoria_ingreso }}</td>
                    <td>{{ categoria_ingreso.nombre }}</td>
                    <!--Botones para modificar y eliminar-->
                    <td class="centrado">
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-sm btn-outline-primary botonmodificar">
                                <!--Boton modificar-->
                                <RouterLink class="nav-link item" :to = "{path: '/categoria_ingreso/'+ categoria_ingreso.id_categoria_ingreso + '/editar'}"><i class="fa fa-pencil"></i></RouterLink>
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-danger botonborrar">
                                <!--Boton eliminar-->
                                <RouterLink class="nav-link item" :to = "{path: '/categoria_ingreso/'+ categoria_ingreso.id_categoria_ingreso + '/borrar'}"><i class="fa fa-trash"></i></RouterLink>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
        
</template>


<script setup lang="ts">
    // Importar para imprimir página en PDF
    import html2PDF from 'jspdf-html2canvas';
    import { onMounted } from 'vue';
    import { useCategoria_ingreso } from '../controladores/useCategoria_ingreso';

    const { traeCategoria_ingreso, categoria_ingresos } = useCategoria_ingreso();

    // Cuando la página es visible y está cargada
    onMounted(async () => {
        await traeCategoria_ingreso();  // Llamar a la función que obtiene los datos
    });

    const categoria_ingresoPDF = async () => {
        const pagina = document.getElementById('tablaCategoria_ingreso'); // Asegúrate que el ID sea correcto
        if (!pagina) {
            console.error("Elemento 'tablaCategoria_ingreso' no encontrado.");
            return;
        }

        await html2PDF(pagina, {
            jsPDF: {
                format: 'a4',
            },
            imageType: 'image/jpeg',
            output: 'categoria_ingreso.pdf',
        });
    };
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