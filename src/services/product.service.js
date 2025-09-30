import axios from "axios";

export const getProducts = (callback) => {
  const urlApi = {
    api1: "https://api.escuelajs.co/api/v1/products",
    api2: "https://fakestoreapi.com/products",
  };

  axios
    .get(urlApi.api2)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
