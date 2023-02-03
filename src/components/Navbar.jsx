import { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
import { Avatar, Link } from '@vechaiui/react';

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
            <div className='flex flex-wrap w-full p-8 space-x-4'>
                <div className=''>
                    <Link to='home'>
                        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" size="3xl" />
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