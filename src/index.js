const app=require('./app');

const port = process.env.PORT | 3000;

//middleware function to run if under maintenance
// app.use((req,res,next)=>{
//   res.status(503).send("Site is under maintenance. Please try again later.")
// })


app.listen(port, () => {
  console.log("App running on port: " + port);
});

// const bcrypt=require('bcryptjs');
// const myFunction=async ()=>{
//   const pwd='Red12345'
//   const hashedPassword=await bcrypt.hash(pwd,8)
//   console.log(pwd);
//   console.log(hashedPassword);
//   const isMatch=await bcrypt.compare('asdfss',hashedPassword)
//   console.log(isMatch);
// }
// myFunction();

//jsonwebtoken
// const jwt=require('jsonwebtoken');
// const myFunction=async ()=>{
//   const token=jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'1 seconds'})
//   console.log(token);
//   console.log( jwt.verify(token,'thisismynewcourse'))
// }
// myFunction();

//toJSON explanation
// const pet={
//   name:'Hal'
// }
// pet.toJSON=function(){
//   return {}
// }
// console.log(JSON.stringify(pet));

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     // cb(new Error("Error Message"))
//     // cb(undefined,true)
//     // cb(undefined,false)
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a word document"));
//     }
//     cb(undefined, true);
//   },
// });

// app.post(
//   "/upload",
//   upload.single('upload'),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({error:error.message})
//   }
// );
