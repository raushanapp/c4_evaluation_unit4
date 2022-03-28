const express = require('express');
const userController = require("./controller/user.controller");
const {register,login} = require("./controller/login.register.controller")
const todoController = require("./controller/todos.controller");
const app = express();

app.use(express.json());
app.use("/users",userController);
app.use("/todos",todoController);
app.post("/register",register)
app.post("/login",login)

module.exports = app;