import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import AddTask from '../../components/AddTask/AddTask';
import Tasks from '../../components/Tasks/Tasks';
import { AuthContext } from '../../providers/AuthProvider';
import Loading from '../Loading/Loading';

const AllTasks = () => {

    const { user } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    const [tasks, setTasks] = useState([]);

    const [todo, setTodo] = useState([]);
    const [ongoing, setTOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    const allTasks = async () => {
        const response = await fetch(`https://task-management-system23.vercel.app/get-tasks/${user?.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(newTask),
        });

        const result = await response.json();
        // console.log(result.result)
        setTasks(result.result);

        const todoFilter = result.result.filter((element) => element.status === "todo");
        const ongoingFilter = result.result.filter((element) => element.status === "ongoing");
        const completedFilter = result.result.filter((element) => element.status === "completed");

        setTodo(todoFilter);
        setTOngoing(ongoingFilter);
        setCompleted(completedFilter);

        setLoading(false)

    }

    useEffect(() => {
        allTasks();
    }, [user, user?.email])


    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div>
                <h2 className='text-gray-600 text-2xl font-bold my-5 text-center underline underline-offset-8'>Tasks</h2>
            </div>
            <div>
                <AddTask allTasks={allTasks} />
            </div>

            <div className='my-10'>
                <Tasks tasks={tasks} todo={todo} ongoing={ongoing} completed={completed} allTasks={allTasks} />
            </div>

        </div>
    );
};

export default AllTasks;