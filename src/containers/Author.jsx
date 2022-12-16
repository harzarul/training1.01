
import styles from "../styles";
import { AuthorCard } from "../components";
import { authors } from '../constants';

const Author = () => {
  return (
    <section className={`${styles.paddingsX}`}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary capitalize font-bold text-[36px] my-[3rem]">
          List of Authors
        </h1>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full">
          {authors.map((person, index) => (
            <AuthorCard key={person.id}
              img={person.img}
              name={person.name}
              title={person.title}
              fb={person.fb}
              twitter={person.twitter}
              insta={person.insta}
              linked={person.linked}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Author