import FolioSide from "./FolioSide"
import {NavLink } from "react-router-dom"
import imagePaths from "./imagesPath"



export const workWebLink = [

  {id:"web-1",name:"Portfolio",url:"https://maleye-rane-ndoye.students-laplateforme.io/", img:"web"},
  {id:"web-2",name:"Web site",url:"", img:"web"},
  {id:"web-3",name:"Web site",url:"", img:"web"},
  {id:"web-4",name:"Web site",url:"", img:"web"},
  {id:"web-5",name:"Web site",url:"", img:"web"},
  {id:"web-6",name:"Web site",url:"", img:"web"},
  {id:"web-7",name:"Web site",url:"", img:"web"},
  {id:"web-8",name:"Web site",url:"", img:"web"},


]

export default function FolioWeb(){

    
    return(
        
       <FolioSide title = "My websites" subtitle = "Most recent Websites">

                        <div className="w-full h-full flex flex-col items-center p-4 gap-4 overflow-auto lg:grid lg:gap-4 lg:grid-cols-3 lg:grid-row-2">


                                    {workWebLink.map((linkItem) => {

                                        return(

                                            <div key={linkItem.id} className=" w-5/6  bg-white rounded-md drop-shadow-2xl flex flex-col items-center space-y-6 p-4 font-semibold truncate">

                                            <img className="w-full h-full rounded-2xl " src={imagePaths[linkItem.img]}/>
                                            <div className="w-full h-auto flex flex-col">
                                                <span className="text-lg font-bold">{linkItem.name}</span>
                                                <NavLink to={linkItem.url}><div className="flex flex-row items-center space-x-2 rounded-lg p-2 hover:ease-in-out duration-500 hover:space-x-4 hover:font-semibold hover:text-white hover:bg-gradient-to-l from-[#231a7a] via-[#685dca] to-slate-100 hover:drop-shadow-2xl">
                                                    <span>Demo</span>
                                                    <span className='material-symbols-rounded cursor-pointer'>arrow_forward</span>
                                                    
                                                </div></NavLink>
                                            </div>
                                            
                                        </div>

                                        )
                                    })}

                                    
                        
                        </div>

       </FolioSide>
            
        
    )
}