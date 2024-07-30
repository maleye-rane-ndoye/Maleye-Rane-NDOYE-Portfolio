import SideNaveBare from "../DumbComponents/SideNaveBare"
import NavBar from "../DumbComponents/NavBar"
import CvSide from "../DumbComponents/CvSide"
export default function Cv(){



    return(
        <section className="w-full h-full flex flex-col overflow-hidden lg:flex-row">
           <SideNaveBare />
            <CvSide/>
           <NavBar/>
        </section>
    )
}