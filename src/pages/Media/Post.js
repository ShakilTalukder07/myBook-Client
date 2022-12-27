import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({singlePost}) => {

    const  { _id, image, name} = singlePost

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64 w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                <Link to={`/allPost/${_id}`} className="btn btn-primary">View details</Link>
                </div>
            </div>
        </div>
    );
};

export default Post;