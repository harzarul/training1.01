
import { useState } from 'react';
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs';
import { testimonials } from "../constants";

const TestimonialCard = ({text, img, name, location, i}) => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const lenght = testimonials.length - 1;

    const prevData = () => {
        setCurrentIndex(currentIndex === 0 ? lenght : currentIndex - 1);
    };
    const nextData = () => {
        setCurrentIndex(currentIndex === lenght ? 0 : currentIndex + 1)
    };

    console.log(currentIndex);
    console.log(i);


  return (
    <div className={`${i === currentIndex ? 'flex' : 'hidden'} flex-col items-start justify-between`}>
        <div className='flex sm:justify-start justify-center items-center'>
            <p className='text-primary md:text-[24px] text-[16px] leading-[1.5rem] font-semibold mb-[3rem]'>
                {text}
            </p>
        </div>

        <div className='flex sm:flex-row flex-col justify-between items-center w-full'>
            <div className='flex flex-row justify-start items-center'>
                <img className='w-[48px] h-[48px]'
                    src={img}
                    alt="image" />
                <div className='flex flex-col items-start justify-around'>
                    <h1 className='text-[24px] text-primary font-semibold'>
                        {name}
                    </h1>
                    <p className='text-[16px] text-black'>
                        {location}
                    </p>
                </div>
            </div>

            <div className='flex flex-row justify-around items-center my-[1rem]'>
                <BsArrowLeftShort className='w-[48px] h-[48px] sm:mx-[1rem] mr-[2rem] hover:bg-yellow rounded-full'
                    onClick={prevData}/>
                <BsArrowRightShort className='w-[48px] h-[48px] sm:mx-[1rem] ml-[2rem] hover:bg-yellow rounded-full'
                    onClick={nextData}/>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard