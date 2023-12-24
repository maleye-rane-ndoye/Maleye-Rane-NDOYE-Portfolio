import FolioSide from "./FolioSide"
import {NavLink } from "react-router-dom"
import imagePaths from "./imagesPath"
import { workAppLink } from "./FolioApp"
import { workWebLink } from "./FolioWeb"
import { workDesignLink } from "./FolioDesign"






export const workLink = [...workWebLink,...workAppLink, ...workDesignLink ];

export default function FolioAll(){

    
    return(
        
       <FolioSide>

                        <div className="Folio-content">


                                    {workLink.map((linkItem) => {

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