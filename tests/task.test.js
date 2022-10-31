const request = require("supertest");
const app = require("../src/app");
const Task = require("../src/models/task");
const {
  setUpDatabase,
  user1,
  userOneId,
  userTwoId,
  taskOne,
  taskTwo,
  taskThree,
  user2,
} = require("./fixtures/db");

beforeEach(setUpDatabase);

test("Should create a task for user", async () => {
  const res = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${user1.tokens[0].token}`)
    .send({
      description: "From test",
    })
    .expect(201);

  const task = await Task.findById(res.body._id);
  expect(task.description).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test("Should fetch user tasks", async () => {
  const res = await request(app)
    .get("/tasks")
    .set("Authorization", `Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200);

  expect(res.body.length).toEqual(2);
});

test("Should not delete other user tasks", async () => {
    const res=await request(app)
        .delete('/tasks/'+taskOne._id)
        .set('Authorization',`Bearer ${user2.tokens[0].token}`)
        .send()
        .expect(404)
    const task=await Task.findById(taskOne._id)
    expect(task).not.toBeNull()
});
