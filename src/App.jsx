
import styles from './styles/index';
import { Navbar, Hero, Features, AboutUs, Category, Discover, Author, FeaturedIn, Testimonials, CTA, Footer} from './containers';


const App = () => {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className={`${styles.paddingsX} ${styles.flexCenter} bg-black`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className='w-full'>
          <Hero/>
        </div>
      </div>

      <div className={`${styles.paddingsX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Features/>
          <AboutUs/>
          <Category/>
          <Discover/>
          <Author/>
          <FeaturedIn/>
          <Testimonials/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App