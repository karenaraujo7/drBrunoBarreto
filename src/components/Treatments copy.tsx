'use client'

import Button from "./Button"
import Dropdowns from "./Dropdown"
import convenios from '../assets/convenios.png'
import Image from "next/image"
import Link from "next/link"

export default function Treatments() {
    return (
        <div className="flex bg-green-800 px-4 py-8 justify-center items-center flex-col ">
            <p className="text-4xl mb-4 font-alt font-extralight font-normal">TRATAMENTOS:</p>
            
            <Dropdowns 
            title='Fibromialgia'
            classDropdown='bg-gray-200 text-gray-700 '
            classButton='bg-brown-300 hover:bg-gray-200 w-full text-base  justify-between mb-3 py-4 text-gray-50 hover:text-black-300'
            classMenu="w-full max-w-full"
            classItem='bg-gray-200 max-w-full'
            textItem='A fibromialgia é uma condição crônica que se caracteriza por dor difusa em músculos, tendões e ligamentos, além de outros sintomas como fadiga, distúrbios do sono e sensibilidade em pontos específicos do corpo. É importante lembrar que o tratamento da fibromialgia é individualizado.'
            />

            {/* Rest of the code... */}

            <Link href="https://api.whatsapp.com/send?phone=5574999180808"  target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button title="FALE CONOSCO AGORA" className="bg-gray-200 hover:bg-black-300 text-gray-800 hover:text-gray-50 rounded-full py-2 px-4 mt-4 mb-5 text-2xl font-semibold"/>
            </Link>

            <p className="text-brown-300 text-2xl mb-4">Convênios Aceitos:</p>

            <Image src={convenios} alt='Convênios' className="mb-10"/>

            <style jsx>{`
                @media (max-width: 640px) {
                    .flex {
                        flex-direction: column;
                    }
                    .px-4 {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                    .py-8 {
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                    }
                    .text-4xl {
                        font-size: 2rem;
                    }
                    /* Add more responsive styles as needed */
                }
            `}</style>
        </div>
    )
}