import axios from "axios";

const ingresoApi = axios.create({
    baseURL: 'http://localhost:3001/api/ingreso'
});

export default ingresoApi;
