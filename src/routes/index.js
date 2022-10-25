const router = require("express").Router();

const UsersController = require("../controllers/users");
const CallsController = require("../controllers/calls");
const SignInController = require("../controllers/auth/signin");

// users
router.get("/users/:id?", UsersController.get);
router.post("/users", UsersController.post);
// router.put("/users/:id", UsersController.put);
// router.delete("/users/:id", UsersController.remove);

// calls
router.get("/calls/:id?", CallsController.get);
router.post("/calls", CallsController.post);
// router.put("/users/:id", UsersController.put);
// router.delete("/users/:id", UsersController.remove);

// auth
router.post("/auth/signin", SignInController.post);

module.exports = router;
