import React, { useEffect, useState } from "react";

export default function TaskList({tasks, setTasks}) {

  const handleTaskDelete =(id)=>{
    

    const isConfirm = window.confirm("Are you sure you want to delete it?")

    if(isConfirm){
      let updatedTasks = tasks.filter((task)=>task.id !== id)
      setTasks(updatedTasks)
      localStorage.setItem('tasks',JSON.stringify(updatedTasks))
    }
  }

  const toggleComplete = (index)=>{
    //Clone the main array
    const updatedTask = [...tasks]
    //update the new array with new values for done
    updatedTask[index].done = !updatedTask[index].done
    //Update the old array with the new one
    setTasks(updatedTask)
    localStorage.setItem('tasks',JSON.stringify(updatedTask))
  }

  useEffect(()=>{
      const storedTask = JSON.parse(localStorage.getItem('tasks'))

      if(storedTask && Array.isArray(storedTask)){
        setTasks(storedTask)
      }
  },[])

  const handleTask = ()=>{
    let task = tasks
    switch(task){
      case 0:
        
    }
  }

  return (
    <div>
      <button onChange={handleTask}>All</button>
      <button>Completed</button>
      <button>Pending</button>
      {tasks.map((task, index) => {
        return (
          <div key={task.id}
            className={`mt-3 p-2 rounded-md flex justify-between ${
              task.done ? "bg-green-300" : "bg-red-200"
            } `}
          >

            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p className="text-sm ">{task.description}</p>
            </div>
            
         <div className="flex items-center gap-6">
         <button onClick={()=>{handleTaskDelete(task.id)}}>
         
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>

            {task.done ? (
              <button className="flex bg-slate-100 rounded-md shadow-md- p-1" onClick={()=>{toggleComplete(index)}}>
                 Mark as undone
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            ) : (
              <button className="flex bg-slate-100 rounded-md shadow-md- p-1" onClick={()=>{toggleComplete(index)}}>
                Mark as done
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            )}
         </div>
          </div>
        );
      })}
    </div>
  );
}