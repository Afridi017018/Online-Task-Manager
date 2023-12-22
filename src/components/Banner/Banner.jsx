import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="hero min-h-[558px]" style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/planning-flat-design-concept-illustration-people-characters_9209-5421.jpg?w=740)' }}>
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