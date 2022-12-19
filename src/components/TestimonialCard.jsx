
import { testimonials } from "../constants";

const TestimonialCard = ({text, img, name, location, i, toggle}) => {

  return (
    <div className={`${toggle} flex-col items-start justify-between`}>
        <div className='flex sm:justify-start justify-center items-center'>
            <p className='text-primary md:text-[24px] text-[16px] leading-[1.5rem] font-semibold mb-[3rem]'>
                {text}
            </p>
        </div>

        <div className='flex sm:flex-row flex-col justify-between items-start w-full'>
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
        </div>
    </div>
  )
}

export default TestimonialCard