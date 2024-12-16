import axios from "axios";

const transaccionApi = axios.create({
    baseURL: 'http://localhost:3001/api/transaccion'
});

export default transaccionApi;