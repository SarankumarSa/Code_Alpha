import  ResumImg from '../images/jh.png';

export default function  Resume(){
    return <section   className='flex bg-primary px-20 flex-col md:flex-row' id=' rrsss'>
       <div className='w-1/2 flex justify-end '> 
        <img  className='w-[400px]'src={ResumImg}/>
       </div>
       <div className='w-1/2 flex justify-center'>
       <div className='flex flex-col justify-center'>
       <h1 className='text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold'>Resume</h1>
      <p>You can view My Resume <a className='btn' href=''>Download</a></p>
       </div>
        
       </div>
    </section>
}