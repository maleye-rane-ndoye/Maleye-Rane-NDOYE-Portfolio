import { NavLink } from 'react-router-dom';
import React from 'react'
export const navLinks = [
    {id: 'home', name: 'Home', icon: 'home',url:'/home'},
    {id: 'portfolio', name: 'Portfolio', icon: 'library_books',url:'/portfolio'},
    {id: 'aboutme', name: 'About me', icon: 'face',url:'/aboutme'},
    {id: 'cv', name: 'CV', icon: 'workspace_premium',url:'/cv'},
    {id: 'skills', name: 'Skills', icon: 'rocket_launch',url:'/skills'},
    {id: 'project', name: 'Project', icon: 'tactic',url:'/project'},
    {id: 'blog', name: 'Blog', icon: 'forum',url:'/blog'},
    {id: 'contact', name: 'Contact', icon: 'contact_support',url:'/contact'},
];

export default function SideNaveBare(props){

    return(
        <ul className="hidden w-64 m-1 rounded-l-md overflow-y-auto overflow-x-hidden lg:flex lg:flex-col box-border p-4 bg-[#24243e] text-white font-semibold text-xl items-center justify-center space-y-6">
            
            {navLinks.map((linkItem) => {
                return (
                    <li key={linkItem.id} className="flex space-x-2 items-center hover:text-cyan-200 text-left w-full " data-selected={(props.page === linkItem.id).toString()}>
                        <NavLink to={linkItem.url}>
                                <span className="material-symbols-rounded">{linkItem.icon}</span>
                                <span className="text-xs w-full h-fit truncate">{linkItem.name}</span>
                        </NavLink>
                    </li>
                );
            })}

        </ul>
    )
}