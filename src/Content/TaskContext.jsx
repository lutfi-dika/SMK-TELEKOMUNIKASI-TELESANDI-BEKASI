import React, { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks((prev) => [...prev, task]);
    };

    const markAsSubmitted = (taskId, studentName) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId
                    ? { ...task, submittedBy: [...(task.submittedBy || []), studentName] }
                    : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, markAsSubmitted }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);
