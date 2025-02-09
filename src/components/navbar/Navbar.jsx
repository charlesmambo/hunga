import React from 'react';
import '../navbar/Navbar.css'
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import Cart from '../cart/Cart';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="logo-container">
            <p>HU<span className='styled'>NGA</span></p>
        </div>

            <div className="navigation">
                <PrimaryBtn text="Sign In" className="hide"/>
                <PrimaryBtn text="Sign Up"  className="secondary" />
                <Cart/>

                <div className="nav-drop-downs">
                  <div className="hamburger">
                  <GiHamburgerMenu />
                  </div>
                </div>
            </div>
 
    </nav>
  )
}

export default Navbar
