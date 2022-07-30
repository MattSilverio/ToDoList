import { useState } from 'react'
import './global.css'
import styles from "./App.module.css"
import Logo from './assets/logo.svg'
import { CheckCircle, Circle, Clipboard, PlusCircle, Trash } from 'phosphor-react'
import Warning from './Components/Warning'


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
          {/* <Warning /> */}
          <div className={styles.task}>
            <Circle size={17.45} />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
            <Trash size={24}/>
          </div>

          <div className={styles.task}>
            <Circle size={17.45} />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
            <Trash size={24}/>
          </div>

          <div className={styles.task}>
            <Circle size={17.45} />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
            <Trash size={24}/>
          </div>

          <div className={styles.task}>
            <CheckCircle size={17.45} />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
            <Trash size={24}/>
          </div>

          <div className={styles.task}>
            <CheckCircle size={17.45} />
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
            <Trash size={24}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
