"use client";

import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TasksContext";

function Home(){
    const { tasks } = useTasks();

    return(
        <div className="container">
            <h1 className="title">Tasks</h1>
            <div className="tasks">
                {
                    tasks.map(task => (
                        <TaskCard task={task} key={task.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;