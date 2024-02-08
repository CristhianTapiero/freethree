'use client'
import { Options } from "./options"
import { useState } from "react"

export const Form = () =>{
    const [username, setUsername] = useState<boolean>(false)

    const handleCheckbox = (e:{target:{checked:boolean}}) =>{
        e.target.checked ? setUsername(true) : setUsername(false)
    }

    return(
        <form className="flex flex-col justify-center max-sm:w-full w-3/4 self-center gap-y-2 py-4">
            <Options />
            <input type="url" required placeholder="https://www.example.com" className="form-input"/>
            <input type="text" placeholder="@your_username" checked={username} className="form-input disabled:placeholder:text-brand-red/70 disabled:border disabled:border-brand-red/70" disabled={username}/>
            <div className="flex">
                <input type="checkbox" name="no-username" className="border-none mr-2 cursor-pointer" onChange={handleCheckbox}/>
                <label htmlFor="no-name" className="text-brand-white text-sm">Hide username?</label>
            </div>
            <input type="submit" placeholder="Submit" className="btn-sub mt-2 cursor-pointer"/>
        </form>
    )
}