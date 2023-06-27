import { ClipboardText } from "phosphor-react";
import { ITask } from "../../@types/ITask";
import { Task } from "../Task";
import style from "./style.module.css";

interface Props {
  tasks: ITask[];
  onCompleteTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Tasks({ tasks, onCompleteTask, onDeleteTask }: Props) {
  const tasksNumber = tasks.length;
  const doneTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={style.tasks}>
      <header className={style.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksNumber}</span>
        </div>

        <div>
          <p className={style.textPurple}>Concluídas</p>
          <span>
            {doneTasks} de {tasksNumber}
          </span>
        </div>
      </header>

      <div className={style.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={style.empty}>
            <ClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}