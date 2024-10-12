'use client';
import { React, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            {!show ? <MenuIcon className="xs:flex md:hidden text-white" onClick={() => setShow(!show)} /> : <CloseIcon className="xs:flex md:hidden text-white" onClick={() => setShow(!show)} />}

            <div className={`xs:absolute md:hidden ${show ? 'flex flex-col' : 'hidden'} bg-white mt-[24.3rem] w-full left-0`}>
                <ul className="list-none gap-x-8 text-black items-center">
                    <li className="hover:text-[#b48e40] cursor-pointer font-bold p-4 border-b-[1px] border-slate-400">Home</li>
                    <li className="hover:text-[#b48e40] cursor-pointer font-bold p-4 border-b-[1px] border-slate-400">Pages</li>
                    <li className="hover:text-[#b48e40] cursor-pointer font-bold p-4 border-b-[1px] border-slate-400">Shop</li>
                    <li className="hover:text-[#b48e40] cursor-pointer font-bold p-4 border-b-[1px] border-slate-400">Blog</li>
                    <li className="hover:text-[#b48e40] cursor-pointer font-bold p-4 border-b-[1px] border-slate-400">Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Menu
