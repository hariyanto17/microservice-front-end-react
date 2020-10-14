import axios from 'configs/axios'
export default {
  upload: (image) => axios.post(`/media`, {image}),
};
