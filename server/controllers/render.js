import axios from "axios";

export const homeRoute = async (req, res) => {
  try {
    await axios
      .get(`http://localhost:${process.env.PORT}/api/inventory`)
      .then((response) => {
        res.render("index", { inventory: response.data });
        res.status(200);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateRoute = (req, res) => {
  try {
    res.render("update");
    res.status(200);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
