
import styles from "../styles";
import {FIns} from '../constants';

const FeaturedIn = () => {
  return (
    <section className="lg:flex hidden flex-1 flex-row justify-between items-center my-[4rem] bg-secondary px-[2rem] py-[1rem] rounded-lg">
      {FIns.map((logo,index) => (
        <img className={`w-[136px] ${index === 0 ? 'h-[52px]' : 'h-[32px]' }`}
          src={logo.img}
          alt="img"
          key={logo.id}/>
      ))}
    </section>
  )
}

export default FeaturedIn