import { NavLink } from 'react-router-dom';
import React from 'react'
export const navLinks = [
    {id: 'home', name: 'Home', icon: 'home',url:'/home'},
    {id: 'portfolio', name: 'Portfolio', icon: 'library_books',url:'/portfolio'},
    {id: 'aboutme', name: 'About me', icon: 'face',url:'/aboutme'},
    {id: 'cv', name: 'CV', icon: 'workspace_premium',url:'/cv'},
    {id: 'skills', name: 'Skills', icon: 'rocket_launch',url:'/skills'},
    {id: 'project', name: 'Project', icon: 'tactic',url:'/project'},
    {id: 'contact', name: 'Contact', icon: 'contact_support',url:'/contact'},
];

export default function SideNaveBare(props){

    return(
        <ul className="Navlinks">
            
            {navLinks.map((linkItem) => {
                return (
                    <li key={linkItem.id} className="Navelinks-button drop-shadow-2xl  " data-selected={(props.page === linkItem.id).toString()}>
                        <NavLink to={linkItem.url}  className="Nave-button-El">
                                <span className="material-symbols-rounded NaveLink-icon">{linkItem.icon}</span>
                                <span className="NaveLink-name ">{linkItem.name}</span>
                        </NavLink>
                    </li>
                );
            })}

        </ul>
    )
}