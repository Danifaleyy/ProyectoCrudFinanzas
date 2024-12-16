import axios from "axios";

const hecho_gastoApi = axios.create({
    baseURL: 'http://localhost:3001/api/hecho_gasto'
});

export default hecho_gastoApi;