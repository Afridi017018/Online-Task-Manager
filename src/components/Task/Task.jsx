import React, { useState } from 'react';
import { useDrag } from "react-dnd";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Task = ({ element, taskType, index, onDrop, allTasks }) => {

    const [modal, setModal] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState('low');

    const [{ isDragging }, dragRef] = useDrag({
        type: taskType,
        item: () => ({ ...element, index }),
        end: (element, monitor) => {
            const dropResult = monitor.getDropResult();

            if (element && dropResult) {
                // console.log(dropResult)
                onDrop(element);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });


    const handleDelete = async () => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const response = await fetch(`http://localhost:4000/delete-task/${element._id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // body: JSON.stringify({ id: item._id, status: "completed" }),
                });

                const result = await response.json();
                // console.log(result);
                allTasks();

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });


    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation (you can add more validation logic as needed)
        if (!title || !description || !deadline) {
            alert('Please fill in all required fields.');
            return;
        }

        // Create a new task object
        const updateTask = {
            id: element._id,
            title,
            description,
            deadline,
            priority,
        };


        const response = await fetch('http://localhost:4000/update-task', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateTask),
        });

        allTasks();
        toast.dismiss();
        toast.success("Successfully Updated !")
        // Clear the form fields after submitting
        setTitle('');
        setDescription('');
        setDeadline('');
        setPriority('low');
        setModal(false);
    }


    const handleGetSIngleTask = async () => {

        const response = await fetch(`http://localhost:4000/get-single-task/${element._id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ id: item._id, status: "completed" }),
        });

        const result = await response.json();

        // console.log(result.result)
       setTitle(result.result.title)
       setDescription(result.result.description)
       setDeadline(result.result.deadline)
       setPriority(result.result.priority)

       setModal(true);
    }







    return (
        <div ref={dragRef} className="border mx-1 my-2 p-1">
            <h4 className='text-lg font-bold mb-1'>{element.title}</h4>
            <p className='capitalize font-bold text-gray-600'>{element.priority} Priority</p>
            <p className='text-gray-600'>{element.deadline}</p>
            <p className='text-gray-600 my-1'>{element.description}</p>
            <div className='flex justify-start gap-2 my-2'>
                <button onClick={handleGetSIngleTask}><FaEdit className='text-lg text-blue-700' /></button>
                <button onClick={handleDelete}><RiDeleteBin6Fill className='text-lg text-red-700' /></button>
            </div>







            <PureModal

                width='500px'
                isOpen={modal}

                onClose={() => {
                    setModal(false);
                    return true;
                }}
            >



                <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Task</h2>
                    <label className="block mb-4">
                        <span className="text-gray-700">Title:</span>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-input mt-1 block w-full border p-2"
                            required
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-gray-700">Description:</span>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-textarea mt-1 block w-full border p-2"
                            required
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-gray-700">Deadline:</span>
                        <input
                            type="date"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            className="form-input mt-1 block w-full border p-2"
                            required
                        />
                    </label>
                    <label className="block mb-4">
                        <span className="text-gray-700">Priority:</span>
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="form-select mt-1 block w-full border p-2"
                        >
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </label>
                    <div className='text-center'>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Update
                    </button>
                    </div>
                </form>


            </PureModal>




        </div>
    );
};

export default Task;