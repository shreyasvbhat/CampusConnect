import React from 'react';
import Button from './Button';

const Navbar = () => {
    return (
        <div className="px-10 py-2 sticky top-0 flex items-center justify-between shadow-md bg-gray-100">
            <div className='flex gap-[60px] items-center'>
                <div id="logo" className='text-2xl font-bold select-none tracking-tighter'>
                    CampusConnect
                </div>
                <div className='flex gap-8 text-[1.05rem] font-semibold items-center mt-1'>
                    <button className='cursor-pointer hover:text-blue-600'>Home</button>
                    <button className='cursor-pointer hover:text-blue-600'>About Us</button>
                    <button className='cursor-pointer hover:text-blue-600'>Contact</button>
                </div>
            </div>
            <div className='flex'>
                <Button btnText={"Login"} />
                <Button btnText={"Sign up"} />
            </div>
        </div>
    );
};

export default Navbar;
