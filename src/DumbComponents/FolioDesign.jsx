import FolioSide from "./FolioSide"
import {NavLink } from "react-router-dom"
import imagePaths from "./imagesPath"


export const workDesignLink = [

  {id:"design-1",name:"Design pattern",url:"", img:"design"},
  {id:"design-2",name:"Design pattern",url:"", img:"design"},
  {id:"design-3",name:"Design pattern",url:"", img:"design"},
  {id:"design-4",name:"Design pattern",url:"", img:"design"},
  {id:"design-5",name:"Design pattern",url:"", img:"design"},
  {id:"design-6",name:"Design pattern",url:"", img:"design"},
  {id:"design-7",name:"Design pattern",url:"", img:"design"},
  {id:"design-8",name:"Design pattern",url:"", img:"design"},


]

export default function FolioDesign(props){

    
    return(
        
       <FolioSide title = "My Design patterns" subtitle = "Most recent patterns">

                        <div className="Folio-content">


                                    {workDesignLink.map((linkItem) => {

                                        return(

                                            <div key={linkItem.id} className="Folio-content-box">

                                            <img className="w-full h-full rounded-2xl " src={imagePaths[linkItem.img]}/>
                                            <div className="w-full h-auto flex flex-col">
                                                <span className="text-lg font-bold">{linkItem.name}</span>
                                                <NavLink to={linkItem.url}><div className="Folio-content-link">
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