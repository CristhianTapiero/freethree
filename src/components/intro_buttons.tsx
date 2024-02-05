'use client'

import { SetStateAction } from "react"

export const StartButtons = () =>{
    return (
        <div className="flex gap-x-2 items-center justify-center">
            <button className="btn" onClick={()=>alert('Hello World')}>Get Started</button>
            <button className="btn" onClick={()=>alert('I have already said Hello world')}>Log In</button>
        </div>
    )
}
export const AddButton = () =>{
    return (
        <button className="btn" onClick={()=>alert('Hello World')}>+ Add</button>
    )
}
export const EditButton = ({fun}: {fun : Function}) =>{
    return (
        <button className="btn absolute bottom-3 right-3" onClick={() => fun()}>Edit</button>
    )
}
export const SaveButton = ({fun} : {fun : Function}) =>{
    return (
        <button className="btn absolute bottom-3 right-3" onClick={() => fun()}>Save</button>
    )
}