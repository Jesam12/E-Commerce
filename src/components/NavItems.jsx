import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
    <header>
        {/* header top start */}
        <div>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'><span>Create Acccount</span></Link>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems
