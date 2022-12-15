
import styles from "../styles";
import { Discovery } from "../constants/images";
import { Button } from "../components";

const Discover = () => {
  return (
    <section className={`flex justify-center items-center ${styles.paddingsY}`}>
      <div className="w-full h-auto flex justify-start items-start relative">
        <img className="z-0"
          src={Discovery}
          alt="discover" />
        <div className="absolute bottom-0 right-0 flex flex-col justify-start items-start sm:p-[2rem] p-[1.3rem] md:w-[700px] w-auto h-auto z-10 bg-secondary md:rounded-tl-[2rem] rounded-0">
          <p className="sm:text-[20px] text-[16px] text-primary tracking-wide font-bold uppercase sm:my-[2rem] my-0">
            Why we started
          </p>
          <h1 className="sm:text-[30px] text-[25px] text-primary font-bold capitalize">
            It started out as a simple idea and evolved into our passion
          </h1>
          <p className="sm:text-[16px] text-[14px] text-primary max-w-[551px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima possimus, voluptatum saepe non doloremque explicabo delectus fugit dicta exercitationem, modi adipisci architecto perferendis.
          </p>
          <div className="sm:my-[2rem] my-1 w-full">
            <Button title='Discover >'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover