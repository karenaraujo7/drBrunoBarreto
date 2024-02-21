'use client'

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { BsChevronDown } from 'react-icons/bs';

interface DropdownButton {
    title: string,
    classDropdown: string,
    classButton: string,
    classItem: string,
    textItem: string,
    classMenu: string
}

export default function Dropdowns(props: DropdownButton) {
    return (
        <Dropdown className={props.classDropdown}>
            <DropdownTrigger>
                <Button 
                className={props.classButton}
                >
                {props.title}
                <BsChevronDown/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu className={props.classMenu} >
                <DropdownItem className={props.classItem}>
                    {props.textItem}</DropdownItem>
                </DropdownMenu>
        </Dropdown>
    )
}