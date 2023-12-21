import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom/dist';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../providers/AuthProvider';
import { FaHome, FaTasks } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";


const DashBoard = () => {

    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogOut = async () => {
        await logOut();
        navigate('/')
    }

    return (
        <div className='flex flex-col lg:flex-row'>

            <div className='md:w-full lg:w-64 bg-gradient-to-r from-cyan-500 to-blue-400 lg:min-h-screen text-white font-bold'>
                <div>

                    <div className='mx-auto w-40 h-16 lg:w-full lg:px-10 lg:h-16 lg:mb-3 cursor-pointer'><img onClick={() => navigate('/')} src="/taskLogo.png" alt="" /></div>

                    <ul className='menu p-4 gap-5'>
                        <li>
                            <NavLink to='/'><FaHome /> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/user-profile'><CgProfile /> Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/tasks'><FaTasks /> Tasks</NavLink>
                        </li>




                    </ul>


                </div>


                <div className='px-5'>
                    <button onClick={handleLogOut} className='bg-red-700 text-white px-2 py-1 rounded-lg mt-3 mb-5 lg:mb-0 text-sm flex justify-start items-center gap-2 h-9 w-full'><LuLogOut /> Logout</button>
                </div>



            </div>

            <div className='flex-1'>
                <Outlet />
            </div>



            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    );
};

export default DashBoard;