import MidImg from '../images/cennn-Photoroom.png';
import { AiOutlineTwitter, AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Mid(){
 
    return <section className='flex flex- col md:flex-row px-5 py-32 bg-secondary justify-center'>
        <div className='md:w-1/2 flex flex-col'> 
            <h1 className=' text-black  text-6xl font-hero-font'>HI,<br/> Iam <span className='text-black'>Saran</span> kumar 
           <p className='text-2xl'>Iam  a Front End Developer
           </p>
        </h1>
       <div className='flex py-10 '>
        <a href='https://www.linkedin.com/in/sarankumar23/' className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
        <a href='https://www.linkedin.com/in/sarankumar23/'className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
        <a href='https://www.linkedin.com/in/sarankumar23/'className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
       </div>
        </div>
       
        <img className='md:w-1/3' src={MidImg} alt='not support'/>
    </section>
}   