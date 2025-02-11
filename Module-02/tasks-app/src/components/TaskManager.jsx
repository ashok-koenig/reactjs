import React, { useState } from 'react'

function TaskManager() {
    const [tasks, setTasks] = useState([
                                        {id: 1, title: "Learn React", completed: true},
                                        {id: 2, title: "Build React App", completed: false},
                                        ])
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const handleInputChange = (event) =>{
        setNewTaskTitle(event.target.value)
    }
    const handleAddTask = () =>{
        // Form a new task object with id, title and completed
        const newTask = {id: tasks.length+1, title: newTaskTitle, completed: false }
        setTasks([...tasks, newTask]) // Add new task to the tasks
        setNewTaskTitle('') // reset the new task title input field to empty
    }

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((task)=> task.id != taskId))
    }

    // Toggle the completion status
    const handleTaskStatus = (taskId) => {
        // const tasksCopy = [...tasks]
        // for(let index=0; index<tasksCopy.length; index++){
        //     if(tasksCopy[index].id==taskId){
        //         tasksCopy[index].completed = !tasksCopy[index].completed
        //     }            
        // }
        // setTasks(tasksCopy)
        setTasks(tasks.map((task)=> task.id==taskId ? {...task, completed: !task.completed} : task))
    }

  return (
    <div>
        <h2>Add New Task</h2>
        <input type='text' value={newTaskTitle} onChange={handleInputChange}/>
        <button onClick={handleAddTask}>Add Task</button>
        <hr />
        <h2>Task List</h2>
        <ul>
            {tasks.map((item)=> <li key={item.id}>
                                    {item.title} - {item.completed? "Completed": "Incomplete"}

                                    <button onClick={()=>handleTaskStatus(item.id)}>Toggle complete</button>
                                    <button onClick={()=>handleDeleteTask(item.id)}>Delete</button>
                                </li>)}
        </ul>
    </div>
  )
}

export default TaskManager