import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import Button from './Button';
import Link from 'next/link';

export default function Navbar() {
    return (
      <div className='flex justify-between items-center content-center-center pl-96 pr-56 py-2' >
        <div className='flex flex-row'>
            <p className='my-0 mx-2'>A clínica</p>
            <p className='my-0 mx-2'>Minha História</p>
            <p className='my-0 mx-2'>Tratamentos</p>
            <p className='my-0 mx-2'>Localização</p>
        </div>
        <div className='flex flex-row items-center'>
            <Link href="https://api.whatsapp.com/send?phone=5574999180808" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <BsWhatsapp size= '1.5em' className='mx-2' />
            </Link>
            <Link href="https://www.instagram.com/drbrunobarreto.ortopedia?igsh=ZzU5bXVheXR2YWsy" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
              <BsInstagram size='1.5em' className='mx-2'/>
            </Link>
            <Button title='Ligue agora' className='bg-blue-900 ml-2 px-3 py-1 rounded-full font-medium'/>
        </div>
      </div>
    )
  }