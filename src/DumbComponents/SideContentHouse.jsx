import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import profile from '../public/profile.jpeg'
export default function SideContentHouse(){


    return(
    
        
            <div className="Home-content">
                    <div className='lg:flex flex-col items-center '>
                        <h1 className=" text-xl font-semibold text-gray-100  mt-10">Hello i am</h1>
                        <h2 className=" font-extrabold text-2xl lg:text-3xl text-gray-100 ">Maleye Rane Ndoye</h2>
                    </div>

                    <div className='w-full h-auto p-3 text-white font-light rounded border-2 m-0 mt-5 lg:border-none lg:flex lg:flex-col lg:items-center'>
                           <p>  
                                I am web developper with extensive experience
                                for over 3 years. My expertise is to create and website design, 
                                graphic design and many more ...
                            </p> 
                    </div>

                    <div className='sm:hidden w-full h-full m-0 flex flex-col items-center justify-around bg-white'>
                          <div className='w-full h-full bg-slate-50'>1</div>
                          <div className='w-full h-full bg-slate-200'>2</div>
                          <div className='w-full h-full bg-slate-400'>3</div>
                    </div>
                   
                    
                    <div className='m-0 flex flex-row items-center justify-center space-x-7'>
                        <button className=' w-32 h-10 m-0 rounded-2xl border-2 text-white text-lg font-semibold hover:scale-105'>see portfolio</button>
                        <button className=' w-32 h-10 m-0 rounded-2xl border-2 text-white text-lg font-semibold hover:scale-105'>write me</button>
                    </div>


                    <div className="mt-12 flex flex-row items-center justify-center mb-5 space-x-24">
                            <span className='text-white text-xl cursor-pointer hover:scale-125'><FaGithub/></span>
                            <span className='text-white text-xl cursor-pointer hover:scale-125'><FaInstagram/></span>
                            <span className='text-white text-xl cursor-pointer hover:scale-125'><FaLinkedin/></span>
                    </div>
            </div>

)
}

//<img className="w-72 h-72 rounded-full flex flex-row items-center" src={profile}/>