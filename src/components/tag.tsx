"use client"

export const Tag = ({name, url, icon} : {name : string, url : string, icon? : React.ReactNode}) =>{
    return(
        <a href={url} target="_blank" rel="noreferrer" className="relative bg-brand-dark-gray rounded-xl flex justify-center w-full hover:bg-brand-dark-gray/70">
            <div className="flex justify-center items-center w-1/4 h-full px-4 py-2">
                {icon}
            </div>
            <div className="flex items-center w-3/4 h-full px-6 py-2">
                <h1 className="text-lg font-semibold justify-self-center self-center"> {name} </h1>
            </div>
        </a>
    )
}