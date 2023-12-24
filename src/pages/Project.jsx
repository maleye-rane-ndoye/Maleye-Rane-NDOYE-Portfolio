import SideNaveBare from "../DumbComponents/SideNaveBare"
import NavBar from "../DumbComponents/NavBar"
export default function Project(){



    return(
        <section className="w-full h-full flex flex-col overflow-hidden lg:flex-row">
           <SideNaveBare />
           <NavBar/>
        </section>
    )
}