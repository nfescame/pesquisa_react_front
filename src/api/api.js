import axios from "axios";

// const apis = {
//   development: process.env.REACT_APP_API_BASE,
//   production: "",
// };

// Pré-configurando a URL padrão do nosso backend em uma instância do Axios
const api = axios.create({
  baseURL: "http://localhost:1234",
});

export default api;
