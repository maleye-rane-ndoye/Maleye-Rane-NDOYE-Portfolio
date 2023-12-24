import React from 'react'
import { NavLink } from 'react-router-dom';
import { navLinks } from './SideNaveBare'

export default function NavBar(props){



    return(
        <ul className="NavBar">
            {navLinks.map((linkItem) => {
                return (
                    <li key={linkItem.id} className="NaveBar-button" data-selected={(props.page === linkItem.id).toString()}>
                        <NavLink to={linkItem.url} className="NaveBar-El">
                                <span className="material-symbols-rounded">{linkItem.icon}</span>
                                <span className="NaveBar-name">{linkItem.name}</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    )
}