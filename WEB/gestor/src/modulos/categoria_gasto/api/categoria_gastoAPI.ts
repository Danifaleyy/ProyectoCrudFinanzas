import axios from "axios";

const categoria_gastoApi = axios.create({
    baseURL: 'http://localhost:3001/api/categoria_gasto'
});

export default categoria_gastoApi