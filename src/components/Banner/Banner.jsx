import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[558px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Task Manager</h1>
                        <p className="mb-5">Your Ultimate Destination for Streamlined To-Do Lists and Efficient Task Management.</p>
                        <button className="btn btn-primary text-xl">Let’s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;