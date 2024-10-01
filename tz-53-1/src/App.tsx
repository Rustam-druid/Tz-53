import React, {ReactChild, ReactElement, useState} from 'react';
import './App.css'

import TaskTask from "./Task.Task.tsx";
import {ITask} from "./type";


const App = () => {



    const [inputTask, setInputasks] = useState<string>('')
    const [Tasks, setTasks] = useState<ITask[]>([
        {id:1 , title:'Buy milk'},
        {id:2 , title:'Walk with dog'},
        {id:3 , title:'Do homework'},
    ]);

    const inputchange = (e:React.ChangeEventHandler<HTMLInputElement>) => {
        setInputasks(e.target.value);
    };

    const addtask = () => {

        if (inputTask.trim().length > 0){
            setTasks([...Tasks, {
                id:String(new Date()),
                title:inputTask
            }]);
            setInputasks('')
        }else {
            alert('ошибка')
        }

    };
    const remove = (id:number) => {
setTasks(Tasks.filter(t => t.id !== id))
    }

    return (
        <div   className='App'>
            <div className='header'></div>
            <div className='main'>
              <div className='box'>
                  <input
                      value={inputTask}
                      type="text"
                      placeholder='add new TAsk'
                      className='input'
                      onChange={inputchange}/>
                  <button onClick={addtask}>Add</button>

              </div>

                  {Tasks.map(task => (
                      <TaskTask key={task.id} title={task.title} remove={() => remove(task.id)}  />
                  ))}



            </div>
            <div className='footer'></div>
        </div>
    );
};

export default App;