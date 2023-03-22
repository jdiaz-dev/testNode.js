const { randomUUID } = require("crypto");

const generatorUUID = (req, res, next) => {
  let uuid = randomUUID();
  console.log("--uuid", uuid);
  req.body.id = uuid;
  next();
};

module.exports = generatorUUID;
