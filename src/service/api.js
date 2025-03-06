import axios from 'axios';
import {url} from './environments';

const api = axios.create({
    baseURL: url,
});

export default api;
