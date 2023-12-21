import React from 'react';
import AddTask from '../../components/AddTask/AddTask';
import Tasks from '../../components/Tasks/Tasks';

const AllTasks = () => {
    return (
        <div>
            <div>
                <AddTask />
            </div>

            <div>
                <Tasks />
            </div>

        </div>
    );
};

export default AllTasks;