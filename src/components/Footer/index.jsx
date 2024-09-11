import './Footer.css'

import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className='main-footer'>
            <div className="footer-icons">
                <BiLogoLinkedin />
                <IoIosMail />
                <FaInstagram />
            </div>
            <div className="footer-text">
                <h1>Login</h1>
                <h1>Pagina principal</h1>
                <h1>Alugar</h1>
            </div>
            <h1></h1>
        </footer>
    )
}

export default Footer