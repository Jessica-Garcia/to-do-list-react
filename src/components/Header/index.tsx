import style from './style.module.css'
import logo from '../../assets/logoToDo.png'

export const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.logo}>
                <img src={logo} alt="Logo" />
            </div>
        </header>
    )
}
