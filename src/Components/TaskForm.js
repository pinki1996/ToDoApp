import React, { useState } from 'react'

const TaskForm = ({tasks, setTasks}) => {

  const [formData, setFormData] = useState({
    title:'',
    description:''
   
  })


  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = (e) =>{
    console.log("form submitted")
    e.preventDefault()
    let updatedTasks = [...tasks,{id:Date.now(),title:formData.title,description:formData.description,
      done:false}]
    setTasks(updatedTasks)
    console.log(tasks)
    setFormData({
      title:'',
      description:''
    })
    localStorage.setItem('tasks',JSON.stringify(updatedTasks))
  }

  return (
    <div>
         <form onSubmit={handleSubmit}>
        <div>
          <label for="first_name" className="block mb-2 text-sm font-medium">
            Task Title
          </label>
          <input
            type="text"
            id="task_title"
            name='title'
            onChange={handleChange}
            value={formData.title}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="What you want to do?"
          />
        </div>

        <div class="mt-6">
          <label
            for="large-input"
            className="block mb-2 text-sm font-medium"
          >
            Description
          </label>
          <input
            type="text"
            id="large-input"
            name='description'
            value={formData.description}
            onChange={handleChange}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-6 w-full">Save Task</button>

      </form>
    </div>
  )
}

export default TaskForm