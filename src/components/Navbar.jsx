import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Resume', link: '/resume' },
        { name: 'Contact', link: '/contact' },
    ];
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    return (
        <nav className=''>
        <div className=''>
            <div className=''>
            <Link to='home'>
            <h2>Michael Alvarado</h2>
            </Link>
            </div>
            <div
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            className=''
            >
            <ion-icon name=''></ion-icon>
            </div>
            <ul
            className=''
            >
            {Links.map((link) => (
                <li
                key={link.name} 
                className=''
                >
                <NavLink
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                to={link.link}>
                    {link.name}
                </NavLink>
                </li>
            ))}
            </ul>
        </div>
        </nav>

    );
};

export default Navbar;