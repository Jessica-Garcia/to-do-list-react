import style from './style.module.css'
import { TaskListEmpty } from '../TaskListEmpty'
import { PlusCircle } from 'phosphor-react'
import { Task } from '../Task'
import { v4 as uuidv4 } from 'uuid'
import React, { ChangeEvent, useState } from 'react'

type TasksObject = {
    id: string,
    content: string,
    isComplete: boolean,
}

export const TaskBox = () => {

    const [newTaskContent, setNewTaskContent] = useState('')
    const [taskList, setTaskList] = useState<TasksObject[]>([])

    const handleIsCompleteChange = (id: string, myNewStatus: boolean) => {
        const newTaskList = taskList.map(task => {
            if(task.id === id ){
                return{
                    ...task,
                    isComplete: myNewStatus
                }
            }
            return task
        })

        setTaskList(newTaskList)
    }
    console.log(taskList)
    const handleTaskContent = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskContent(() => e.target.value)
    }

    const handleAddNewTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const newTask= {
            id: uuidv4(),
            content: newTaskContent,
            isComplete: false,
        }

        setTaskList(currentValue => ([...currentValue, newTask]))
        setNewTaskContent('')
    }

    return (
        <main className={style.tasksContainer}>
            <form autoComplete='off' onSubmit={handleAddNewTask} className={style.createTaskBox}>
                <input 
                    type='text'
                    name='taskText' 
                    id='taskText'
                    placeholder='Adicione uma nova tarefa' 
                    className={style.taskInput}
                    onChange={handleTaskContent}
                    value={newTaskContent}
                />
                <button 
                    type="submit"
                    className={style.createTaskButton}
                    
                >
                    Criar <PlusCircle weight='bold' size={18}/>
                </button>
            </form>
            <section className={style.taskInfo}>
                <div className={style.totalTasksCreated}>
                    <p>Tarefas criadas</p>
                    <div className={style.totalCounter}>{taskList.length}</div>
                </div>
                <div className={style.completedTasks}>
                    <p>Tarefas concluídas</p>
                    <div className={style.completedCounter}>
                        {taskList.filter(task => task.isComplete === true).length} de {taskList.length}
                    </div>
                </div>
            </section>
            
            <section>
                {
                    taskList.length === 0 ? 
                        <TaskListEmpty/> :
                        <section className={style.taskList}>
                        {
                            taskList.map(task => {
                                return (
                                    <Task
                                        key={task.id}
                                        id={task.id}
                                        content={task.content}
                                        isComplete={task.isComplete}
                                        handleComplete={handleIsCompleteChange}
                                    />
                                )
                            })
                        }
                    </section>
                }
            </section>
        </main>
    )
}