import React from 'react';
import Button from './Button'; // Make sure Button component is correctly implemented
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="px-10 py-2 sticky top-0 z-10 flex items-center justify-between shadow-md bg-gray-100 bg-opacity-80 backdrop-blur-sm">
            <div className='flex gap-[60px] items-center'>
                <div id="logo" className='text-2xl font-bold select-none tracking-tighter'>
                    CampusConnect
                </div>
                <div className='flex gap-8 text-[1.05rem] font-semibold items-center mt-1'>
                    <button className='cursor-pointer hover:text-teal-600'>Home</button>
                    <button className='cursor-pointer hover:text-teal-600'>About Us</button>
                    <button className='cursor-pointer hover:text-teal-600'>Contact</button>
                    <button className='cursor-pointer hover:text-teal-600'>Notifications</button>
                </div>
            </div>
            <div className='flex gap-4'>
                <button onClick={() => {
                    navigate("/login");
                }}><Button btnText="Login" /></button>
                <button onClick={() => {
                    navigate("/signup");
                }}><Button btnText="Sign up" /></button>
            </div>
        </nav>
    );
};

export default Navbar;
