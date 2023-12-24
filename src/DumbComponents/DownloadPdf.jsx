import React from "react";


export default function DownloadPdf(){



    return(

        <div className="w-64 h-auto flex flex-row items-center justify-center p-4 bg-black text-white">
            <a href='../public/MaleyeCV.pdf' download= "MaleyeCV.pdf">Download My CV</a>
        </div>
    )
}