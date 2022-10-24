import style from './style.module.css'
import { PlusCircle } from 'phosphor-react'

export const CreateTask = () => {
    return (
        <div className={style.createTaskBox}>
            <input 
                type="text" 
                name="taskText" 
                id="taskText"
                placeholder='Adicione uma nova tarefa' 
                className={style.taskInput}
            />
            <button 
                type="submit"
                className={style.createTaskButton}
            >
                Criar <PlusCircle weight='bold' size={18}/>
            </button>
        </div>
    )
}