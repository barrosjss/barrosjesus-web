import React, { useState } from 'react'
import './header.css'

const Header = () => {
    /*=========================== TOGGLE MENU ===========================*/
    const [Toggle, showMenu] = useState(false)

    return (
        <>
            <header className='header'>
                <nav className="nav container">
                    <a href="index.html" className="nav_logo">Barros</a>

                    <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                        <ul className="nav_list grid">
                            <il className="nav_item">
                                <a href="#home" className="nav_link active_link">
                                    <i className="uil uil-estate nav_icon"></i> Home
                                </a>
                            </il>
                            <il className="nav_item">
                                <a href="#about" className="nav_link">
                                    <i className="uil uil-user nav_icon"></i> About
                                </a>
                            </il>
                            <il className="nav_item">
                                <a href="#skills" className="nav_link">
                                    <i className="uil uil-file-alt nav_icon"></i> Skills
                                </a>
                            </il>
                            <il className="nav_item">
                                <a href="#services" className="nav_link">
                                    <i className="uil uil-briefcase-alt nav_icon"></i> Services
                                </a>
                            </il>
                            <il className="nav_item">
                                <a href="#portfolio" className="nav_link">
                                    <i className="uil uil-scenery nav_icon"></i> Portfolio
                                </a>
                            </il>
                            <il className="nav_item">
                                <a href="#contact" className="nav_link">
                                    <i className="uil uil-message nav_icon"></i> Contact
                                </a>
                            </il>
                        </ul>
                        <il className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></il>
                    </div>
                    <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                        <il className="uil uil-apps"></il>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
