import axios from "axios";

const portafolioApi = axios.create({
    baseURL: 'http://localhost:3001/api/portafolio'
});

export default portafolioApi;
