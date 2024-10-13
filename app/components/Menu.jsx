'use client';
import { React, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material'; // To config MUI icons breakpoints

const Menu = () => {
    const [show, setShow] = useState(false);

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 640,
                md: 768,
                lg: 1024
            }
        }
    });

    return (
        <>
            {!show ? <ThemeProvider theme={theme}><MenuIcon sx={{ display: { md: 'none', xs: 'flex' } }} className="text-white" onClick={() => setShow(!show)} /></ThemeProvider> : <ThemeProvider theme={theme}><CloseIcon sx={{ display: { md: 'none', xs: 'flex' } }} className="text-white" onClick={() => setShow(!show)} /></ThemeProvider> }

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
