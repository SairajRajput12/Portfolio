import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'
// import Img from '../Navbar/file.png'; 
import Img from '../Navbar/Logo_12.png'

export default function Navbar(){
    return(
        <div className='navbar'>
            <div>
                <img src={Img} alt='logo'></img>
            </div>
            <nav>
                <Link className='navlink' to="/"><div>Home</div></Link>
                <Link className='navlink' to="/about"><div>About</div></Link>
                <Link className='navlink' to="/contact"><div>Contact</div></Link>
                <Link className='navlink' to="/project"><div>Project</div></Link>
            </nav>
        </div>
    );
}