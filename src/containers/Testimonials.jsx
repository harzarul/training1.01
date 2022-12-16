
import { HeadText } from "../components";
import styles from "../styles";
import { testimonials } from "../constants";
import {TestimonialCard} from '../components';

const Testimonials = () => {
  return (
    <section className={`${styles.paddingsY}`}>
      <div className="flex md:flex-row flex-col justify-around items-center bg-red px-[2rem] py-[3.2rem]">
        <div className="flex flex-col items-start justify-center md:border-r-4 md:border-b-0 border-b-4 pd:mb-0 pb-[2rem] border-yellow">
          <p className="text-[16px] text-primary uppercase tracking-widest mb-[2rem] font-bold">
            testimonials
          </p>
          <HeadText head='what people say about our blog'/>
        </div>

        <div className="w-1/2 mx-[2rem] md:my-0 my-[2rem]">
          {testimonials.map((testit, index) => (
            <TestimonialCard key={testit.id}
              text={testit.text}
              img={testit.img}
              name={testit.name}
              location={testit.location}
              i={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials