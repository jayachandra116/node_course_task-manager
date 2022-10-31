//CRUD operations

//importing
const { MongoClient, ObjectId } = require("mongodb");

const id = new ObjectId();
//console.log(id.id);

const connectionURL = "mongodb://localhost:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    //console.log("Connected correctly");
    const db = client.db(databaseName);
    //Inserting
    //insertone
    // db.collection('users').insertOne({
    //     name:'JC',
    //     age:26
    // },(error,result)=>{
    //     if(error){
    //         return console.log("Unabel to insert user");
    //     }

    //     console.log(result.insertedId);

    // })
    //insertmany
    // db.collection('users').insertMany([{name:'JC1',age:27},{name:'JC2',age:27}],(error,result)=>{
    //     if(error){
    //        return console.log(error);
    //     }
    //     console.log(result);
    // })
    //insertmany
    // db.collection('tasks').insertMany([{description:'Learn MERN',completed:false},{description:'Learn Python',completed:true}],(error,result)=>{
    //     if(error){
    //         return console.log(error);
    //     }

    //     console.log(result.insertedCount);
    // })

    //Read
    // db.collection('users').findOne({_id:new ObjectId("63162e2830cac64ea0138244")},(error,result)=>{
    //     if(error){
    //         return console.log(error);
    //     }

    //     console.log(result);
    // })

    // let cursor=db.collection('users').find({age:27}).toArray((error,users)=>{
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log(users);
    // })

    // let cursor1=db.collection('users').find({age:27}).toArray((error,users)=>{
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log("No of users found:- "+users.length);
    // })

    //find one document with id
    // db.collection('tasks').findOne({_id:new ObjectId('63177af9cee1eec9966f2d24')},(error,task)=>{
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log(task.description);
    // })

    // //find uncompleted tasks
    // db.collection('tasks').find({completed:false}).toArray((error,uncompletedTasks)=>{
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log(uncompletedTasks);
    //     for (const task of uncompletedTasks) {
    //         console.log("Task:- "+task.description);
    //     }
    // })

    //update only one document
    // const updatePromise=db.collection('users').updateOne(
    //     {
    //         _id:new ObjectId('63162e2830cac64ea0138244')
    //     },{
    //         $inc:{
    //             age:1
    //         }
    // });

    // updatePromise.then((result)=>{
    //         console.log(result);
    //     }).catch((error)=>{
    //         console.log(error);
    // });

    //update many documents in one go
    // db.collection('tasks').updateMany(
    //     {
    //         completed:false
    //     },
    //     {
    //         $set:{
    //             completed:true
    //         }
    //     }
    // ).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    //deleteOne
    db.collection("users")
      .deleteMany({
        age: 24,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
