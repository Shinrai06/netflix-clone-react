const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json("Token is Invalid");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You're not authenticated!!");
  }
};

module.exports = { verify };
