import { Trash } from 'phosphor-react'
import style from './style.module.css'
interface TaskProps {
    id: string,
    content: string,
    isComplete: boolean,
    handleComplete: (id: string, isCompleteTask: boolean) => void
}

export const Task = ({id, content, isComplete, handleComplete}: TaskProps) => {

    return (
        <div className={style.taskContent}>
            <input 
                type="checkbox" 
                name="check" 
                id={id}
                className={style.checkInput}
                checked={isComplete}
                onChange = {() => handleComplete(id, !isComplete)}
            />
            <label htmlFor={id} className={style.title}>
                <span className={style.checkSpan}></span>
                <span className={style.titleSpan}>
                    {content}
                </span>
            </label>

            <button title='Delete' className={style.trashButton}>
                <Trash size={16}/>
            </button>
        </div>  
    )
}