
import styles from "../styles";
import {Button} from '../components';

const Hero = () => {
  return (
    <section className='hero__background' id='home'>
      <div className="overlay">
        <div className={`h-[90vh] flex flex-col justify-start items-start ${styles.paddings}`}>
          <p className="text-white lg:text-[16px] text-[12px] uppercase mt-[4rem] tracking-widest">
            Posted On <span className="font-semibold">StartUp</span>
          </p>
          <h1 className="lg:text-[56px] text-[50px] text-white sm:leading-[90px] leading-[70px] font-semibold capitalize">
            Step-by-Step guide to choosing <br className="lg:block hidden" /> great font pairs
          </h1>
          <p className="text-secondary lg:text-[16px] text-[12px] capitalize my-[1rem] ">
            By <span className="text-yellow border-r-2 border-white pr-1 mr-2">James West </span>May 23, 2022
          </p>
          <p className="text-secondary lg:text-[16px] text-[12px] capitalize max-w-[600px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore illo nulla ullam numquam modi eligendi aut quod rerum cumque! Deleniti?
          </p>
          <div className="my-[2rem]">
            <Button title='Read More >'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero