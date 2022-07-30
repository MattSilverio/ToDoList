import Circle from '../assets/circle.svg'
import CheckCircle from '../assets/check-circle.svg'
import { Trash } from 'phosphor-react'

import styles from './Task.module.css'
    
interface TaskProps{
    isDone: boolean;
    content: string;
}

export function Task({isDone, content}: TaskProps){

    return(
        <div className={styles.task}>
            {
                isDone && 
                <>
                    <img src={CheckCircle} />
                    <p className={styles.taskDone}>{content}</p>
                </>
            
                ||
            
                !isDone && 
                <>
                    <img src={Circle} />
                    <p>{content}</p>
                </>
            }
            
            <Trash className={styles.trashIcon} size={24}/>
        </div>
    )
}