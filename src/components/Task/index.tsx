import { RadioButton, Trash } from 'phosphor-react'
import style from './style.module.css'

export const Task = () => {
    return (
        <div className={style.taskContent}>
            <input 
                type="radio" 
                name="check" 
                id="check"
                className='checkInput'
            />
            <label htmlFor="check">Title</label>
            <button title='Delete' className={style.trashButton}>
                <Trash size={24}/>
            </button>
        </div>
    )
}