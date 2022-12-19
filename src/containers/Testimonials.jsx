
import { useState } from "react";
import { HeadText } from "../components";
import styles from "../styles";
import { testimonials } from "../constants";
import {TestimonialCard} from '../components';
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs';


const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const lenght = testimonials.length - 1;

    const prevData = () => {
        setCurrentIndex(currentIndex === 0 ? lenght : currentIndex - 1);
    };
    const nextData = () => {
        setCurrentIndex(currentIndex === lenght ? 0 : currentIndex + 1)
    };

    console.log(currentIndex);

  return (
    <section className={`${styles.paddingsY}`}>
      <div className="flex md:flex-row flex-col justify-around items-center bg-red px-[2rem] py-[3.2rem]">
        <div className="flex flex-col items-start justify-center md:border-r-4 md:border-b-0 border-b-4 pd:mb-0 pb-[2rem] border-yellow">
          <p className="text-[16px] text-primary uppercase tracking-widest mb-[2rem] font-bold">
            testimonials
          </p>
          <HeadText head='what people say about our blog'/>
        </div>

        <div className="w-1/2 mx-[2rem] md:my-0 my-[2rem] relative">
          {testimonials.map((testit, index) => (
            <TestimonialCard toggle={`${index === currentIndex ? 'flex' : 'hidden' }`} 
              key={testit.id}
              text={testit.text}
              img={testit.img}
              name={testit.name}
              location={testit.location}
              i={index}/>
          ))}
          <div className='flex flex-row justify-around items-center my-[1rem] absolute sm:bottom-0 bottom-2 md:right-[5rem] right-0'>
              <BsArrowLeftShort className='sm:w-[48px] w-[30px] sm:h-[48px] h-[30px] sm:mx-2 m-0 hover:bg-yellow rounded-full'
                  onClick={prevData}/>
              <BsArrowRightShort className='sm:w-[48px] w-[30px] sm:h-[48px] h-[30px] sm:mx-2 m-0 hover:bg-yellow rounded-full'
                  onClick={nextData}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials