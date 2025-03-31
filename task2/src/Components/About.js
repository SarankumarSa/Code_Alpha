import  aboutImg from '../images/sdfj-Photoroom.png';

export default function  About(){
    return <section className='flex bg-primary px-20 flex-col md:flex-row ' id='about'>
       <div className='w-1/2'> 
        <img src={aboutImg}/>
       </div>
       <div className='w-1/2 flex justify-center'>
       <div className='flex flex-col justify-center'>
       <h1 className='text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[170px] font-bold'>About Me</h1>
       <p className='pd-5 text-3xl'>Hi,My name is Saran.I am a Front End web developer.Iam created Front end web site using React and TailwindCSS </p>
       </div>
        
       </div>
    </section>
}