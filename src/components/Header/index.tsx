import style from './style.module.css'
import logo from '../../assets/logoToDo.png'
import { CreateTask } from '../CreateTask'

export const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <CreateTask/>
        </header>
    )
}
