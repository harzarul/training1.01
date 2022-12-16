
import { Button, HeadText } from "../components";
import styles from "../styles";

const CTA = () => {
  return (
    <section className={`flex flex-col justify-center items-center ${styles.paddingsY}`}>
      <div className="my-[1rem]">
        <HeadText head='Join our team to be a part of our story'/>
      </div>
      <div className="mt-[2rem]">
        <Button title='Join Now'/>
      </div>
    </section>
  )
}

export default CTA