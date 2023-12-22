import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UserProfile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <div>
                <h2 className='text-gray-600 text-2xl font-bold my-5 text-center underline underline-offset-8'>Profile</h2>
            </div>
            <div className='w-1/2 mx-auto p-5 my-14'>


                <img className='h-44 w-44 rounded-full p-1 border border-gray-600 mx-auto my-10 shadow-xl' src={user?.photoURL} alt="" />

                <h2 className='text lg:text-2xl font-bold my-2 text-center'>{user?.displayName}</h2>
                <h2 className='text lg:text-2xl font-bold my-2 text-center'>{user?.email}</h2>


            </div>

        </div>
    );
};

export default UserProfile;