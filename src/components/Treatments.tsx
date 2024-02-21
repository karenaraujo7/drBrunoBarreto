'use client'

import Button from "./Button"
import Dropdowns from "./Dropdown"
import convenios from '../assets/convenios.png'
import Image from "next/image"

// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
// import { BsChevronDown } from 'react-icons/bs';


export default function Treatments() {
    return (
        <div className="flex bg-blue-800 px-96 py-14 justify-center items-center flex-col ">
            <p className="text-4xl mb-4 font-alt font-extralight font-normal">TRATAMENTOS:</p>
            
            <Dropdowns 
            title='Fibromialgia'
            classDropdown='bg-gray-200 text-gray-700 '
            classButton='bg-brown-300 hover:bg-gray-200 w-full text-base  justify-between mb-3 py-4 text-gray-50 hover:text-black-300'
            classMenu="w-full max-w-full"
            classItem='bg-gray-200 max-w-full'
            textItem='A fibromialgia é uma condição crônica que se caracteriza por dor difusa em músculos, tendões e ligamentos, além de outros sintomas como fadiga, distúrbios do sono e sensibilidade em pontos específicos do corpo. É importante lembrar que o tratamento da fibromialgia é individualizado.'
            />

            <Dropdowns 
            title='Dor na coluna vertebral'
            classDropdown='bg-gray-200 text-gray-700'
            classButton='bg-brown-300 hover:bg-gray-200 w-full text-base justify-between mb-3 py-4 text-gray-50 hover:text-black-300'
            classItem='bg-gray-200'
            classMenu="w-full max-w-full"
            textItem='Dores na coluna vertebral são muito comuns e podem ocorrer em qualquer parte da coluna, seja cervical (pescoço), torácica (meio das costas), lombar (parte inferior das costas) ou sacrococcígea (cóccix). Elas podem surgir devido a uma variedade de condições. O tratamento da dor na coluna vertebral pode envolver uma combinação de medicamentos, fisioterapia, exercícios de fortalecimento e, em alguns casos, intervenções cirúrgicas. O objetivo é aliviar a dor, melhorar a função e a qualidade de vida do paciente.'
            />

            <Dropdowns 
            title='Dor generalizada'
            classDropdown='bg-gray-200 text-gray-700'
            classButton='bg-brown-300 hover:bg-gray-200 w-full text-base justify-between mb-3 py-4 text-gray-50 hover:text-black-300'
            classMenu="w-full max-w-full"
            classItem='bg-gray-200'
            textItem='A dor generalizada é caracterizada por dor e desconforto que são sentidos em várias partes do corpo e não se limitam a uma única área específica. Este tipo de dor pode variar de leve a severa e pode ser constante ou intermitente. O tratamento para dor generalizada pode variar dependendo da causa subjacente e pode incluir uma combinação de medicamentos para aliviar a dor, terapias físicas, técnicas de relaxamento e estratégias de gerenciamento do estresse'
            />
            <Dropdowns 
            title='Artrose'
            classDropdown='bg-gray-200 text-gray-700'
            classButton='bg-brown-300 hover:bg-gray-200 w-full text-base justify-between mb-3 py-4 text-gray-50 hover:text-black-300'
            classMenu="w-full max-w-full"
            classItem='bg-gray-200'
            textItem='A artrose, também conhecida como osteoartrite, é uma condição degenerativa que afeta as articulações do corpo. É a forma mais comum de artrite e torna-se mais provável à medida que envelhecemos, embora também possa ocorrer em pessoas mais jovens como resultado de lesões ou uso excessivo.'
            />

            <Dropdowns 
            title='Tendinites'
            classDropdown='bg-gray-200 text-gray-700'
            classButton='bg-brown-300 hover:bg-gray-200 w-full text-base justify-between mb-3 py-4 text-gray-50 hover:text-black-300'
            classMenu="w-full max-w-full"
            classItem='bg-gray-200'
            textItem='A tendinite é uma condição que ocorre quando um tendão - as estruturas fibrosas que ligam os músculos aos ossos - se inflama ou se irrita. A condição é geralmente o resultado de uso excessivo ou lesão repetitiva, mas também pode ser causada por doenças como artrite reumatoide ou diabetes.

            Os sintomas da tendinite incluem dor e sensibilidade na área afetada, que geralmente aumentam com o movimento ou atividade.'
            />

            <Dropdowns 
            title='Hérnia de disco'
            classDropdown='bg-gray-200 text-gray-700'
            classButton='bg-brown-300 hover:bg-gray-200 w-full text-base justify-between mb-3 py-4 text-gray-50 hover:text-black-300'
            classMenu="w-full max-w-full"
            classItem='bg-gray-200'
            textItem='É uma condição que ocorre quando o disco intervertebral, uma estrutura amortecedora localizada entre cada vértebra da coluna, sofre desgaste ou lesão. Esse disco é composto por um núcleo gelatinoso (núcleo pulposo) cercado por um anel resistente (ânulo fibroso). Em uma hérnia de disco, parte do núcleo pulposo se projeta para fora do anel fibroso, podendo pressionar os nervos próximos. Isso pode levar a sintomas como dor na área da hérnia, que muitas vezes pode irradiar para outros locais, dependendo do nervo afetado'
            />

            <Button title="FALE CONOSCO AGORA" className="bg-gray-200 hover:bg-black-300 text-gray-800 hover:text-gray-50 rounded-full py-2 px-4 mt-4 mb-5 text-2xl font-semibold"/>

            <p className="text-brown-300 text-2xl mb-4">Convênios Aceitos:</p>

            <Image src={convenios} alt='Convênios' className="mb-10"/>

        </div>
    )
}