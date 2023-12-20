import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Successfully submitted !");
        e.target.reset()
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        })
    };
    return (
        <div className=''>

            <div className="hero min-h-[558px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg?w=740&t=st=1703091856~exp=1703092456~hmac=f1bebb0f6f4345a078d66df0246c33af25ba528b10dbed305d91eeaa1b359673)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" w-96 lg:w-[30rem]">
                        <div className="container mx-auto mt-8">

                            <div className="w-full mx-auto p-4 mt-20">

                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <h1 className="text-3xl font-semibold mb-4 text-gray-600">Contact Us</h1>
                                    <form onSubmit={handleSubmit} className="text-black">
                                        <div className="mb-4">

                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Your Name"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">

                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Your Email"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">

                                            <input
                                                type="phone"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Your Phone Number"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Message"
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                                rows="3"
                                                required
                                            ></textarea>
                                        </div>
                                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;


