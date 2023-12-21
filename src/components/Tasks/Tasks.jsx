import React, { useState } from 'react';
import Task from '../Task/Task';
import { useDrop } from "react-dnd";

const Tasks = () => {

    const [todo, setTodo] = useState([
        { name: "Player 1" },
        { name: "Player 2" },
        { name: "Player 3" },
        { name: "Player 4" },
        { name: "Player 5" },
    ])

    const [ongoing, setOngoing] = useState([
        { name: "Ongoing 1" },
    ])


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
        <div className='grid grid-cols-3 px-3'>
            <div className='mx-auto border w-full' ref={addToTodoRef}>
                <h3 className='text-2xl font-bold'>Todo</h3>
                {todo.map((element, i) => (
                    <Task
                        key={i}
                        element={element}
                        taskType="todo"
                        onDrop={addToTodo}
                        index={i}
                    />
                ))}
            </div>
            <div className='mx-auto border w-full' ref={addToOngoingRef}>
                <h3 className='text-2xl font-bold'>Ongoing</h3>
                {ongoing.map((element, i) => (
                    <Task
                        key={i}
                        element={element}
                        taskType="ongoing"
                        onDrop={addToOngoing}
                        index={i}
                    />
                ))}
            </div>
            <div className='mx-auto border w-full'>
                <h3 className='text-2xl font-bold'>Completed</h3>
            </div>
        </div>
    );
};

export default Tasks;