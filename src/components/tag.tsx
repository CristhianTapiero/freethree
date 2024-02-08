"use client"
import { Link } from "@/app/constants"

export const Tag = ({link} : {link: Link}) =>{
    return(
        <a href={link.url} target="_blank" rel="noreferrer" className="relative bg-brand-dark-gray rounded-xl flex justify-center w-full hover:bg-brand-dark-gray/70">
            <div className="flex justify-center items-center w-1/4 h-full px-4 py-2">
                {link.icon}
            </div>
            <div className="flex items-center w-3/4 h-full px-6 py-2">
                <h1 className="text-lg font-semibold justify-self-center self-center"> {link.name} </h1>
            </div>
        </a>
    )
}
export const EditTag = ({link, fun} : {link: Link, fun : Function}) =>{
    return(
        <a href={link.url} target="_blank" className="relative bg-brand-dark-gray rounded-xl flex justify-center w-full hover:bg-brand-dark-gray/70">
            <div className="flex justify-center items-center w-1/4 h-full px-4 py-2">
                {link.icon}
            </div>
            <div className="flex items-center w-3/4 h-full px-6 py-2">
                <h1 className="text-lg font-semibold justify-self-center self-center"> {link.name} </h1>
                <button className="btn absolute right-3" onClick={() => fun()}>Edit</button>
            </div>
        </a>
    )
}