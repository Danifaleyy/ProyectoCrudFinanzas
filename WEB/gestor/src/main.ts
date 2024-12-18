import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'; // Asegúrate de que la ruta sea correcta

const app = createApp(App)

//Paquete para la impresion en Excel
import JsonExcel from 'vue-json-excel3';
app.component('downloadExcel', JsonExcel);

app.use(router)

app.mount('#app')