import FolioSide from "./FolioSide"
import {NavLink } from "react-router-dom"
import imagePaths from "./imagesPath"


export const workAppLink = [

  {id:"app-1",name:"App Mobil",url:"",img:"app"},
  {id:"app-2",name:"App Mobil",url:"",img:"app"},
  {id:"app-3",name:"App Mobil",url:"",img:"app"},
  {id:"app-4",name:"App Mobil",url:"",img:"app"},
  {id:"app-5",name:"App Mobil",url:"",img:"app"},
  {id:"app-6",name:"App Mobil",url:"",img:"app"},
  {id:"app-7",name:"App Mobil",url:"",img:"app"},
  {id:"app-8",name:"App Mobil",url:"",img:"app"},


]

export default function FolioApp(props){

    
    return(
        
       <FolioSide title = "My Apps" subtitle = "Most recent Apps">

                        <div className="Folio-content">


                                    {workAppLink.map((linkItem) => {

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