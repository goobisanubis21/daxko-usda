import React from 'react';
import './navComp.css'
import { Link } from 'react-router-dom';

const NavComp = () => {
    return (
        <div>
            <nav className='nav-container'>
                <p><Link to ='/'>Home</Link></p>
                <p><Link to = '/cart'>Cart</Link></p>
            </nav>
        </div>
    )
}

export default NavComp
