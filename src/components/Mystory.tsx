'use client'

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { BsChevronDown } from 'react-icons/bs';

export default function Mystory() {
    return (
        <div className='bg-blue-800'>
            <div className="flex justify-center items-center px-96 py-8 flex-col content-center">
                <p className="text-4xl font-alt font-light">MINHA HISTÓRIA</p>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst. In massa tempor nec feugiat nisl pretium. Aliquet eget sit amet tellus. Nec tincidunt praesent semper feugiat nibh. Velit aliquet sagittis id consectetur. Urna et pharetra pharetra massa massa ultricies mi. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Neque laoreet suspendisse interdum consectetur libero id. Magna sit amet purus gravida quis. Quis varius quam quisque id diam vel quam. Porttitor rhoncus dolor purus non enim praesent.</p>

                <Dropdown className="bg-brown-300">
                    <DropdownTrigger>
                        <Button className='bg-blue-700 hover:bg-brown-300 font-bold text-gray-50 w-full justify-between hover:text-black-300'>
                            Toque para ver o currículo de Dr.Bruno
                            <BsChevronDown/>
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

