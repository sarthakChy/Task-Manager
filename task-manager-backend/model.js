const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name:{
    type:String
  },
  completed:{
    type:Boolean,
    Default: false
  }
})

module.exports = mongoose.model('Tasks',taskSchema);
