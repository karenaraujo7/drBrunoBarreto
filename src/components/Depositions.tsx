import Link from "next/link";
import Button from "./Button";

export default function Depositions() {
    return (
        <div className="flex bg-brown-300 text-gray-50 justify-center items-center pb-20">
            <div>
                <p className="font-alt text-5xl font-light pt-20">Depoimentos de <br /> nossos pacientes</p>

                <Link href="https://api.whatsapp.com/send?phone=5574999180808"  target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button title="FALE CONOSCO AGORA" className="bg-green-300 hover:bg-black-200 py-2 px-4 text-lg font-semibold rounded-full"/>
                </Link>
            </div>
        </div>
    )
}