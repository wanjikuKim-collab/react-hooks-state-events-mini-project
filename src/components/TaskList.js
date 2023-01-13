import React from "react";
import Task from "./Task";

function TaskList({ allTasks, deleteTask }) {
  console.log(allTasks);
  return (
    <div className="tasks">
    {
      allTasks.map(task=> <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask}/>)
    }
    </div>)
}

export default TaskList;