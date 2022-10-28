import { Header } from '../../components/Header'
import { TaskBox } from '../../components/TaskBox'
import style from './style.module.css'

export const ToDo = () => {

    return (
      <div className={style.toDoPage}>
        <Header/>
        <TaskBox/>
      </div>
    )
  }