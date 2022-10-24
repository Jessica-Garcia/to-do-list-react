import style from './style.module.css'
import clipboard  from '../../assets/clipboard.png'

export const TaskListEmpty = () => {
    return (
        <section className={style.taskListEmpty}>
            <img src={clipboard} alt="clipboard" />
            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </section>
    )
}