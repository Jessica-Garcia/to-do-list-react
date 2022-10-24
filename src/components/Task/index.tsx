import { RadioButton, Trash } from 'phosphor-react'
import style from './style.module.css'

export const Task = () => {
    return (
        <div className={style.taskContent}>
            <input 
                type="checkbox" 
                name="check" 
                id="check"
                className={style.checkInput}
            />
            <label htmlFor="check" className={style.title}>
                <span className={style.checkSpan}></span>
                <span className={style.titleSpan}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in, fugit commodi odit et ut id omnis sequi. 
                </span>
            </label>

        
            <button title='Delete' className={style.trashButton}>
                <Trash size={16}/>
            </button>
        </div>   
    )
}