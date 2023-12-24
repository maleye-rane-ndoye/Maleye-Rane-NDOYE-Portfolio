import React from 'react'

export const SkillsFront = [
    {id: "html", name: "HTML", icon: "check_circle", level: "skilful", url:"/html"},
    {id: "css", name: "CSS", icon: "check_circle", level: "skilled", url:"/css"},
    {id: "bootstrap", name: "Bootstrap", icon: "check_circle", level: "tried", url:"/bootstrap"},
    {id: "git", name: "Git", icon: "check_circle", level: "practiced", url:"/git"},
    {id: "javascript", name: "JavaScript", icon: "check_circle", level: "skilled", url:"/javascipt"},
    {id: "react", name: "React", icon: "check_circle", level: "intermediat", url:"/react"},

    ]



export const SkillsBack = [
    {id: "php", name: "PHP", icon: "check_circle", level: "skilful", url:"/php"},
    {id: "mysql", name: "MySQL", icon: "check_circle", level: "skilled", url:"/mysql"},
    {id: "nodejs", name: "Node JS", icon: "check_circle", level: "tried", url:"/nodejs"},
    {id: "sql", name: "SQL", icon: "check_circle", level: "practiced", url:"/sql"},
    {id: "python", name: "Python", icon: "check_circle", level: "skilled", url:"/python"},
    {id: "laravel", name: "Laravel ", icon: "check_circle", level: "beginner", url:"/laravel"},
    
    ]


    export const SkillsUxi = [
        {id: "figma", name: "Figma", icon: "check_circle", level: "skilful", url:"/figma"},
        {id: "canva", name: "Canva", icon: "check_circle", level: "skilled", url:"/canva"},
        {id: "photoshop", name: "Photoshop", icon: "check_circle", level: "tried", url:"/photoshop"},
        {id: "tailwind", name: "Tailwind Css", icon: "check_circle", level: "practiced", url:"/tailwind"},
        {id: "illustrator", name: "Illustrator", icon: "check_circle", level: "skilled", url:"/illustrator"},
        {id: "ux", name: "User eXp", icon: "check_circle", level: "beginner", url:"/clientx"},
        
        ]

export default function SkillsSide(){
    return(
           <div  className='SkillsSide w-full h-full rounded-r-md m-1 bg-gradient-to-l from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-auto flex flex-col items-center '>
                     
                     <h1 className='text-white text-3xl font-bold m-2'>Skills</h1>
                     <span className='text-white text-lg mb-3'>My technical level</span>

                     <div className='lg:w-3/4 h-auto w-full overflow-y-scroll flex flex-col items-center p-4 space-y-8 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:overflow-hidden'>
                          <div className='w-5/6 h-auto bg-white rounded-lg drop-shadow-2xl flex flex-col items-center space-y-4 p-4'>
                                <h1>Frontend developer</h1>
                                <div className="text-[#0f0c29] grid gap-7 grid-rows-3 grid-cols-2">
                                    {SkillsFront.map((linkItem) => {
                                    
                                    return (
                                    <div key={linkItem.id} className='flex flex-row p-2 truncate rounded-lg hover:bg-slate-50 hover:shadow-2xl'>
                                        <span className='text-[#0f0c29] material-symbols-rounded mr-4'>{linkItem.icon}</span>
                                        <div className='flex flex-col'>
                                                <span className='text-[#0f0c29] text-sm font-bold cursor-pointer'>{linkItem.name}</span>
                                                <span>{linkItem.level}</span>
                                        </div>
                                    </div>
                                    );
                                    })}
                                </div>
                          </div>

                          <div className='w-5/6 h-auto bg-white rounded-lg drop-shadow-2xl flex flex-col items-center space-y-4 p-4'>
                                <h1>Backend developer</h1>
                                <div className=" grid gap-7 grid-rows-3 grid-cols-2">
                                    {SkillsBack.map((linkItem) => {
                                    
                                    return (
                                    <div key={linkItem.id} className='flex flex-row p-2 truncate rounded-lg hover:bg-slate-50 hover:shadow-2xl'>
                                        <span className='material-symbols-rounded mr-4'>{linkItem.icon}</span>
                                        <div className='flex flex-col'>
                                                <span className='text-[#0f0c29]  text-sm font-bold cursor-pointer'>{linkItem.name}</span>
                                                <span>{linkItem.level}</span>
                                        </div>
                                    </div>
                                    );
                                    })}
                                </div>
                          </div>

                          <div className='w-5/6 h-full bg-white rounded-lg drop-shadow-2xl flex flex-col items-center space-y-4 p-4'>
                                <h1>UI - UX developer</h1>
                                <div className=" grid gap-7 grid-rows-3 grid-cols-2">
                                    {SkillsUxi.map((linkItem) => {
                                    
                                    return (
                                    <div key={linkItem.id} className='flex flex-row p-2 truncate rounded-lg hover:bg-slate-50 hover:shadow-2xl'>
                                        <span className='material-symbols-rounded mr-4'>{linkItem.icon}</span>
                                        <div className='flex flex-col'>
                                                <span className='text-[#0f0c29]  text-sm font-bold cursor-pointer'>{linkItem.name}</span>
                                                <span>{linkItem.level}</span>
                                        </div>
                                    </div>
                                    );
                                    })}
                                </div>
                          </div>
                     </div>

                
           </div>

    )
}