import axios from "axios";

const axiosConfig = {
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  timeout: 30000
};

const http = axios.create(axiosConfig);

export default http;
