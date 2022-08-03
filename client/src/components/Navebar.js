import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar navbar-dark sticky-top bg-primary navbar-expand-lg" >
            <div className="container">
            <i className="ri-reactjs-line" id='logo'></i>
            </div>
            <Link to='/' className='navbar-brand' >Record Home Page</Link>
                <div className='navbar-collapse' >
                    <ul className='navbar-nav mr-auto' >
                        <li className='navbar-item'>
                            <Link to='/list' className='nav-link' >RecordsList</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link' >CreateRecord</Link>
                        </li>
                        
                    </ul>
                </div>

        </nav>
    )
};

export default Navbar;