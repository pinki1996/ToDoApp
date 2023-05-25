//useState Hooks: it is used to manage your state(data) in functiona component
//import useState from 'react'
//decalre hooks at the top level
//useState = variable, updating function
//const count = useState(initalvalue)



import './App.css';
import { useState, useRef } from 'react';

// state:data
//uncontrolled {useRef} vs controlled {useState}

function App() {
    const data = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
    const [list, setList] = useState(data);
    const [newTask,setNewTask] = useState('') 
    const [search,setSearch] = useState('');
    console.log(list)

    const addTask = () => {
        localStorage.setItem('list',JSON.stringify([...list, newTask]))
        setList([...list, newTask ])
        setNewTask("")
        
    }
    const deleteTask = (i) => {
        const delList = [...list];
        delList.splice(i, 1);
        setList(delList)
        localStorage.setItem('list',JSON.stringify(delList))
    }
    const updateTask = (e, i) => {
        const upTask = [...list];
        upTask.splice(i, 1, e.target.value)
        setList(upTask)
        localStorage.setItem('list',JSON.stringify(upTask))
    }
   
    const keyEnter =(e)=>{
        if(e.key ==="Enter"){
            addTask()
        } 
    }


    return (
        <center>
            

                <div className="search">
                    <input type="text" placeholder='search task search 🏸' onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>
            <h1 className='heading'>To-Do App ✨</h1>
            <div className="inputs">

                <input type="text" onChange={(e)=>{setNewTask(e.target.value)}} onKeyDown={keyEnter} value={newTask} />
                <button className="btn" onClick={addTask}>Ask task ✌</button>
            </div>
            <div className="container">

                {
                    list.map((val, i) => {
                        if(val.toLowerCase().includes(search.toLowerCase())){
                        return (
                            <div className='list' key={i}>
                                <input className='text' value={val} onChange={(e) => updateTask(e, i)} />
                                <span className="icon" onClick={() => { deleteTask(i) }}>❌</span>
                            </div>
                        )
                        }
                    })
                }
            </div>
        </center>
    );
}

export default App;