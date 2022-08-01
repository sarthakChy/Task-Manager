import {useState,useEffect} from 'react';
import './App.css';
import instance from './axios'
import Task from './Task'
import Banner from "./Banner"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';


function App() {
  const [tasks,setTasks] = useState([]);
  const [input,setInput] = useState({name:"",completed:false});

  const req =  instance.get('/task');

  useEffect(()=>{
    async function fetchData(){
      const req = await instance.get('/task');
      setTasks(req.data);
      return req
    }

    fetchData();

  },[req])


  const addInput = (event) =>{

    event.preventDefault()
    instance.post('/task',input);
    setInput({name:"",completed:false})

  }


  return (
    <div className="App">
      <Banner />
      <div className="header">
        <h1 className="title">TODO</h1>
      </div>

      <div className="form__container">
        <form>
          <input placeholder="Create a New Todo.." value={input.name} onChange = {event => setInput({name:`${event.target.value}`,completed:false})} />
          {input.name && <IconButton type="submit" onClick={addInput} aria-label="delete" size="small" style={{backgroundColor:"#E0E0E0",position:"absolute",right:"30px"}} color="secondary" >
            <AddIcon />
          </IconButton>}
        </form>
      </div>
      <div className="container">
          {tasks.map(task =>(
            <Task key={task._id} task={task.name} id={task._id}/>

          ))}
      </div>
    </div>
  );
}



export default App;
