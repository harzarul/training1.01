import React from 'react'

const CategoryCard = ({icon, head, text}) => {
  return (
    <div className='border-solid border-2 m-[1.5rem] p-[1rem] flex flex-col justify-center items-start hover:bg-yellow'>
        <img className='w-[38px] h-[38px]'
            src={icon}
            alt="icon" />
        <h1 className='text-primary text-[28px] font-bold my-[1rem]'>
            {head}
        </h1>
        <p className='text-[16px] text-primary mb-[2rem]'>
          {text}  
        </p>
    </div>
  )
}

export default CategoryCard