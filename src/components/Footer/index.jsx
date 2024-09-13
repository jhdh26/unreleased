import './Footer.css'

import { Link } from 'react-router-dom';

import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='main-footer'>
            <div className="footer-icons">
                <a
                    href='https://www.linkedin.com/in/joao-henrique-duarte-heindyk-5594621ba/'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BiLogoLinkedin />
                </a>
                <a
                    href=''
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoIosMail />
                </a>
                <a
                    href='https://www.instagram.com/heindyk_joao/'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
                <a
                    href='https://wa.me/5541991316392'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp />
                </a>
            </div>
            <div className="footer-text">
                <Link to='/principal'>Home</Link>
                <Link to='/alugar'>Alugar</Link>
                <Link to='/perfil'>Perfil</Link>
            </div>
        </footer>
    )
}

export default Footer