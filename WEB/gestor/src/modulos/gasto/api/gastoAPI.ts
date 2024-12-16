import axios from "axios";

const gastoApi = axios.create({
    baseURL: 'http://localhost:3001/api/gasto'
});

export default gastoApi;