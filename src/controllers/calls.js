const CallsModel = require("../models/calls");
const db = require("../database");

async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;

  // pegando todos os produtos ou somendo um
  const calls = await CallsModel.find(obj);

  res.send(calls);
}

const post = async (req, res) => {
  await db.connect();

  const { host, title, description, plataform, link, date, time, participants } = req.body;

  const calls = new CallsModel({
    host,
    title,
    description,
    plataform,
    link,
    date,
    time,
    participants,
    updatedAt: new Date(),
  });

  const register = await calls.save();

  if (register) {
    res.status(201).json({ success: true });
  } else {
    res.status(201).json({ success: false });
  }
};

module.exports = {
  get,
  post,
};
