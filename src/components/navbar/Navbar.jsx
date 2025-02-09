import React from 'react';
import '../navbar/Navbar.css'
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import Cart from '../cart/Cart';

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="logo-container">
            <p>HU<span className='styled'>NGA</span></p>
        </div>

            <div className="navigation">
                <PrimaryBtn text="Sign In" />
                <PrimaryBtn text="Sign Up"  className="secondary" />
                <Cart/>
            </div>
 
    </nav>
  )
}

export default Navbar
