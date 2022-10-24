import style from './style.module.css'
import { TaskInformations } from '../TaskInformations'
import { TaskListEmpty } from '../TaskListEmpty'
import { FilledTaskList } from '../FilledTaskList'

export const TaskBox = () => {
    return (
        <main className={style.tasksContainer}>
            <TaskInformations/>
            {/* <TaskListEmpty/> */}
            <FilledTaskList/>
        </main>
    )
}