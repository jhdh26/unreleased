import { Link } from "react-router-dom"
import './Header.css'
import { IoSearch } from "react-icons/io5"

const Header = () => {
    return (
        <div className="main-header">
            <header>
                <div className="left-header">
                    <h1>FOTO</h1>
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