import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';



export default function Footer()  {
    return (
        <footer className="w-full flex flex-row justify-between p-6 absolute bottom-0 items-center px-28">
            <div className='flex gap-x-2.5 items-center'>
            <div className="">
                <a href="https://www.facebook.com/abiskocafe" target="_blank" rel="noreferrer">
                    <IoLogoFacebook size={40} />
                </a>
            </div>
            <div className="">
                <a href="https://www.instagram.com/abiskocafe" target="_blank" rel="noreferrer">
                    <FaInstagram size={40} />
                </a>
            </div>
            <p className="text-xl">Skontaktuj się z nami</p>
            </div>
            <div className="flex gap-x-4">
                <Link href="/Regulamin">
                   Regulamin
                </Link>
                <Link href="/PolitykaPrywatnosci">
                    Polityka Prywatności
                </Link>                       
            </div>
        </footer>
    )
}