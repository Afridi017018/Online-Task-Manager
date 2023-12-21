import React from 'react';
import { useDrag } from "react-dnd";

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
        <div ref={dragRef}>
            {element.name}
        </div>
    );
};

export default Task;