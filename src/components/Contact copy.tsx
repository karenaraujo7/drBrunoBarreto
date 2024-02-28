import Link from "next/link";
import Button from "./Button";

export default function Contact() {
    return (
        <div className="px-96 pt-20 pb-11">
            <p className="text-4xl">DÚVIDAS? <br></br> FALE CONOSCO</p>
            <p className="text-2xl">Estamos prontos para atendê-los.</p>
            <Link href="https://api.whatsapp.com/send?phone=5574999180808"  target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button title="FALE CONOSCO AGORA" className="bg-brown-300 rounded-full py-2 px-4 font-medium text-2xl"/>
            </Link>

            <style jsx>{`
                @media (max-width: 640px) {
                    .px-96 {
                        padding-left: 2rem;
                        padding-right: 2rem;
                    }
                    .text-4xl {
                        font-size: 2rem;
                    }
                    .text-2xl {
                        font-size: 1.5rem;
                    }
                    .text-2xl {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    )
}