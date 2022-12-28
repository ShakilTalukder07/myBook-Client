import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiMessageSquare } from "react-icons/fi";
import './Post.css'

const Post = ({ singlePost }) => {

    const [btnColor, setBtnColor] = useState(false)

    const { _id, image, name } = singlePost

    function handleClick(){
        setBtnColor( btnColor => !btnColor)
    }

    let toggleClassCheck = btnColor ? ' active' : ""

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-64 w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions ">
                    <Link onClick={handleClick}> <FiHeart className={`heart${toggleClassCheck}`}></FiHeart> </Link>
                    <FiMessageSquare className='comment'></FiMessageSquare>
                    <Link to={`/allPost/${_id}`} className="btn h-6 ml-36 ">View details</Link>
                </div>
            </div>
        </div>
    );
};

export default Post;