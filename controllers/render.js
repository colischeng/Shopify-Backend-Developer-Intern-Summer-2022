import axios from "axios";

export const homeRoute = async (req, res) => {
  try {
    await axios
      .get(`https://shopify-2022-backend-intern.herokuapp.com//api/inventory`)
      .then((response) => {
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
