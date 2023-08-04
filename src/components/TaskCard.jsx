"use client";

import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function TaskCard({ task }){
    const router = useRouter();
    const { deleteTask } = useTasks();

    const handleDelete = (e, id) => {
        e.stopPropagation();

        deleteTask(id);
        toast.success("Task deleted succesfully");
    }
    
    return(
        <div className="task" onClick={() => router.push(`/edit/${task.id}`)}>
            <h2 className="task__title title">{task.title}</h2>
            <p className="task__description">{task.description}</p>

            <button
                className="task__button button button--red"
                onClick={(e) => handleDelete(e, task.id)}
            >
                Delete
            </button>
        </div>
    )
}

export default TaskCard;