const router = require("express").Router();

const UsersController = require("../controllers/users");

router.get("/users", UsersController.get);

module.exports = router;
