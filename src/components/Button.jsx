import React from 'react'

const Button = ({title}) => {
  return (
    <div className='sm:w-[200px] w-[150px] lg:h-[56px] h-[50px] bg-yellow rounded-full px-4 flex justify-center items-center font-semibold cursor-pointer'>
        <p>{title}</p>
    </div>
  )
}

export default Button