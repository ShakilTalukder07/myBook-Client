import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Media = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allPost')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10 mx-5'>
            {
                posts.length && posts.map(singlePost => <Post
                    key={singlePost._id}
                    singlePost={singlePost}
                ></Post>)
            }
        </div>
    );
};

export default Media;