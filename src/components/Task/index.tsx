import style from "./style.module.css";
import { ITask } from "../../@types/ITask";
import { CheckCircle, Trash } from "phosphor-react";

interface Props {
  task: ITask;
  onCompleteTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onCompleteTask, onDeleteTask }: Props) {
  return (
    <div className={style.task}>
      <button
        className={style.checkContainer}
        onClick={() => onCompleteTask(task.id)}
      >
        {task.isCompleted ? <CheckCircle /> : <div />}
      </button>

      <p className={task.isCompleted ? style.textCompleted : ""}>
        {task.title}
      </p>

      <button className={style.deleteButton} onClick={() => onDeleteTask(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}