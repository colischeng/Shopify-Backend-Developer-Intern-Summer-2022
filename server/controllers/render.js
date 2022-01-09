export const homeRoute = (req, res) => {
  try {
    res.render("index");
    res.status(200);
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
