import './Header.css'
import { IoSearch } from "react-icons/io5";

const Header = () => {
    return (
        <div className="main-header">
            <header>
                <div className="left-header">
                    <h1>ALUGAR</h1>
                </div>
                <div className="right-header">
                    <p>Alugar</p>
                    <p>Vender</p>
                    <p>Meu perfil</p>
                </div>
                <div className='icon-search'>
                    <IoSearch />
                </div>
            </header>
        </div>
    )
}

export default Header