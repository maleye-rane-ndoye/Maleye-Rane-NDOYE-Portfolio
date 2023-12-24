import { NavLink } from "react-router-dom"
import SideNaveBare from "../DumbComponents/SideNaveBare"
import NavBar from "../DumbComponents/NavBar"


export const FolioLink = [

    {id:"all", name:"All", path:"/all", element: "FolioAll"},
    {id:"web", name:"Web", path:"/web", element: "FolioWeb"},
    {id:"app", name:"App", path:"/app", element:"FolioApp"}, 
    {id:"design", name:"Design",path:"/design", element:"FolioDesign"},
]

export default function FolioSide({title, subtitle, children}){




    return(
        <section className="w-full h-full flex flex-col overflow-hidden lg:flex-row">
                <SideNaveBare />

                <div className="FolioSide w-full h-full rounded-r-md m-1 bg-gradient-to-l from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-auto flex flex-col items-center ">

                     <h1 className='text-white text-3xl font-bold m-2'>{title ?? 'Portfolio'}</h1>
                     <span className='text-white text-lg mb-3'>{subtitle ?? 'Most recent work'}</span>

                            <div className="flex flex-row items-center  space-x-10 text-white text-sm font-extrabold m-3">

                                    {FolioLink.map((linkItem) => {
                                    return(
                                        <NavLink to={'/portfolio' + linkItem.path}><span key={linkItem.id} className=" w-14 h-7  flex flex-row items-center justify-center rounded-md drop-shadow-2xl cursor-pointer hover:ease-in-out duration-500 hover:bg-white hover:text-black  lg:w-16 lg:h-9 lg:text-lg">{linkItem.name}</span></NavLink>
                                        
                                    )
                                    })}
                            </div>

                            <div >
                                {children}
                            </div>
                </div>

                <NavBar/>


        </section>
    )
}