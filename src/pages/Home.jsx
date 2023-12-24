import SideContentHouse from "../DumbComponents/SideContentHouse"
import SideNaveBare from "../DumbComponents/SideNaveBare"
import NavBar from "../DumbComponents/NavBar"
export default function Home(){



    return(
        <section className="w-full h-full flex flex-col overflow-hidden lg:flex-row">
           <SideNaveBare />
           <SideContentHouse/>
           <NavBar/>
        </section>
    )
}