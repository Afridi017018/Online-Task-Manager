import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UserProfile = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>

           <div className='w-1/2 mx-auto p-5 my-20'>

        
           <img className='h-44 w-44 rounded-full p-1 border border-gray-600 mx-auto my-10 shadow-xl' src= {user?.photoURL} alt="" />

           <h2 className='text lg:text-2xl font-bold my-2 text-center'>Shahid Afridi </h2>
           <h2 className='text lg:text-2xl font-bold my-2 text-center'>ssssshahidafridi017018@gmail.com</h2>
           
           
           </div>

        </div>
    );
};

export default UserProfile;