const router = require("express").Router();
const auth = require("../controllers/auth");

router.post("/register", auth.signUp);
router.post("/login", auth.signIn);

module.exports = router;
