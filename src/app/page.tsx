import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSolidBuildingHouse } from 'react-icons/bi';

import Mystory from "@/components/Mystory";
import Navbar from "@/components/NavBar";
import Clinic from '@/components/Clinic';
import Contact from '@/components/Contact';
import Treatments from '@/components/Treatments';
import Depositions from '@/components/Depositions';


export default function Home() {
  return (
      <main>
        <Navbar/>
        <div>

          
        <Mystory/>
        <div className='flex justify-center items-center absolute py-3 px-3 rounded-full bg-brown-300'>
                <BiSolidBuildingHouse className='text-gray-100 hover:text-black-300 text-3xl '/>
            </div>
        <Clinic/>
        <Contact/>
        <Treatments/>
        <Depositions/>
        </div>
      </main>
   
  )
}
