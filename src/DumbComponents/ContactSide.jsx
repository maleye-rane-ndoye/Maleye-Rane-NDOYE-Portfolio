import {FaWhatsapp,FaLinkedin} from 'react-icons/fa'

export default function ContactSide(){



    return(
          <div className='w-full h-full rounded-r-md m-1 bg-gradient-to-l from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-auto  flex flex-col items-center justify-center'>

               <h1 className='text-white text-3xl font-bold m-2'>Contact Me</h1>
               <span className='text-white text-lg mb-3'>Get in touch</span>

               <div className='lg:w-3/4 h-full w-full overflow-y-scroll flex flex-col items-center p-4 space-y-8 lg:flex lg:flex-row  lg:space-x-8 lg:space-y-0 lg:overflow-hidden'>

                    <div className='w-5/6 h-full  flex flex-col items-center space-y-4 p-4'>
                         <div className='text-white text-lg font-semibold lg:text-xl'>talk to me</div>
                         <div className='text-[#0f0c29] w-full h-96 bg-white rounded-lg drop-shadow-2xl flex flex-col items-center space-y-6 p-4 font-semibold truncate'>
                             <span class=" text-red-400 material-symbols-rounded text-3xl font-extrabold">mail</span>
                              <h1>email</h1>
                              <p>maleye-rane.ndoye@laplateforme.io</p>
                              <div className='flex flex-row space-x-2 items-center'>
                                   <span>Write me</span>
                                   <span className='material-symbols-rounded cursor-pointer'>arrow_forward</span>
                              </div>
                         </div>
                         <div className='text-[#0f0c29] w-full h-96 bg-white rounded-lg drop-shadow-2xl flex flex-col items-center space-y-6 p-4 font-semibold truncate'>
                             <span className='text-3xl text-[#247a21]'><FaWhatsapp/></span>
                              <h1>Wathsapp</h1>
                              <p>+33.07.51.17.50.01</p>
                              <div className='flex flex-row space-x-2 items-center'>
                                   <span>Write me</span>
                                   <span className='material-symbols-rounded cursor-pointer'>arrow_forward</span>
                              </div>
                         </div>
                         <div className='text-[#0f0c29] w-full h-96 bg-white rounded-lg drop-shadow-2xl flex flex-col items-center space-y-6 p-4 font-semibold truncate'>
                             <span className='text-3xl text-[#6356df]'><FaLinkedin/></span>
                              <h1>LinkedIn</h1>
                              <p>maleye-ndoye</p>
                              <div className='flex flex-row space-x-2 items-center '>
                                   <span>Write me</span>
                                   <span className='material-symbols-rounded cursor-pointer '>arrow_forward</span>
                              </div>
                         </div>
                         
                    </div>


                    <div className='text-[#0f0c29] w-5/6 h-full drop-shadow-2xl flex flex-col items-center justify-center'>
                         <div className='text-white text-lg font-semibold mb-3 lg:text-xl'>Write me your project</div>
                         <form action="" className='flex flex-col items-center bg-white rounded-lg  p-4 space-y-32'>
                              <input type="text" placeholder='name' className='w-full h-14 outline-none border-4 rounded-lg p-6 '/>
                              <input type="text" placeholder='email' className='w-full h-14 outline-none border-4 rounded-lg p-6 '/>
                             
                              <textarea type="text" placeholder='project' className='w-full outline-none border-4 rounded-lg p-6'  name="" id="" cols="30" rows="5"></textarea>
                              <button className='w-64 h-14  p-3 bg-slate-50 text-[#231c64] rounded-lg text-xl font-semibold border-4 hover:border-none hover:drop-shadow-2xl hover:bg-gradient-to-l from-[#110863] via-[#524aad] to-[#353570] hover:text-white'>submit</button>
                         </form>
                    </div>


               </div>


          </div>
          
    )
}