import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import profile from '../public/profile.jpeg'
export default function SideContentHouse(){


    return(
    
        <div className="Home-content">
            <h4 className="mt-8 font-semibold text-white">Hello i am</h4>
            <h1 className="mt-5 font-extrabold text-xl lg:text-5xl text-gray-100">Maleye Rane Ndoye</h1>
            <div className="Home-content-img">
                <div>
                    
                    <p className='w-full h-full text-white px-4 text-md font-bold '>
                        I am web developper with extensive experience for over 3 years<br />
                        My expertise is to create and website design, graphic design and many more ...

                    </p>
                
                </div>
                <div className=' w-96 h-96 bg-gradient-to-r from-[#292448]  via-[#302b63]   to-[#171337] rounded-full flex flex-row items-center justify-center'>
                     <img className="w-72 h-72 rounded-full" src={profile}/>
                </div>
                <div className=' flex flex-row space-x-7'>
                    <button className=' w-32 h-10 rounded-2xl border-2 text-white text-lg font-semibold hover:scale-105'>see portfolio</button>
                    <button className=' w-32 h-10 rounded-2xl border-2 text-white text-lg font-semibold hover:scale-105'>write me</button>
                </div>
            </div>



            
        </div>


)
}
{/* <div className="mt-12 flex flex-row space-x-24">
            <span className='text-white text-xl cursor-pointer hover:text-cyan-200'><FaGithub/></span>
            <span className='text-white text-xl cursor-pointer hover:text-cyan-200'><FaInstagram/></span>
            <span className='text-white text-xl cursor-pointer hover:text-cyan-200'><FaLinkedin/></span>
</div> */}