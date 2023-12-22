
import React from 'react';


const UserTypeSection = () => {



  return (

    <div className='bg-blue-300'>


        <div className='px-10 py-10'>
          <div>
            <h2 className="text-3xl font-bold mt-12 mb-8 text-center text-gray-700">Who Uses This Website?</h2>
          </div>
          <div className="carousel w-full h-72 border shadow-2xl">

  
              <div id="slide1" className="carousel-item relative w-full">
                <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Developers</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Empower your coding journey with our task manager designed to enhance your productivity. Organize, prioritize, and collaborate seamlessly on coding projects with powerful tools and integrations.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide5" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div>



              <div id="slide2" className="carousel-item relative w-full">
              <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Corporate Professionals</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Transform the way you work in the corporate world. Our task manager offers a streamlined solution for project management, team collaboration, and efficient task tracking to boost your productivity.</p>

                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div>



              <div id="slide3" className="carousel-item relative w-full">
              <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Bankers</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Navigate the dynamic world of banking with precision. Our task manager provides essential tools for financial data analysis, task prioritization, and efficient project management, ensuring you stay ahead in the industry.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div>

              <div id="slide4" className="carousel-item relative w-full">
              <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Designers</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Fuel your creative process with our task manager built for designers. Seamlessly manage design projects, collaborate with teams, and stay inspired with a platform tailored to elevate your artistic endeavors.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
              </div>

              <div id="slide5" className="carousel-item relative w-full">
              <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Students</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Excel in your academic journey with our task manager designed for students. Stay organized, manage assignments efficiently, and enhance your productivity with tools crafted to support your learning goals.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>


          </div>
        </div>

    </div>

  );
};

export default UserTypeSection;