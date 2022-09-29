const db = require("../database");
const UserModel = require("../models/users");
const { crypto } = require("../utils/password");

async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;

  // pegando todos os produtos ou somendo um
  const users = await UserModel.find(obj);

  res.send(users);
}

async function post(req, res) {
  const { name, email, password } = req.body;

  await db.connect();

  const passwordCrypto = await crypto(password);

  const user = new UserModel({
    name,
    email,
    password: passwordCrypto,
  });

  user.save();

  res.status(201).json({
    success: true,
  });
}

module.exports = {
  get,
  post,
};
