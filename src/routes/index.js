const router = require("express").Router();

const UsersController = require("../controllers/users");
const CallsController = require("../controllers/calls");

// users
router.get("/users/:id?", UsersController.get);
// router.post("/users", UsersController.post);
// router.put("/users/:id", UsersController.put);
// router.delete("/users/:id", UsersController.remove);

// calls
router.get("/calls/:id?", CallsController.get);
// router.post("/users", UsersController.post);
// router.put("/users/:id", UsersController.put);
// router.delete("/users/:id", UsersController.remove);

module.exports = router;
