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

                        <div className="Folio-content">


                                    {workWebLink.map((linkItem) => {

                                        return(

                                            <div key={linkItem.id} className="Folio-content-box">

                                            <img className="w-full h-full rounded-2xl " src={imagePaths[linkItem.img]}/>
                                            <div className="w-full h-auto flex flex-col">
                                                <span className="text-lg font-bold">{linkItem.name}</span>
                                                <NavLink to={linkItem.url}><div className=" Folio-content-link">
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