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
                <Link className='navlink' to="/"><button>Home</button></Link>
                <Link className='navlink' to="/about"><button>About</button></Link>
                <Link className='navlink' to="/contact"><button>Contact</button></Link>
                <Link className='navlink' to="/project"><button>Project</button></Link>
            </nav>
        </div>
    );
}