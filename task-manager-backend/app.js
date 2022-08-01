const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors')
const Task = require('./model')
const app = express();
const port = process.env.PORT || 7000;

//MIddlewares
app.use(express.json());
app.use(Cors());
require('dotenv').config();

//Routes
app.get('/', (req,res)=> res.status(200).send('task backend'));


//Post Task
app.post('/task', (req,res) =>{
  Task.create(req.body, (err,data) =>{
    if (err){
      res.status(500).send(err);
    }else{
      res.status(201).send(data);
    }
  })

});


//Get Task
app.get('/task', (req,res) =>{
  Task.find({} , (err,data) =>{
    if (err){
      res.status(500).send(err);
    }else{
      res.status(200).send(data);
    }
  })

});

app.delete('/task/:id', (req,res) =>{
  const {id: taskId} = req.params;
  Task.deleteOne({ "_id" :req.params.id}, (err,data) =>{
    if (err){
      res.status(500).send(err);
    }else{
      res.status(200).send(data);
    }
  })


})



// Db Connection
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
