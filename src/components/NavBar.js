import React, { useState, useEffect, useRef } from 'react'
import resume from '../assets/Resume_Joseph_Hirotsu_Curr.pdf'

function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const handleHideMenu = () => {
        const elem = document.querySelector("#navbarResponsive");
        elem.classList.remove('show');

      };

    function useOutsideAlerter() {
      useEffect(() => {
        // if clicked outside element
        function handleClickOutside(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            const elem = document.querySelector("#navbarResponsive");
            elem.classList.remove('show');
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    }

  return (
    <nav className= {scrolled ? "navbar-shrink navbar navbar-expand-lg navbar-light fixed-top": "navbar navbar-expand-lg navbar-light fixed-top"} id="mainNav" ref={wrapperRef}>
        <div className="container px-4 px-lg-5">
        {/* Home Button  */}
            <a className="navbar-brand" href="#page-top">Joseph Hirotsu</a>
        {/* Mobile View Menu Toggle */}
            <button className="navbar-toggler navbar-toggler-right shadow-sm" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation" 
            >
                Menu
            </button>
        {/* Nav links */}
            <div className="collapse navbar-collapse " id="navbarResponsive">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about-scroll" onClick={handleHideMenu}>About</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href="#projects" onClick={handleHideMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact" onClick={handleHideMenu}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={resume} target="_blank" rel="noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        {/* social links  */}
            <div className="social d-lg-block d-xl-block">
                <div className="social-icon-container">
                    <a className="social-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joseph-hirotsu/" title="Linkedin">
                        <i className="fab fa-linkedin fa-xl" title="Linkedin"></i>
                    </a>
                    <a className="social-link" target="_blank" rel="noreferrer" href="https://github.com/ChefJoseph" title="Github">
                        <i className="fab fa-github fa-xl" title="Github"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
