import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  useEffect(()=>{
    const a = document.querySelector(".mobile-nav-toggle");
    console.log(a);
  },[])
  return (
    <>
      <header id="header" className="header sticky-top">

        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
              <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="/#" className="twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="/#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="/#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="/#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="branding">

          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              
              <h1 className="sitename">Eterna<br /></h1>
            </a>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li><Link to="/" className="">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="blog">Blog</Link></li>
                <li className="dropdown"><a href="/#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="/#">Dropdown 1</a></li>
                    <li className="dropdown"><a href="/#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                      <ul>
                        <li><a href="/#">Deep Dropdown 1</a></li>
                        <li><a href="/#">Deep Dropdown 2</a></li>
                        <li><a href="/#">Deep Dropdown 3</a></li>
                        <li><a href="/#">Deep Dropdown 4</a></li>
                        <li><a href="/#">Deep Dropdown 5</a></li>
                      </ul>
                    </li>
                    <li><a href="/#">Dropdown 2</a></li>
                    <li><a href="/#">Dropdown 3</a></li>
                    <li><a href="/#">Dropdown 4</a></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

          </div>

        </div>

      </header>
      
    </>
  )
}
