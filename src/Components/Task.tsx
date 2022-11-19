import Circle from '../assets/circle.svg'
import CheckCircle from '../assets/check-circle.svg'
import { Trash } from 'phosphor-react'

import styles from './Task.module.css'
import { getNumOfTasksDone, ObjectTask } from '../App';
import { useEffect, useState } from 'react';
    
interface TaskProps{
    isDone: boolean;
    content: string;
    id: number;
    setTotalTasks: Function;
    totalTasks: Array<ObjectTask>;
    setTasksDone: Function;
}

export function Task({isDone, content, id, setTotalTasks,totalTasks, setTasksDone}: TaskProps){
    const [taskIsDone, setTaskIsDone] = useState(isDone)

    function removeItem(id: Number){
        const newArrayTask = totalTasks.filter((item) => item.id !== id)
        setTotalTasks(newArrayTask)
    }

    function makeTaskDone(id: Number){
        
        setTaskIsDone(true)
   
    }

    function makeTaskNotDone(id : Number){
        
        setTaskIsDone(false)
        
    }

    return(
        <div className={styles.task}>
            {
                taskIsDone && 
                <>
                    <img src={CheckCircle} onClick={() => makeTaskNotDone(id)}/>
                    <p className={styles.taskDone}>{content}</p>
                </>
            
                ||
            
                !taskIsDone && 
                <>
                    <img src={Circle} onClick={() => makeTaskDone(id)}/>
                    <p>{content}</p>
                </>
            }
            
            <Trash className={styles.trashIcon} size={24} onClick={() => removeItem(id)}/>
        </div>
    )
}