import { PlusCircle } from "phosphor-react";
import logo from "../../assets/logoToDo.png";
import style from "./style.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={style.header}>
      <img src={logo} />

      <form onSubmit={handleSubmit} className={style.taskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}