import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: '2eee6880a428bb2ab12c7c34871f2b35',
    units: 'metric',
    mode: 'json',
  },
});

export default api;
