import React, {useState} from 'react';
import '../Assets/css/navbar.css'
import logo from '../Assets/img/logo.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';

function Navbar() {
    const [burgerMenu, setBurgerMenu] = useState(false)

    const handleChange = () => {
        setBurgerMenu(!burgerMenu);
        console.log(burgerMenu);
    }

    return (
        <div className="navbar-container">
            <nav className="Navbar is-flex">
                <div className="container">
                    <img src={logo} alt="logo_from_comp" className="personaLogo"/>
                </div>
                <div className="container2">
                    <ul className="nav-list is-flex">
                        <li className="nav-list-item">Home</li>
                        <li className="nav-list-item">About</li>
                        <li className="nav-list-item">Services</li>
                        <li className="nav-list-item">Work</li>
                        <li className="nav-list-item">Blog</li>
                        <li className="nav-list-item">Content</li>
                    </ul>
                </div>
                <div className="container3">
                    <ul className='nav-icon is-flex'>
                        <LinkedInIcon className="icon" />
                        <GitHubIcon className="icon"/>
                        <LanguageIcon className="icon"/>
                        <ShareIcon className="icon"/>
                    </ul>
                </div>

                <div className="burger-container">
                    <button className="menu-icon" onClick={handleChange}>
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                        <div className="burgerLine"></div>
                    </button>
                </div>
            </nav>
            {burgerMenu ? (
                <div className="burgerMenuCont">
                    <div className="container-burger">
                        <ul className="nav-list is-flex-column">
                            <li className="nav-list-item">Home</li>
                            <li className="nav-list-item">About</li>
                            <li className="nav-list-item">Services</li>
                            <li className="nav-list-item">Work</li>
                            <li className="nav-list-item">Blog</li>
                            <li className="nav-list-item">Content</li>
                        </ul>
                    </div>
                    <div className="container-burger2">
                        <ul className='nav-icon is-flex'>
                            <LinkedInIcon className="icon"/>
                            <GitHubIcon className="icon"/>
                            <LanguageIcon className="icon"/>
                            <ShareIcon className="icon"/>
                        </ul>
                    </div>
                </div>
            ) : (
                <div>
                </div>
            )
            }
        </div>
    );
}

export default Navbar;