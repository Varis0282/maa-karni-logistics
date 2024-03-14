import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navbarLinks = [
        { label: "HOME", link: "/home" },
        { label: "ABOUT US", link: "/about-us" },
        { label: "SERVICES", link: "/services" },
        { label: "GET A QUOTE", link: "/get-a-quote" },
        { label: "CONTACT US", link: "/contact-us" },
        { label: "OUR CLIENTS", link: "/our-clients" },
        { label: "OUR USP", link: "/our-usp" }
    ];
    const navigate = useNavigate();
    return (
        <div className="flex flex-row justify-between w-[80%] py-4">
            <div className="flex flex-col py-4 justify-center items-center text-xl font-bold">
                <p>Maa Karni Logistics</p>
            </div>
            {navbarLinks.map((link, index) => (
                <div className='font-medium text-center cursor-pointer border-b-2 border-transparent py-4 hover:border-gray-400 transition-all duration-100'
                    onClick={() => {
                        navigate(link.link);
                    }}
                    key={index}
                >
                    {link.label}
                </div>
            ))}
        </div>
    );
};

export default Navbar;