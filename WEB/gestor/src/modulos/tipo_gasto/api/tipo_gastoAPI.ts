import axios from "axios";

const tipo_gastoApi = axios.create({
    baseURL: 'http://localhost:3001/api/tipo_gasto'
});

export default tipo_gastoApi