import React from 'react'

const PostCard = ({name, date, text}) => {
  return (
    <div className='sm:ml-[2rem] ml-0 p-[1rem] hover:bg-secondary'>
        <p className="text-primary lg:text-[16px] text-[12px] capitalize my-[1rem] ">
            By <span className="text-primary border-r-2 border-yellow pr-1 mr-2">{name} </span>{date}
        </p>
        <h1 className='text-[20px] sm:w-[369px] w-auto'>
            {text}
        </h1>
    </div>
  )
}

export default PostCard