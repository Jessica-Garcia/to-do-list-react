import style from './style.module.css'
import { TaskListEmpty } from '../TaskListEmpty'
import { PlusCircle } from 'phosphor-react'
import { Task } from '../Task'
import { v4 as uuidv4 } from 'uuid'
import React, { ChangeEvent, useEffect, useState } from 'react'

type TasksObject = {
    id: string,
    content: string,
    isComplete: boolean,
}

export const TaskBox = () => {

    const [newTaskContent, setNewTaskContent] = useState('')
    const [taskList, setTaskList] = useState<TasksObject[]>([])

    useEffect(() => {
        const localStorageItems = localStorage.getItem('taskList')
        setTaskList(localStorageItems ? JSON.parse(localStorageItems) : [])

    }, [])

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

        const localStorageItems = localStorage.getItem('taskList')
        const taskList = localStorageItems ? JSON.parse(localStorageItems) : []
        
        localStorage.setItem("taskList", JSON.stringify([...taskList, newTask]))

        setTaskList(currentValue => ([...currentValue, newTask]))
        setNewTaskContent('')
    }

    const handleIsCompleteChange = (id: string, taskNewStatus: boolean) => {
        const newTaskList = taskList.map(task => {
            if(task.id === id ){
                return{
                    ...task,
                    isComplete: taskNewStatus
                }
            }
            return task
        })
        localStorage.setItem("taskList", JSON.stringify([...newTaskList]))
        setTaskList(newTaskList)
    }

    const deleteTask = (id: string) => {
        const taskListWithoutDeletedTask = taskList.filter(task => task.id !== id)
        
        localStorage.setItem("taskList", JSON.stringify([...taskListWithoutDeletedTask]))

        setTaskList(taskListWithoutDeletedTask)
    }

    const isTaskContentEmpty = newTaskContent.length === 0

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
                    required
                />
                <button 
                    type="submit"
                    className={style.createTaskButton}
                    disabled={isTaskContentEmpty} 
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
                                        onDeleteTask = {deleteTask}
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