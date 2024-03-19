import React from 'react'
import './Navbar.css'
import logo  from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} className='logo'></img>
        <ul>
            <li><Link to='Home' smooth={true} offdet={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offdet={0} duration={500}>Program</Link></li>
            <li><Link to='about us' smooth={true} offdet={0} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offdet={0} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offdet={0} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offdet={0} duration={500} className='btn'>Contact us</Link></li>
        </ul>

    </nav>
  )
}

export default Navbar
