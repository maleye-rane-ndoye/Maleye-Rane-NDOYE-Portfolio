import SideNaveBare from "../DumbComponents/SideNaveBare"
import NavBar from "../DumbComponents/NavBar"
import ContactSide from "../DumbComponents/ContactSide"
export default function Contact(){



    return(
        <section className="w-full h-full flex flex-col overflow-hidden lg:flex-row">
           <SideNaveBare />
           <ContactSide/>
           <NavBar/>
        </section>
    )
}