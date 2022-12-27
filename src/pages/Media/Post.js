import React from 'react';

const Post = ({singlePost}) => {

    const  { image, name} = singlePost

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64 w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Post;