import express from 'express';
import cors from 'cors';
//Importar rutas
import cuentaRutas from './routes/cuentaRutas';
import categoria_ingresoRutas from './routes/categoria_ingresoRutas';
import categoria_gastoRutas from './routes/categoria_gastoRutas';
import tipo_gastoRutas from './routes/tipo_gastoRutas';
import lugar_gastoRutas from './routes/lugar_gastoRutas';
import hecho_gastoRutas from './routes/hecho_gastoRutas';
import gastoRutas from './routes/gastoRutas';
import ingresoRutas from './routes/ingresoRutas';
import transaccionRutas from './routes/transaccionRutas';

// Creamos la aplicación a través de Express
const app = express();

// Configurar middleware para que Express entienda JSON
app.use(express.json());
app.use(cors());

// Puerto para escuchar la petición del frontend
const PUERTO = 3001;

// Registrar rutas
app.use('/api/cuenta', cuentaRutas); // Ruta de cuenta
app.use('/api/categoria_ingreso', categoria_ingresoRutas); // Ruta de categoria_ingreso
app.use('/api/categoria_gasto', categoria_gastoRutas); // Ruta de categoria_gasto
app.use('/api/tipo_gasto', tipo_gastoRutas); // Ruta de tipo_gasto
app.use('/api/lugar_gasto', lugar_gastoRutas); // Ruta de lugar_gasto
app.use('/api/hecho_gasto', hecho_gastoRutas); // Ruta de hecho_gasto
app.use('/api/gasto', gastoRutas); // Ruta de gasto
app.use('/api/ingreso', ingresoRutas); // Ruta de ingreso
app.use('/api/transaccion', transaccionRutas); // Ruta de transaccion

// Iniciar el servidor
app.listen(PUERTO, () => {
    console.log(`Servidor en ejecución y escuchando el puerto ${PUERTO}`);
});
