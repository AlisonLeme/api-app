const UsersModel = require("../models/users");

async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;

  // pegando todos os produtos ou somendo um
  const users = await UsersModel.find(obj);

  res.send(users);
}

module.exports = {
  get,
};
