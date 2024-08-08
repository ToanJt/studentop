import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/data";

export const getData = () => {
  return axios.get(API_URL);
};

export const addData = (data) => {
  return axios.post(API_URL, data);
};
