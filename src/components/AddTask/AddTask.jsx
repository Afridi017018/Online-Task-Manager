import React, { useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { toast } from 'react-toastify';

const AddTask = ({allTasks}) => {

    const [modal, setModal] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation (you can add more validation logic as needed)
        if (!title || !description || !deadline) {
            alert('Please fill in all required fields.');
            return;
        }

        // Create a new task object
        const newTask = {
            title,
            description,
            deadline,
            priority,
            status: "todo"
        };

        // Call the addTask function from the parent component
        // addTask(newTask);

        // console.log(newTask)

        const response = await fetch('http://localhost:4000/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });
        // const result = await response.json();
        // console.log(result)
        allTasks();
        toast.dismiss();
        toast.success("Successfully Added !")
        // Clear the form fields after submitting
        setTitle('');
        setDescription('');
        setDeadline('');
        setPriority('low');
        setModal(false);
    }


    return (
        <div>

            <div className='text-center my-20'>
                <button onClick={() => setModal(true)} className="btn btn-active bg-blue-700 text-white w-96 hover:text-blue-700">Add Task</button>
            </div>




            <PureModal
                // header="Your header"
                // footer={
                //     <div>
                //         <button>Cancel</button>
                //         <button>Save</button>
                //     </div>
                // }
                width='500px'
                isOpen={modal}
                // closeButton="close"
                // closeButtonPosition="bottom"
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
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add Task
                    </button>
                </form>


            </PureModal>



        </div>
    );
};

export default AddTask;