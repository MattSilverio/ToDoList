import {Clipboard} from 'phosphor-react'

import styles from './Warning.module.css'

export default function Warning(){

    return(
        <div className={styles.warning}>
            <Clipboard size={56}/>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
    )
}