import axios from "axios";

const categoria_ingresoApi = axios.create({
    baseURL: 'http://localhost:3001/api/categoria_ingreso'
});

export default categoria_ingresoApi