const { generateAccessToken } = require("../tools/jwt");
const { accounts } = require("../db/account");

const login = async (req, res) => {
  const { username, password } = req.body;
  const account = accounts.find(
    acc => acc.username == username && acc.password == password
  );
  if (!!account) {
    const payload = {
      username: username
    };
    const accessToken = await generateAccessToken(payload);
    return res.json({
      code: 200,
      token: accessToken,
      msg: "success"
    });
  } else {
    return res.json({
      code: 400,
      msg: "username or password not found"
    });
  }
};

const Register = async (req, res) => {
  const { username, password } = req.body;
  return res.json({
    code: 200,
    msg: "success"
  });
};

module.exports = {
  login,
  register
};
