'use client'

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { BsChevronDown } from 'react-icons/bs';
import heroImage from '../app/hero.webp'

export default function Mystory() {
    return (
        <div className='bg-green-800'>
            <div className="flex justify-center items-center px-4 py-8 flex-col content-center">
                <img src={heroImage.src} alt="hero" className="w-full h-48 sm:h-96 object-contain" />
                        
                <p className="text-4xl font-alt font-light pt-4">MINHA HISTÓRIA</p>
                <p className="text-justify">Me chamo Bruno Barreto, atuo na área da saúde há mais de 10 anos. Hoje tenho um objetivo claro: me especializar cada vez mais na área de ortopedia regenerativa, ser referência em intervenção em dor e tratar as dores dos meus pacientes sem cirurgias, através de procedimentos minimamente invasivos.
                </p>

                <Dropdown className="bg-brown-300">
                    <DropdownTrigger>
                        <Button className='bg-green-300 hover:bg-brown-300 font-bold text-gray-50 w-full justify-between hover:text-black-300'>
                            Toque para ver o currículo de Dr.Bruno
                            <BsChevronDown />
                        </Button>
                                    
                    </DropdownTrigger>

                    <DropdownMenu>
                        <DropdownItem className='bg-brown-300 '>- Medicina na Universidade Alzira Velano em Alfenas- MG</DropdownItem>
                        <DropdownItem>- Residência médica em ortopedia e traumatologia pela CEOT (COT-Martagão)</DropdownItem>
                        <DropdownItem>- Formação complementar em USG, músculo esquelético pela CALIPER</DropdownItem>
                        <DropdownItem>- Dor e medicina regenerativa na Alleviare</DropdownItem>
                        <DropdownItem>- Graduando em dor clínica pela escola CTD e núcleo de neuromodulação da Bahia </DropdownItem>
                        <DropdownItem>- Fellowship na ORTHOREGEN International Curse</DropdownItem>
                    </DropdownMenu>
                
                </Dropdown>
                        
            </div>
        </div>
    )
}
