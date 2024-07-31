const userRouter = require("./router/userRouter");

const routes = [
  {
    path: "/api",
    router: userRouter,
  },
];

module.exports = routes;
