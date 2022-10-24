import { Task } from '../Task'
import style from './style.module.css'

export const FilledTaskList = () => {
    return(
        <section className={style.taskList}>
            <Task/>
        </section>
    )
}
