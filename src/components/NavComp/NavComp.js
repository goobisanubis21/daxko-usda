import React from 'react';
import './navComp.css'
import { Link } from 'react-router-dom';

const NavComp = (props) => {

    const storage = JSON.parse(localStorage.getItem('savedFoodItems'))

    return (
        <div>
            <nav className='nav-container'>
                <p><Link to='/'>Home</Link></p>
                {/* setting the number of items in the cart to be displayed based on storage length and/or state */}
                {props.num === 0 || props.num === undefined ? <p><Link to='/cart'>Cart({storage.length})</Link></p> : storage.length >= 1 || props.num > 0 ? <p><Link to='/cart'>Cart({props.num})</Link></p> : <p><Link to='/cart'>Cart</Link></p>}
            </nav>
        </div>
    )
}

export default NavComp
