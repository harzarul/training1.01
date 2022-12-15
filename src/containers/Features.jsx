
import styles from "../styles";
import { Featured } from "../constants/images";
import { HeadText, Button, PostCard } from "../components";
import {posts} from '../constants';

const Features = () => {
  return (
    <section className={`flex md:flex-row flex-col justify-center items-center my-[2rem] ${styles.paddingsX}`}>
      <div className="flex flex-col justify-start items-start mr-[2rem] w-full">
        <h1 className="sm:text-[36px] text-[25px] text-primary mb-[2rem] font-bold">
          Featured Post
        </h1>
        <img className="w-[669px] h-auto"
          src={Featured}
          alt="featured" />
        <p className="text-primary lg:text-[16px] text-[12px] capitalize my-[1rem] ">
            By <span className="text-primary border-r-2 border-yellow pr-1 mr-2">John Doe </span>May 23, 2022
        </p>
        <div className="mb-[2rem]">
          <HeadText head='Lorem ipsum, dolor sit amet consectetur adipisicing.'/>
        </div>

        <Button title='Read More >'/>
      </div>

      <div className="w-full">
        <h1 className="sm:text-[36px] text-[25px] text-primary md:mt-0 mt-[2rem] font-bold"s>
          All Post
        </h1>
        {posts.map((post, index) => (
          <PostCard name={post.name} date={post.date} text={post.text} key={post.id}/>
        ))}
      </div>
    </section>
  )
}

export default Features