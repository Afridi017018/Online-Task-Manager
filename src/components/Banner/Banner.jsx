import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="hero min-h-[558px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/people-calendar-time-management-concept_23-2148822826.jpg?w=740&t=st=1703089931~exp=1703090531~hmac=de1369c49c7ae0610632fdd6f3f3ac5c912d68c32d6156a33ef9e637420944bf)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold">Task Manager</h1>
                        <p className="mb-5">Your Ultimate Destination for Streamlined To-Do Lists and Efficient Task Management.</p>
                        <button onClick={()=> navigate('/dashboard/tasks')} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl hover:text-blue-950">Let’s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;