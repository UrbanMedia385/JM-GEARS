import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({mobileMenu, handleMobileMenu}) => {
  return (
    <div className={mobileMenu ? 'mobile-nav' : 'mobile-nav show'}>
        <button onClick={handleMobileMenu} type="button" className="close-nav">
            <i className="fal fa-times-circle"></i>
        </button>
        <nav className="sidebar-nav">
            <ul className="metismenu" id="mobile-menu">
            <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">about us</Link></li>
                        <li><Link to="/products">products</Link></li>
                        <li><Link to="/ready-plants">Ready Plants</Link></li>
                        <li><a href="#">Cement Plants <i className="fal fa-plus"></i></a>
                            <ul className="sub-menu">
                                <li><Link to="/cementCompletePlant">Cement Complete Integrated Unit</Link></li>
                                <li><Link to="/cementGrindingUnit">Cement Grinding Unit</Link></li>
                                <li><Link to="/pricing">Cement Plant Spare Parts</Link></li>
                                <li><Link to="/pricing">Cement Part Estimates</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/news">News</Link></li>

            </ul>
        </nav>

        <div className="action-bar">
            <a href="mailto:info@example.com"><i className="fal fa-envelope"></i>info@webmail.com</a>
            <a href="tel:123-456-7890"><i className="fal fa-phone"></i>987-098-098-09</a>
            <Link to='/contact' className="d-btn theme-btn">Contact Us</Link>
        </div>
    </div>    
     
  )
}

export default MobileMenu