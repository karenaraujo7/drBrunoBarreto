import Button from "./Button";

export default function Contact() {
    return (
        <div className="px-96 pt-20 pb-11">
            <p className="text-4xl">DÚVIDAS? <br></br> FALE CONOSCO</p>
            <p className="text-2xl">Estamos prontos para atendê-los.</p>
            <Button title="FALE CONOSCO AGORA" className="bg-brown-300 rounded-full py-2 px-4 font-medium text-2xl"/>
        </div>
    )
}