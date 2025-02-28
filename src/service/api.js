import axios from 'axios';
import { production_url } from './environments';

const api = axios.create({
    baseURL: production_url,
});

export default api;
