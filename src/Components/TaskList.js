import React ,{useContext} from 'react'
import { TaskListContext } from '../Contexts/TaskListContext'
import Task from './Task'


const TaskList = () => {
  const {tasks} = useContext(TaskListContext);
  console.log(tasks)
  return (
    <div>
      {tasks.length ? (<ul className="list">
      {
        tasks.map(task => {
          return <Task key={task.id} task={task}/>
        })
      }
      </ul>) : (<div className="no-tasks">No Tasks</div>)}
    </div>
  )
}

export default TaskList
