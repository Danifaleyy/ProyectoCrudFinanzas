import axios from "axios";

const lugar_gastoApi = axios.create({
    baseURL: 'http://localhost:3001/api/lugar_gasto'
});

export default lugar_gastoApi;
