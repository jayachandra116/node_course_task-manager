const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../src/models/user");
const Task = require("../../src/models/task");

const userOneId = new mongoose.Types.ObjectId();
const userTwoId = new mongoose.Types.ObjectId();
const user1 = {
  _id: userOneId,
  name: "Mike",
  email: "Mike@ex.com",
  password: "56whaT!!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const user2 = {
  _id: userTwoId,
  name: "Andrew",
  email: "Andrew@ex.com",
  password: "myHouse099",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
    },
  ],
};

const taskOneId=new mongoose.Types.ObjectId;
const taskTwoId=new mongoose.Types.ObjectId;
const taskThreeId=new mongoose.Types.ObjectId;
const taskOne={
    _id:taskOneId,
    description:'First task',
    completed:false,
    owner:userOneId
}
const taskTwo={
    _id:taskTwoId,
    description:'Second task',
    completed:true,
    owner:userOneId
}
const taskThree={
    _id:taskThreeId,
    description:'Third task',
    completed:true,
    owner:userTwoId
}

const setUpDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(user1).save();
  await new User(user2).save();
  await new Task(taskOne).save()
  await new Task(taskTwo).save();
  await new Task(taskThree).save()
};

module.exports = {
  userOneId,
  user1,
  userTwoId,user2,taskOne,taskTwo,taskThree,
  setUpDatabase,
};
