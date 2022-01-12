import axios from "axios";

const PORT = process.env.PORT || "http://localhost:3000";

export const homeRoute = async (req, res) => {
  console.log(`${PORT}/api/inventory`);
  try {
    await axios.get(`${PORT}/api/inventory`).then((response) => {
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
