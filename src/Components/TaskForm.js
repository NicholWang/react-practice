import React ,{useState,useContext,useEffect}from 'react'
import {TaskListContext} from '../Contexts/TaskListContext'
const TaskForm = () => {
  const [title,setTitle] = useState('');
  const {addTask,clearList,editItem,editTask} = useContext(TaskListContext);
  const submitHandler = e => {
    e.preventDefault();
    if(editItem){
      editTask(title,editItem.id)
    }else{
      addTask(title);
      setTitle('');
    }
  }

  useEffect(() => {
    if(editItem){
      setTitle(editItem.title)
    }else{
      setTitle('');
    }
  },[editItem])
  return (
   <form className="form" onSubmit={submitHandler}>
     <input type="text"
     value={title}
     onChange={e => setTitle(e.target.value)}
     className="task-input"
     placeholder="Add task..."
     required/>
    <div className="buttons">
      <button type="submit" className="btn add-task-btn">
       {editItem ? 'Edit task' : 'Add task'}
      </button>
      <button className="btn clear-btn" onClick={() => clearList()}>
        Clear
      </button>
    </div>
   </form>
  )
}

export default TaskForm
