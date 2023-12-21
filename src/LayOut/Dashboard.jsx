import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom/dist';


const DashBoard = () => {

    // const { userInfo, logOut } = useAuth();
    const navigate = useNavigate();

    return (
        <div className='flex flex-col lg:flex-row'>

            <div className='md:w-full lg:w-64 bg-gray-600 lg:min-h-screen text-white font-bold'>
                <div>

                    {/* <div className='mx-auto w-40 h-16 lg:w-full lg:px-10 lg:h-16 lg:mb-3 cursor-pointer'><img onClick={() => navigate('/')} src="/aid-camp-logo.png" alt="" /></div> */}

                    <ul className=' menu p-4 gap-5'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/user-profile'>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/tasks'>Tasks</NavLink>
                        </li>

                        


                    </ul>


                </div>


                <div>
                    <button onClick={() => logOut()} className='mx-8 bg-red-500 text-white px-2 py-1 rounded-lg mt-3 mb-5 lg:mb-0 text-sm'>Logout</button>
                </div>



            </div>

            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;