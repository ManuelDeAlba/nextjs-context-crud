"use client";

import { createContext, useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const tasksContext = createContext();

export const useTasks = () => {
    const values = useContext(tasksContext);
    if(!values) throw new Error("useTasks must be used within a TasksProvider")
    return values;
}

export function TasksProvider({ children }){
    const [tasks, setTasks] = useLocalStorage("tasks", []);

    const createTask = (task) => {
        setTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                ...task
            }
        ])
    }

    const deleteTask = (id) => {
        let filteredTasks = tasks.filter(task => task.id != id);
        setTasks(filteredTasks);
    }

    const updateTask = (id, newData) => {
        let editedTasks = tasks.map(task => task.id == id ? { ...task, ...newData } : task);

        setTasks(editedTasks);
    }

    return (
        <tasksContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask,
                updateTask
            }}
        >
            {children}
        </tasksContext.Provider>
    )
}