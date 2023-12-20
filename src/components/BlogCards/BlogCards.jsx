import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard';

const BlogCards = () => {

    const allBlogs = useLoaderData();

    return (
        <div className='container mx-auto px-5 lg:px-0'>
            {
                allBlogs.map((element)=>(
                    <BlogCard key={element.id} element ={element} />
                ))
            }

          
        </div>
    );
};

export default BlogCards;