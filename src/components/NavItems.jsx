import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from "../assets/images/logo/logo.png"

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialTogggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    //addevent listener
    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInup" : ""}`}>
        {/* header top start */}
        {/* Making the screen responsive at medium level */}
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'><span>Create Acccount</span></Link>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>

        {/*Header bottom */}
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                    {/* logo */}
                    <div className='logo-search-active'>
                        <div className='logo'>
                            <Link to={"/"}>
                                <img src={logo} alt=""/>
                            </Link>
                        </div>
                    </div>

                    {/* Menu area */}
                      <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>    

                        {/* Sign In and Login Area */}
                        <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                        <Link to="/login" className='d-none d-md-block'>Log In</Link>

                         {/* Menu toggler / Hamburger menu */}
                         <div>
                            {/* Note: The onclick functions enables the hamburger menu to click and work */}
                            <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" :""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                         </div>

                         {/* Social Toggle (use icofont "searched on google")*/}
                         <div className='ellepsis-bar d-md-none' onClick={() => setSocialTogggle(!socialToggle)}>
                          <i class="icofont-info-square"></i>
                         </div>

                      </div>
               </div>
            </div>  
       </div>
    </header>
  )
}

export default NavItems
