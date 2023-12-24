import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import profile from '../public/profile.jpeg'
import DownloadPdf from './DownloadPdf'
export default function SideContentHouse(){


    return(
    
        <div className="w-full flex flex-col flex-1 rounded-r-md m-1 bg-gradient-to-l from-[#0f0c29] via-[#302b63] to-[#24243e] items-center ml-0">
            <h4 className="mt-8 font-semibold text-white">Hello i am</h4>
            <h1 className="mt-10 font-extrabold text-xl lg:text-5xl text-gray-100">Maleye Rane Ndoye</h1>
            <p className="mt-8 text-white">Full stack Developer</p>
            <div className=" w-52 h-56 lg:h-64 lg:w-72 bg-white shadow-xl shadow-slate-900 mt-2 rounded-b-md flex-col flex  items-center">
                <img className="w-auto h-full " src={profile}/>
                <div className='w-auto h-4 bg-white rounded-b-md'></div>
            </div>

            <div className="mt-12 flex flex-row space-x-24">
                        <span className='text-white text-xl cursor-pointer hover:text-cyan-200'><FaGithub/></span>
                        <span className='text-white text-xl cursor-pointer hover:text-cyan-200'><FaInstagram/></span>
                        <span className='text-white text-xl cursor-pointer hover:text-cyan-200'><FaLinkedin/></span>
            </div>


            <div className='w-full h-full bg-white m-2'>
                <DownloadPdf/>
            </div>
        </div>

        
    )
}