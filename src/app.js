require("./db/mongoose");
const taskRouter = require("./routers/task");
const userRouter = require("./routers/user");

const express = require("express");
const app = express();

//middleware function to run if under maintenance
// app.use((req,res,next)=>{
//   res.status(503).send("Site is under maintenance. Please try again later.")
// })

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

module.exports=app;