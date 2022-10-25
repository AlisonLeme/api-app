const UserModel = require("../../models/users");
const db = require("../../database");
const { compare } = require("../../utils/password");

const post = async (req, res) => {
  const { email, password } = req.body;

  await db.connect();

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(401).json({ success: false, message: "invalid" });
  }

  const passIsCorrect = await compare(password, user.password);

  if (passIsCorrect) {
    return res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  }

  return res.status(401).json({ success: false, message: "invalid" });
};

module.exports = {
  post,
};
