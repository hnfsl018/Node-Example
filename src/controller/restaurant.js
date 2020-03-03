const { restaurant } = require("../db/restaurant");
const restaurantList = async (req, res) => {
  return res.json({
    code: 200,
    result: restaurant,
    msg: "success"
  });
};
const restaurantCreate = async (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.json({
      code: 200,
      msg: "success"
    });
  } else {
    return res.json({
      code: 400,
      msg: "Bad request"
    });
  }
};
const restaurantUpdate = async (req, res) => {
  return res.json({
    code: 200,
    msg: "success"
  });
};
const restaurantDelete = async (req, res) => {
  return res.json({
    code: 200,
    msg: "success"
  });
};

module.exports = {
  restaurantList,
  restaurantCreate,
  restaurantUpdate,
  restaurantDelete
};
