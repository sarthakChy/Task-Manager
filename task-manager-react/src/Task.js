import React, {useState,useEffect} from 'react';
import instance from "./axios";
import "./Task.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Task({task,id}) {
  const [check,setCheck] = useState(false);

  const deleteTask = ()=>{

    instance.delete(`/task/${id}`);

  }

  const handleChange = ()=>{

    setCheck(!check);


  }

  return (
      <div className="task__container">
        <input className="task__check"type="checkbox" onChange={handleChange} />
        <h3 className={`task ${check && "isChecked"}`}> {task}</h3>
        <div className="task__delete">
        <IconButton aria-label="delete" size="small" onClick={deleteTask} style={{backgroundColor:"#E0E0E0"}} color="secondary" >
          <DeleteIcon  />
        </IconButton>
        </div>


      </div>


  )
}

export default Task
