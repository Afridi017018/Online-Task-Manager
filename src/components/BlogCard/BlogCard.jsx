import React from 'react';
import { useState } from 'react';

const BlogCard = ({ element }) => {

    const [seeMore, setSeeMore] = useState(false)

    const fullText = (text) => {
        return (
            <>
                {text}
                {" "}
                <button onClick={() => setSeeMore(false)} className='text-blue-600 font-bold'>See less</button>

            </>
        )
    }

    const shortText = (text) => {
        return (
            <>
                {text.slice(0, 500)}
                {" ... "}
                <button onClick={() => setSeeMore(true)} className='text-blue-600 font-bold'>See more</button>

            </>
        )
    }


    return (
        <div className='my-10 bg-slate-100 py-5 px-3 rounded'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold'>{element.title}</h2>
            </div>

            <hr className='my-3' />

            <div>
                <p className='text-gray-700'>{seeMore ? fullText(element.blog) : shortText(element.blog)}</p>
            </div>
        </div>
    );
};

export default BlogCard;