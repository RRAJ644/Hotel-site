import React from 'react'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-cont'>
            <span className='logo'>Booking</span>
            <div className='nav-items'>
                <button className='nav-btn'>Register</button>
                <button className='nav-btn'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar