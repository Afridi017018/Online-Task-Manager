import React, { useState } from 'react';
import Task from '../Task/Task';
import { useDrop } from "react-dnd";


const Tasks = ({ tasks, todo, ongoing, completed, allTasks }) => {


    const [{ isOver: isOngoingOver }, addToOngoingRef] = useDrop({
        accept: ["todo", "ongoing", "completed"],
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    const [{ isOver: isTodoOver }, addToTodoRef] = useDrop({
        accept: ["todo", "ongoing", "completed"],
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    const [{ isOver: isCompletedOver }, addToCompletedRef] = useDrop({
        accept: ["todo", "ongoing", "completed"],
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });


    const addToTodo = async (item) => {

        const response = await fetch('https://task-management-system23.vercel.app/update-task-status', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: item._id, status: "todo" }),
        });

        const result = await response.json();
        // console.log(result);
        allTasks();

    };
    const addToOngoing = async (item) => {
        const response = await fetch('https://task-management-system23.vercel.app/update-task-status', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: item._id, status: "ongoing" }),
        });

        const result = await response.json();
        // console.log(result);
        allTasks();
    };


    const addToCompleted = async (item) => {
        const response = await fetch('https://task-management-system23.vercel.app/update-task-status', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: item._id, status: "completed" }),
        });

        const result = await response.json();
        // console.log(result);
        allTasks();
    };


    return (
        <div className='grid grid-cols-3 px-3 gap-2'>
            <div className='mx-auto border border-purple-500 w-full' ref={addToTodoRef}>
                <h3 className={`text-xl font-bold text-white ${isTodoOver ? "bg-black" : "bg-gradient-to-r from-purple-500 to-pink-500"} py-2 text-center`}>Todo</h3>
                {
                    todo.length > 0 ?
                        todo.map((element, i) => (
                            <Task
                                key={element._id}
                                element={element}
                                taskType={element.status}
                                onDrop={isOngoingOver ? addToOngoing : isCompletedOver ? addToCompleted : addToTodo}
                                index={i}
                                allTasks={allTasks}
                            />
                        ))
                        :
                        <p className='text-gray-500 font-bold text-center my-5'>Empty List</p>
                }
            </div>
            <div className='mx-auto border border-green-700 w-full' ref={addToOngoingRef}>
                <h3 className={`text-xl font-bold text-white ${isOngoingOver ? "bg-black" : "bg-gradient-to-r from-green-500 to-indigo-500"} py-2 text-center`}>Ongoing</h3>
                {
                    ongoing.length > 0 ?
                        ongoing.map((element, i) => (
                            <Task
                                key={element._id}
                                element={element}
                                taskType={element.status}
                                onDrop={isCompletedOver ? addToCompleted : isOngoingOver ? addToOngoing : addToTodo}
                                index={i}
                                allTasks={allTasks}
                            />
                        ))
                        :
                        <p className='text-gray-500 font-bold text-center my-5'>Empty List</p>
                }
            </div>
            <div className='mx-auto border border-orange-600 w-full' ref={addToCompletedRef}>
                <h3 className={`text-xl font-bold text-white ${isCompletedOver ? "bg-black" : "bg-gradient-to-r from-orange-500 to-red-700"} py-2 text-center`}>Completed</h3>
                {
                    completed.length > 0 ?
                        completed.map((element, i) => (
                            <Task
                                key={element._id}
                                element={element}
                                taskType={element.status}
                                onDrop={isTodoOver ? addToTodo : isCompletedOver ? addToCompleted : addToOngoing}
                                index={i}
                                allTasks={allTasks}
                            />
                        ))
                        :
                        <p className='text-gray-500 font-bold text-center my-5'>Empty List</p>
                }
            </div>
        </div>
    );
};

export default Tasks;