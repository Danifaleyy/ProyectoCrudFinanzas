import axios from "axios";

const cuentaApi = axios.create({
    baseURL: 'http://localhost:3001/api/cuenta'
});

export default cuentaApi