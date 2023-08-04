"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TasksContext";
import { toast } from "react-hot-toast";

function FormNewTask({ params }){
    const router = useRouter();
    const { tasks, createTask, updateTask } = useTasks();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();

    useEffect(() => {
        // Si se quiere editar debe existir params.id
        if(!params.id) return;

        const task = tasks.find(task => task.id == params.id);
        if(task){
            setValue("title", task.title);
            setValue("description", task.description);
        }
    }, [])

    const onSubmit = handleSubmit((task) => {
        if(params.id){
            updateTask(params.id, task);
            toast.success("Task updated succesfully");
        } else {
            createTask(task);
            toast.success("Task created succesfully");
        }

        router.push("/");
    })

    return(
        <form className="form container" onSubmit={onSubmit}>
            <input
                className="form__input"
                type="text"
                placeholder="Write a title"
                {...register("title", { required: true })}
            />
            {
                errors.title && (
                    <span style={{ color: "#f00" }}>This field is required</span>
                )
            }

            <textarea
                className="form__input"
                cols="30"
                rows="3"
                placeholder="Write a description"
                { ...register("description", { required: true }) }
            ></textarea>
            {
                errors.description && (
                    <span style={{ color: "#f00" }}>This field is required</span>
                )
            }
            
            <input className="button" type="submit" value="Save" />
        </form>
    )
}

export default FormNewTask;