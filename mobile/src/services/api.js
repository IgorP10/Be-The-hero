import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.43.191:3333" //IP do PC e a PORT do NODE
});

export default api;
