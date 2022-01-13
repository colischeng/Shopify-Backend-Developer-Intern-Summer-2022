import axios from "axios";

const production = "https://shopify-2022-backend-intern.herokuapp.com";
const development = "http://localhost:3000";
const url = process.env.NODE_ENV ? production : development;

export const homeRoute = async (req, res) => {
  try {
    await axios.get(`${url}/api/inventory`).then((response) => {
      res.render("index", { inventory: response.data });
      res.status(200);
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateRoute = (req, res) => {
  try {
    res.render("update", { itemId: req.originalUrl.split("/")[2] });
    res.status(200);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
