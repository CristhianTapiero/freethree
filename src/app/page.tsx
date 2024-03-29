'use client'

import { FullPage } from "@/components/container"
import { AddButton, EditButton, SaveButton } from "@/components/intro_buttons"
import { useState } from "react"
import { Options } from "@/components/options"

const App = () =>{
    const [isEditing, setIsEditing] = useState(false)

    const toogleEditing = () =>{
        setIsEditing(!isEditing)
    }

    return (
        <FullPage>
            <h1 className="text-6xl font-semibold text-brand-red">Dashboard</h1>
            <p className="text-lg font-semibold">Here you can add or remove your links.</p>
            <div className="flex flex-col gap-2 w-1/4 min-w-64 max-w-80">
                <Options/>
                {/* {
                    Links.map((link, index) => <Tag key={index} name={link.name} url={link.url} icon={link.icon} />)
                } */}
            </div>
            <AddButton />
            {
                isEditing ? <SaveButton fun={toogleEditing} /> : <EditButton fun={toogleEditing} />
            }
        </FullPage>
    )
}
export default App