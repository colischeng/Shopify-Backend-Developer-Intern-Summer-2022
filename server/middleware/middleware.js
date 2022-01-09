export const validateBody = (req, res, next) => {
  // guarantee non-empty body
  if (!req.body) {
    res.status(400).send({ message: "Invalid submission. Check fields" });
    return;
  }
  next();
};
