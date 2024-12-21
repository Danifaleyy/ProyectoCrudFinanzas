import axios from "axios";

const tipo_inversionApi = axios.create({
    baseURL: 'http://localhost:3001/api/tipo_inversion'
});

export default tipo_inversionApi