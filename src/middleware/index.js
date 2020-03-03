const jwt = require("jsonwebtoken");
const SECRET_KEY = "SECRET_KEY";

const JWTvalidate = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (bearer) {
    const [, token] = bearer.split(" ");
    const payload = jwt.verify(token, SECRET_KEY);
    if (payload) {
      req.token = payload;
      next();
      return res.status(401).json({
        code: 401,
        msg: "unauthorized"
      });
    } else {
      return res.status(401).json({
        code: 401,
        msg: "unauthorized"
      });
    }
  } else {
    return res.status(401).json({
      code: 401,
      msg: "unauthorized"
    });
  }
};

module.exports = {
  JWTvalidate
};
