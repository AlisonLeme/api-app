const CallsModel = require("../models/calls");

async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;

  // pegando todos os produtos ou somendo um
  const calls = await CallsModel.find(obj);

  res.send(calls);
}

module.exports = {
  get,
};
