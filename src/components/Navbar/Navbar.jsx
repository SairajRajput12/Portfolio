import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'
// import Img from '../Navbar/file.png'; 
import Img from '../Images/Logo_12.png'

export default function Navbar(){
    return(
        <div className='navbar'>
            <div>
                <img src={Img} alt='logo'></img>
            </div>
            <nav className='fira-code-nav'>
                <Link className='navlink' to="/"><div><b>Home</b></div></Link>
                <Link className='navlink' to="/about"><div><b>About</b></div></Link>
                <Link className='navlink' to="/project"><div><b>Project</b></div></Link>
                <Link className='navlink' to="/contact"><div><b>Contact</b></div></Link>
            </nav>
        </div>
    );
}