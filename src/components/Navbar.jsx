import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false)
    return (
        <nav>
            <Link to='/' className='Title'>ExpenseTracker</Link>
            <div className="menu" onClick={()=>
                {
                    setMenuOpen(!menuOpen);
                }
            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen? "open" : ""}>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/services'>Services</NavLink>
                </li>
                <li>
                    <NavLink to='subscription'>Subscription</NavLink>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar