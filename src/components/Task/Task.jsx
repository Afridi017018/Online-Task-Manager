import React from 'react';
import { useDrag } from "react-dnd";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Task = ({ element, taskType, index, onDrop }) => {


    const [{ isDragging }, dragRef] = useDrag({
        type: taskType,
        item: () => ({ ...element, index }),
        end: (element, monitor) => {
            const dropResult = monitor.getDropResult();

            if (element && dropResult) {
                // console.log(element)
                onDrop(element);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div ref={dragRef} className="border mx-1 my-2 p-1">
            <h4 className='text-lg font-bold mb-1'>{element.title}</h4>
            <p className='text-gray-600'>{element.deadline}</p>
            <p className='capitalize font-bold text-gray-600'>{element.priority} Priority</p>
            <p className='text-gray-600 my-1'>{element.description}</p>
            <div className='flex justify-start gap-2 my-2'>
                <button><FaEdit className='text-lg text-blue-700' /></button>
                <button><RiDeleteBin6Fill className='text-lg text-red-700' /></button>
            </div>
        </div>
    );
};

export default Task;