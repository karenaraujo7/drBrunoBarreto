import Button from "./Button";

export default function Depositions() {
    return (
        <div className="flex bg-brown-300 text-gray-50 justify-center items-center pb-20">
            <div>
                <p className="font-alt text-5xl font-light pt-20">Depoimentos de <br /> nossos pacientes</p>
                <Button title="FALE CONOSCO AGORA" className="bg-blue-500 hover:bg-black-200 py-2 px-4 text-lg font-semibold rounded-full"/>
            </div>
        </div>
    )
}