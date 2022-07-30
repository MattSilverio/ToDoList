
import './global.css'
import styles from "./App.module.css"

import Logo from './assets/logo.svg'


import {  PlusCircle } from 'phosphor-react'
import Warning from './Components/Warning'
import { Task } from './Components/Task'

interface ObjectTask{
  id: number;
  content: string;
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

function App() {
  

  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="Logo do aplicativo" />
      </header>

      <div className={styles.taskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button>
          Criar <PlusCircle size={16} />
        </button>
      </div>

      <div className={styles.tasks}>
        <div className={styles.tasksTracks}>
          <p className={styles.createdTasksLabel}>
            Tarefas Criadas<span className={styles.tasksTrackingCounters}>0</span>
          </p>

          <p className={styles.completedTasksLabel}>
            Concluídas <span className={styles.tasksTrackingCounters}>0</span>
          </p>
        </div>

        <div className={styles.tasksBoard}>
          
          {myTasks.length > 0 && myTasks.map((task) => {
            return <Task key={task.id} isDone={task.isDone} content={task.content}/>
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
