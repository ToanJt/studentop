import axios from "axios";

const API_URL = "https://studentop.onrender.com/api/data";

export const getData = () => {
  return axios.get(API_URL);
};

export const addData = (data) => {
  return axios.post(API_URL, data);
};
