'use client'

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { BsChevronDown } from 'react-icons/bs';
import heroImage from '../app/hero.jpg'

export default function Mystory() {
    return (
        <div className='bg-green-800'>
            <div className="flex justify-center items-center px-4 py-8 flex-col content-center">
                        <img src={heroImage.src} alt="hero" className="w-full h-48 sm:h-96 object-contain" />
                        <div className="text-center">
                            <h1 className="text-4xl font-alt font-light">Dr. Bruno</h1>
                        </div>
                        <p className="text-4xl font-alt font-light">MINHA HISTÓRIA</p>
                        <p className="text-justify">praesent.</p>
                        <Dropdown className="bg-brown-300">
                            <DropdownTrigger>
                                <Button className='bg-green-300 hover:bg-brown-300 font-bold text-gray-50 w-full justify-between hover:text-black-300'>
                                    Toque para ver o currículo de Dr.Bruno
                                    <BsChevronDown />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem className='bg-brown-300 '>- Sagittis eu volutpat odio facilisis mauris sit amet - 2008</DropdownItem>
                                <DropdownItem>- Tristique et egestas quis ipsum suspendisse ultrices gravida dictum - 1 ano</DropdownItem>
                                <DropdownItem>- Urna porttitor rhoncus dolor purus - Salvador</DropdownItem>
                                <DropdownItem>- Risus sed vulputate odio ut - 2 anos</DropdownItem>
                                <DropdownItem>- Morbi tristique senectus et netus et malesuada - 1 ano</DropdownItem>
                                <DropdownItem>- Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
    )
}
