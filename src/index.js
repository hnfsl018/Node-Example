const express = require("express");
const app = express();
const route = require("./router/index");

app.use(route);

app.listen(process.env.PORT, () => {
  console.log(`server is running on localhost port ${process.env.PORT}`);
});
