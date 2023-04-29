const router = require("express").Router();
const users = require("../controllers/users");
const { verify } = require("../controllers/middleware");

router.get("/", users.findAllUsers);
router.get("/find/:id", users.findUser);
router.get("/stats", users.stats);

router
  .route("/:id")
  .put(verify, users.updateInfo)
  .delete(verify, users.deleteAccount);
module.exports = router;
