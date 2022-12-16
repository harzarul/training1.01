
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const AuthorCard = ({img, name, title, fb, twitter, insta, linked}) => {
  return (
    <div className='flex justify-center items-center flex-col mx-[1rem] md:my-0 my-[1rem] px-[2rem] py-[1rem] bg-secondary hover:bg-red'>
        <img className='w-[128px] h-[128px] rounded-full mb-[1.2rem]'
            src={img}
            alt="image"/>
        <h1 className='text-[28px] text-primary font-bold mb-[.5rem]'>
            {name}
        </h1>
        <p className='text-[14px] text-primary mb-[1rem]'>
            {title}
        </p>
        <div className='flex flex-row justify-center items-center'>
            <a href={fb}><BsFacebook className='w-[16px] h-[16px] mx-2'/></a>
            <a href={twitter}><BsTwitter className='w-[16px] h-[16px] mx-2'/></a>
            <a href={insta}><BsInstagram className='w-[16px] h-[16px] mx-2'/></a>
            <a href={linked}><BsLinkedin className='w-[16px] h-[16px] mx-2'/></a>
        </div>
    </div>
  )
}

export default AuthorCard