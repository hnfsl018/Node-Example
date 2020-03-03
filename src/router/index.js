const route = require("express").Router();

const { JWTvalidate } = require("../middleware/index");
const authCtl = require("../controller/auth");
const restaurantCtl = require("../controller/restaurant");

route.post("/auth/login", authCtl.login);
route.post("/auth/register", authCtl.register);

route.get("/restaurant", JWTvalidate, restaurantCtl.restaurantList);
route.post("/restaurant", JWTvalidate, restaurantCtl.restaurantCreate);
route.put("/restaurant/:id", JWTvalidate, restaurantCtl.restaurantUpdate);
route.delete("/restaurant/:id", JWTvalidate, restaurantCtl.restaurantDelete);

module.exports = route;
