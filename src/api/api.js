import axios from "axios";

const apis = {
  development: process.env.REACT_APP_API_BASE,
  production: "https://eleicao22.herokuapp.com",
};

// Pré-configurando a URL padrão do nosso backend em uma instância do Axios
const api = axios.create({
  baseURL: apis[process.env.NODE_ENV],
});

export default api;
