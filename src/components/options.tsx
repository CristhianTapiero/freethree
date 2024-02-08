"use client"
import React, { useState } from "react"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Link, Links } from "@/app/constants"



export const Options = () =>{
    const [link, setLink] = useState<Link | undefined>(undefined);
    const handleClick = (link: Link) => {
        setLink(link);
    }

    return (
        <Menu>
            <MenuButton as={Button} leftIcon={link && link.icon} rightIcon={<ChevronDownIcon/>} className="w-max" backgroundColor={'#323240'} color={'#F2EEEB'} _hover={{backgroundColor: "rgba(50, 50, 64, .4)"}} _expanded={{backgroundColor:"rgba(50, 50, 64, .4)"}}>{link ? link.name : "Options"} </MenuButton>
            <MenuList backgroundColor={'#323240'} maxHeight={'10rem'} overflowY={'auto'} overflowX={'hidden'} border={'none'} className="menu">
                {
                    Links.map((link, index) => <MenuItem className="font-semibold" backgroundColor={'#323240'} _hover={{backgroundColor:'#787878'}} gap={'1rem'} key={index} value={link.name} onClick={() => handleClick(link)}>{link.icon}<span>{link.name}</span></MenuItem>)
                }
            </MenuList>
        </Menu>
    )
}