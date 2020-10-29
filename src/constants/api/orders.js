import axios from "configs/axios";
export default {
  all: (options = { params: {} }) => axios.get(`/orders`, options),
};