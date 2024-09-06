import { Link } from "react-router-dom"
import './Header.css'
import { IoSearch } from "react-icons/io5"

const Header = () => {
    return (
        <div className="main-header">
            <header>
                <div className="left-header">
                    <Link to='/'>Pagina Principal</Link>
                </div>
                <nav>
                    <div className="right-header">
                        <Link to='/alugar'>Alugar</Link>
                        <Link to='/vender'>Vender</Link>
                        <Link to='/login'>Login</Link>
                        <IoSearch className="icon-search"/>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header