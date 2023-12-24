import SideNaveBare from "../DumbComponents/SideNaveBare"
import NavBar from "../DumbComponents/NavBar"
import SkillsSide from "../DumbComponents/SkillsSide"
export default function Skills(){



    return(
        <section className="w-full h-full flex flex-col overflow-hidden lg:flex-row">
           <SideNaveBare />
           <SkillsSide/>
           <NavBar/>
        </section>
    )
}