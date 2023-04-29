const router = require("express").Router();
const movies = require("../controllers/movies");
const { verify } = require("../controllers/middleware");

router
  .route("/")
  .get(verify, movies.getAllMovies)
  .post(verify, movies.addMovie);

router.get("/random", movies.getRandomMovie);

router
  .route("/:id")
  .get(verify, movies.getMovie)
  .put(verify, movies.updateMovie)
  .delete(verify, movies.deleteMovie);

module.exports = router;
