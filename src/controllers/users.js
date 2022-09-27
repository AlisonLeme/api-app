async function get(req, res) {
  res.send({
    ok: 123,
  });
}

module.exports = {
  get,
};
