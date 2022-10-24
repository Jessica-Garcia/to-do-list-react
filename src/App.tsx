import style from './App.module.css'
import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { TaskBox } from './components/TaskBox'

export const App = () => {

  return (
    <div className={style.App}>
      <Header/>
      <TaskBox/>
    </div>
  )
}

