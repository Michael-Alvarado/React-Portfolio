import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../assets/images/MALogo.jpeg';

const Navbar = () => {
    let Links = [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects' },
        { name: 'Resume', link: '/resume' },
        { name: 'Contact', link: '/contact' },
    ];

    const [option, setOption] = useState(false);

    return (
        <nav className="z-40 w-full fixed top-0 left-0 right-0 bg-night">
            <div className="md:flex items-center justify-between bg-night py-4 md:px-10 px-7">
                <div className="">
                    <Link to='home'>
                        <img alt="MA Logo" className="mr-1 mt-2" src={logo} />
                    </Link>
                </div>
                <div onClick={() => setOption(!option)} className='absolute right-8 top-6 cursor-pointer md:hidden text-4xl'>
                    <i className={option ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                </div>
                <ul 
                    className={`md:flex md:items-center gap-16 md:pb-0 absolute md:static bg-night md:z-auto z-[-1] text-picton-blue
                    left-0 w-full md:w-auto pl-9 transition-all duration-500 ease-in ${option ? 'top-20' : 'top-[-500px]'}`}
                >
                    {Links.map((link) => (
                        <li key={link.name} classname='md:ml-10 font-itim font-semibold text-xl md:my-0 my-7 hover:text-light-rose transition duration-500'>
                            <NavLink onClick={() => setOption(!option)} to={link.link}>
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