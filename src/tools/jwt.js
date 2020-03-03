const jwt = require("jsonwebtoken");
const SECRET_KEY = "SECRET_KEy";

const generateAccessToken = async payload => {
  const token = await generateToken(payload, 2);
  return token;
};

const generateToken = async (payload, tokenType, exp = "2h") => {
  payload.type = tokenType;
  const token = await jwt.sign(payload, SECRET_KEY, {
    expiresIn: exp
  });
  return token;
};

module.exports = {
  generateAccessToken
};
