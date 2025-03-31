import gg from '../images/lk.jpg'
import gg1 from '../images/appl.jpg'
import gg2 from '../images/lanna.jpg'
export default function Projects(){
    const config={
        Projects : [
            {
                image: 'gg',
                description:'ddd',
                link:''
            },
            {
                image: 'gg1',
                description:'dd1d',
                link:''
            },
            {
                image: 'gg2',
                description:'dd11d',
                link:''
            },
        
        

        ]
    }
    return<section id='projects' className="flex  flex-col py-5 px-5 justify-center bg-secondary text-black ">
        <div className="w-1/2">
        <div className="flex justify-center">
        <h1 className="text-4xl text-black border-b-4 border-[#2b2d77] mb-5 w-[140px] font-bold" >Projects</h1>

        </div>
          
        </div>
        <div className="w-full ">
             <div className='flex px-10 gap-10'>
                <div  className='relative'>   
                     <img  className = ' h-[200px]' src={gg} />
                     <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration hover:opacity-100'>
                        <p className='text-center py-5'>
                            <a href='https://github.com/SarankumarSa/OCTANET_SEP.git'>ViewCode <br/></a>
                            A projects about ME
                        </p>
                     </div>
                </div>
             <div className='relative'>  
                 <img className = ' h-[200px]' src={gg1} />
                 <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration hover:opacity-100'>
                        <p className='text-center py-5'>
                            <a href='https://github.com/SarankumarSa/ApplicationManagement.git'>ViewCode<br/></a>
                            A project application management system
                        </p>
                     </div>
             </div >
              <div className='relative'>
              <img className = ' h-[200px]' src={gg2} />
              <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration hover:opacity-100'>
                        <p className='text-center py-5'>
                        <a href='https://github.com/SarankumarSa/SaranCreativeLoginPage.git'>ViewCode<br/></a>
                             A front end page creating landing page 
                        </p>
                     </div>
              </div>
              

            </div>
           
        </div>
    </section>
}