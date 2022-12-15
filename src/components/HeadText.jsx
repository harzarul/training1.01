import React from 'react'

const HeadText = ({head, kelas}) => {
  return (
    <div className='flex flex-col justify-center items-start'>
        <h1 className={`sm:text-[28px] text-[20px] text-primary font-bold capitalize ${kelas}`}>
            {head}
        </h1>
        <p className='sm:text-[16px] text-[14px] text-primary max-w-[551px]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate esse, nostrum exercitationem voluptatum molestiae excepturi! Voluptatibus iste, nihil 
        </p>
    </div>
  )
}

export default HeadText