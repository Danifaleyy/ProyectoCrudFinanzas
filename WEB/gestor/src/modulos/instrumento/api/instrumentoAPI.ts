import axios from "axios";

const instrumentoApi = axios.create({
    baseURL: 'http://localhost:3001/api/instrumento'
});

export default instrumentoApi