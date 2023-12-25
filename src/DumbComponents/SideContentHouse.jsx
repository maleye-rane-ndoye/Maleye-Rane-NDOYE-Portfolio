import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import profile from '../public/profile.jpeg'
export default function SideContentHouse(){


    return(
    
        <div className="Home-content">
            <h4 className="mt-8 font-semibold text-white">Hello i am</h4>
            <h1 className="mt-10 font-extrabold text-xl lg:text-5xl text-gray-100">Maleye Rane Ndoye</h1>
            <p className="mt-8 text-white">Full stack Developer</p>
            <div className="Home-content-img">
                <img className="w-auto h-full " src={profile}/>
                <div className='w-auto h-4 bg-white rounded-b-md'></div>
            </div>

            <div className="mt-12 flex flex-row space-x-24">
                        <span className='text-white text-xl cursor-pointer hover:text-cyan-200'><FaGithub/></span>
                        <span className='text-white text-xl cursor-pointer hover:text-cyan-200'><FaInstagram/></span>
                        <span className='text-white text-xl cursor-pointer hover:text-cyan-200'><FaLinkedin/></span>
            </div>


            
        </div>

        
    )
}