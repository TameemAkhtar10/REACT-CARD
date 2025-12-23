import React from 'react'

const Card = ({ post }) => {
    return (
        <div className='flex flex-col relative w-[250px] bg-[#FCFCFC] rounded-2xl h-[320px] p-1 text-white'>
            <img src="https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2t5fGVufDB8fDB8fHww" className='h-[35%] w-[100%] object-cover rounded-2xl' alt="" />
            <i className="ri-add-line text-black bg-[#EFEFEF] font-light absolute top-2 right-3 h-6 w-6 text-center rounded-full"></i>
            <img src={post.image} className='h-[65px] object-cover  w-[65px] absolute top-20 left-23 rounded-full' alt="" />
            <h1 className='text-black mt-7 text-center font-bold pt-1 pb-1 text-xl' >{post.username}</h1>
            <p className='text-gray-500 text-center text-sm px-2 '>{post.caption}</p>
            <div id="countcard" className='h-17 text-black bg-[#F6F6F6] rounded-2xl flex justify-evenly items-center mt-2 text-m '>
                <div>
                    <h1 className='font-bold'>{post.likes}</h1>
                    <p className='text-gray-500'>likes </p>
                </div>
                <div>
                    <h1 className='font-bold'>{post.posts}</h1>
                    <p className='text-gray-500'>posts</p>
                </div>
                <div>
                    <h1 className='font-bold'>{post.views}</h1>
                    <p className='text-gray-500'>views</p>
                </div>
            </div>
            <div id="icon" className='text-black p-2 flex justify-center gap-6 items-center'>
                <i class="ri-instagram-line"></i>
                <i class="ri-twitter-x-fill"></i>
                <i class="ri-threads-fill"></i>
            </div>
        </div>
    )
}

export default Card
