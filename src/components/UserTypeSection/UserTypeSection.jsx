
import React from 'react';


const UserTypeSection = () => {



  return (

    <div className='bg-blue-200'>


        <div className='px-10 py-10'>
          <div>
            <h2 className="text-3xl font-bold mt-12 mb-8 text-center text-gray-700">Who Uses This Website?</h2>
          </div>
          <div className="carousel w-full h-52 border shadow-2xl">

  
              <div id="slide1" className="carousel-item relative w-full">
                <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Developers</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Explore a vast array of coding resources, tools, and frameworks to boost your development skills and stay updated with the latest trends in technology.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide5" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div>



              <div id="slide2" className="carousel-item relative w-full">
              <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Corporate Professionals</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Enhance your productivity and collaboration within your corporate environment. Access tools and strategies to streamline workflows and foster team communication.</p>

                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div>



              <div id="slide3" className="carousel-item relative w-full">
              <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Bankers</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Access comprehensive financial data and analytics to make informed decisions. Stay ahead in the dynamic world of banking with cutting-edge tools and insights.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div>

              <div id="slide4" className="carousel-item relative w-full">
              <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Designers</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Immerse yourself in a world of creative design inspirations and powerful tools. Stay updated with design trends and elevate your artistic endeavors to new heights.</p>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
              </div>

              <div id="slide5" className="carousel-item relative w-full">
              <div className="w-full flex flex-col justify-center items-center">
                  <p className='font-bold text-2xl'>Students</p>
                  <p className='w-2/4 mt-5 text-center text-gray-500 font-bold'>Access a wealth of educational materials and resources to support your learning journey. Whether you are a high school student or pursuing higher education, find valuable insights to excel academically.</p>

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