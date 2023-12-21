import React, { useState } from 'react';
import Task from '../Task/Task';
import { useDrop } from "react-dnd";


const Tasks = ({tasks, todo, ongoing, completed, allTasks}) => {

    
    const [{ isOver: isOngoingOver }, addToOngoingRef] = useDrop({
        accept: ["todo", "ongoing", "completed"],
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
      });

      const [{ isOver: isTodoOver }, addToTodoRef] = useDrop({
        accept: ["todo", "ongoing", "completed"],
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
      });

      const addToOngoing = (item) => {
        console.log(item);
        // setPlayer((prev) => prev.filter((_, i) => item.index !== i));
        // setTeam((prev) => [...prev, item]);
      };
      const addToTodo= (item) => {
        console.log(item);
        // setPlayer((prev) => prev.filter((_, i) => item.index !== i));
        // setTeam((prev) => [...prev, item]);
      };
    return (
        <div className='grid grid-cols-3 px-3 gap-2'>
            <div className='mx-auto border border-red-700 w-full' ref={addToTodoRef}>
                <h3 className='text-xl font-bold text-center text-white bg-red-700 py-2'>Todo</h3>
                {
                    todo.length > 0 ?
                    todo.map((element, i) => (
                        <Task
                            key={element._id}
                            element={element}
                            taskType={element.status}
                            onDrop={addToTodo}
                            index={i}
                        />
                    ))
                    :
                    <p className='text-gray-500 font-bold text-center my-5'>Empty List</p>
                }
            </div>
            <div className='mx-auto border border-green-700 w-full' ref={addToOngoingRef}>
                <h3 className='text-xl font-bold text-center text-white bg-green-700 py-2'>Ongoing</h3>
                {
                    ongoing.length > 0 ?
                    ongoing.map((element, i) => (
                        <Task
                            key={element._id}
                            element={element}
                            taskType={element.status}
                            onDrop={addToOngoing}
                            index={i}
                        />
                    ))
                    :
                    <p className='text-gray-500 font-bold text-center my-5'>Empty List</p>
                }
            </div>
            <div className='mx-auto border border-orange-600 w-full text-center'>
                <h3 className='text-xl font-bold text-white bg-orange-600 py-2'>Completed</h3>
            </div>
        </div>
    );
};

export default Tasks;