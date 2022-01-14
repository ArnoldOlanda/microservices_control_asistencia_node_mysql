const { Router } = require("express");
const loginRouter = Router();
const { index, verifyLogin } = require("../controllers/loginController");


loginRouter.post("/verifyLogin", verifyLogin);

module.exports = loginRouter;
