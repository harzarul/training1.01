
import styles from "../styles";
import {categories} from '../constants';
import CategoryCard from "../components/CategoryCard";

const Category = () => {
  return (
    <section className={`flex flex-col justify-center items-center ${styles.paddingsY}`}>
      <h1 className="sm:text-[36px] text-[30px] text-primary font-bold mb-[2rem]">
        Choose A Category
      </h1>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full">
        {categories.map((cate, index) => (
          <h1>
            <CategoryCard icon={cate.icon} head={cate.head} text={cate.text}/>
          </h1>
        ))}
      </div>
    </section>
  )
}

export default Category