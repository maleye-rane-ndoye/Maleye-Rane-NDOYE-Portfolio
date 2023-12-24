import React from 'react'
import { NavLink } from 'react-router-dom';
import { navLinks } from './SideNaveBare'

export default function NavBar(props){



    return(
        <ul className="NavBar lg:hidden w-full h-20 overflow-x-scroll flex box-border px-4 bg-[#24243e] space-x-4 items-center text-white font-semibold text-base§µ
        ">

            {navLinks.map((linkItem) => {
                return (
                    <li key={linkItem.id} className="flex flex-col mx-4 grow items-center hover:text-cyan-200 justify-center" data-selected={(props.page === linkItem.id).toString()}>
                        <NavLink to={linkItem.url}>
                                <span className="material-symbols-rounded">{linkItem.icon}</span>
                                <span className="text-xs truncate">{linkItem.name}</span>
                        </NavLink>
                    </li>
                );
            })}


        </ul>
    )
}