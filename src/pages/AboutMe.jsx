import SideNaveBare from "../DumbComponents/SideNaveBare"
import NavBar from "../DumbComponents/NavBar"
import AboutMeSide from "../DumbComponents/AboutMeSide"
export default function AboutMe(){



    return(
        <section className="w-full h-full flex flex-col overflow-hidden lg:flex-row">
           <SideNaveBare />
           <AboutMeSide/>
           <NavBar/>
        </section>
    )
}