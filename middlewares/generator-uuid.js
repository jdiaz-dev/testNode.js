const { randomUUID } = require("crypto");

const generatorUUID = (req, res, next) => {
  let uuid = randomUUID();
  req.body.id = uuid;
  next();
};

module.exports = generatorUUID;
