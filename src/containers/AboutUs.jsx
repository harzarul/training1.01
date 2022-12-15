
import { HeadText } from "../components";
import styles from "../styles";

const AboutUs = () => {
  return (
    <section className={`${styles.paddingsX}`}>
      <div className="bg-secondary flex sm:flex-row flex-col justify-start items-start w-full">
        <div className="p-[2rem] flex flex-col justify-center items-start sm:w-1/2 w-auto">
          <p className="uppercase font-semibold text-[16px] tracking-wider mb-[1rem]">
            About Us
          </p>
          <HeadText head='We are a community of content writers who share their learnings' kelas='hover:font-semibold'/>
          <p className="my-2 text-[18px] font-bold text-purple">
            {`Read More >`}
          </p>
        </div>
        
        <div className="p-[2rem] flex flex-col justify-center items-start sm:w-1/2 w-auto">
          <p className="uppercase font-semibold text-[16px] tracking-wider mb-[1rem]">
            Our Mission
          </p>
          <HeadText head='Creating valuable content for creatives all around the world' kelas='hover:font-semibold'/>
          <p className="my-2 text-[18px] font-bold text-purple">
            {`Read More >`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs