import style from './style.module.css'

export const TaskInformations = () => {
    return(
        <section className={style.taskInfo}>
            <div className={style.totalTasksCreated}>
                <p>Tarefas criadas</p>
                <div className={style.totalCounter}>5</div>
            </div>
            <div className={style.completedTasks}>
                <p>Tarefas concluídas</p>
                <div className={style.completedCounter}>2 de 5</div>
            </div>
        </section>
    )
}
