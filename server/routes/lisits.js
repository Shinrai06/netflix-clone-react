const router = require("express").Router();
const lists = require("../controllers/lists");
const { verify } = require("../controllers/middleware");

router.route("/").get(verify, lists.getLists).post(verify, lists.addList);

router.route("/:id").delete(verify, lists.deleteList);

module.exports = router;
