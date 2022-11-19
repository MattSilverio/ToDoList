
import './global.css'
import styles from "./App.module.css"

import Logo from './assets/logo.svg'


import {  PlusCircle } from 'phosphor-react'
import Warning from './Components/Warning'
import { Task } from './Components/Task'
import {ReactNode, useEffect, useState } from 'react'

export interface ObjectTask{
  id: number;
  content?: string;
  isDone: boolean;
}

const myTasks: Array<ObjectTask> = [
  {
    id: 0,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: false,
  },
  {
    id: 1,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: false,
  },
  {
    id: 2,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: false,
  },
  {
    id: 3,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: true,
  },
  {
    id: 4,
    content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: true,
  },
]

export function getNumOfTasksDone(tasks: Array<ObjectTask>){
  const numOfTasksDone = tasks.filter((item) => item.isDone).length
  return numOfTasksDone;
}

function App() {
  const [tasksCreated, setTasksCreated] = useState<ReactNode>();
  const [tasksDone, setTasksDone] = useState<ReactNode>();
  const [totalTasks, setTotalTasks] = useState(myTasks)

  function getNumOfTasksCreated(tasks:Array<ObjectTask>){
    let numOfTasks = tasks.length
    return numOfTasks;
  }

  function addTask(tasks: Array<ObjectTask>){
    const taskDescription = (document.getElementById('taskInput') as HTMLInputElement).value.toString();

    let objNewTask: ObjectTask = {
      id: tasks.length,
      content: taskDescription,
      isDone: false
    }
    
    setTotalTasks(tasks => [...tasks, objNewTask])
    
    console.log(totalTasks)
  }

  useEffect(() => {
    setTasksCreated(getNumOfTasksCreated(totalTasks));
    setTasksDone(getNumOfTasksDone(totalTasks));
  }, [totalTasks.length, tasksDone])

  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="Logo do aplicativo" />
      </header>

      <div className={styles.taskForm}>
        <input id='taskInput' type="text" placeholder="Adicione uma nova tarefa" />

        <button onClick={() => addTask(totalTasks)}>
          Criar <PlusCircle size={16} />
        </button>
      </div>

      <div className={styles.tasks}>
        <div className={styles.tasksTracks}>
          <p className={styles.createdTasksLabel}>
            Tarefas Criadas<span className={styles.tasksTrackingCounters}>{tasksCreated}</span>
          </p>

          <p className={styles.completedTasksLabel}>
            Concluídas <span className={styles.tasksTrackingCounters}>{tasksDone}</span>
          </p>
        </div>

        <div className={styles.tasksBoard}>
          
          {totalTasks.length > 0 && totalTasks.map((task) => {
            return <Task key={task.id} isDone={task.isDone} content={task.content!} id={task.id} setTotalTasks={setTotalTasks} totalTasks={totalTasks} setTasksDone={setTasksDone}/>
          })
            || 

            <Warning />
          }

        </div>
      </div>
    </div>
  )
}

export default App
