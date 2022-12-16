
import { Button } from "../components"
import styles from "../styles"
import Navbar from "./Navbar"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <section className='bg-blue w-full flex flex-col justify-start items-center py-[2rem] px-[2rem]'
      id='contactus'>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
        <div className="bg-gray py-[8rem] px-[3rem] flex md:flex-row flex-col justify-between items-center z-0">
          <div className="mx-[3rem]">
            <h1 className="sm:text-[36px] text-[27px] text-white font-semibold capitalize">
              Subscribe to our news letter to get latest updates and news
            </h1>
          </div>
          <div className="flex sm:flex-row flex-col justify-center items-center my-[2rem]">
            <input className="mx-[1rem] px-4 py-2 text-[1.3rem] bg-transparent text-secondary border-solid border-2 border-blue rounded-md sm:mb-0 mb-[1rem] xs:w-auto w-[14rem]"
              type="text"
              placeholder="Enter Your Email"/>
            <Button title='Subscribe'/>
          </div>
        </div>
        <div className="flex ss:flex-row flex-col justify-between items-center mt-[1.2rem]">
          <div className="flex flex-col items-start justify-center">
            <p className="text-[16px] text-white">
              Finstreet 118 2561 Fintown
            </p>
            <p className="text-[16px] text-white">
              Hello@finsweet.com  020 7993 2905
            </p>
          </div>
          <div className='flex flex-row justify-center items-center my-[1rem]'>
            <a href='https://www.facebook.com/'><BsFacebook className='w-[16px] h-[16px] mx-2 text-white'/></a>
            <a href='https://twitter.com/'><BsTwitter className='w-[16px] h-[16px] mx-2 text-white'/></a>
            <a href='https://www.instagram.com/'><BsInstagram className='w-[16px] h-[16px] mx-2 text-white'/></a>
            <a href='https://www.linkedin.com/'><BsLinkedin className='w-[16px] h-[16px] mx-2 text-white'/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer