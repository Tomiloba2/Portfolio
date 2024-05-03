"use client"
import * as React from 'react';
import { Theme } from './Theme';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import { MdCodeOff } from 'react-icons/md';

export interface INavbarProps {
}

export function Navbar(props: INavbarProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className='sticky top-0 z-50 backdrop-blur-lg hidden md:flex justify-between align-middle gap-4 container mx-auto px-4 py-2 '>
                <div id='logo' className='text-purple-700 text-2xl'>
                    <MdCodeOff />
                </div>
                <div id='links' className='px-2 '>
                    <Link href="#about" className='px-2 hover:text-slate-500 hover:underline active:text-purple-700' onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#skill" className='px-2 hover:text-slate-500  hover:underline active:text-purple-700' onClick={() => setIsOpen(false)}>Skill</Link>
                    <Link href="#portfolio" className='px-2 hover:text-slate-500  hover:underline active:text-purple-700' onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <Link href="#blog" className='px-2 hover:text-slate-500  hover:underline active:text-purple-700' onClick={() => setIsOpen(false)}>Blogs</Link>
                    <Link href="#contact" className='px-2 hover:text-slate-500  hover:underline active:text-purple-700' onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
                <div>
                    <Theme />
                </div>
            </nav>
            <nav className='sticky top-0 z-50 backdrop-blur-lg md:hidden container mx-auto px-4 py-2'>
                <section className='flex justify-between'>
                    <div id='logo' className='text-purple-700 text-2xl'>
                        <MdCodeOff />
                    </div>
                    <div id='menu' onClick={handleIsOpen} className='cursor-pointer'>
                        <Menu />
                    </div>
                </section>
                <div id='links'
                    className={`${!isOpen ? `hidden` : ``} bg-slate-800 h-screen flex flex-col text align-middle justify-center text-center`}>
                    <Link href="#about" onClick={() => setIsOpen(false)} className="text-white hover:text-slate-500 p-2  hover:underline active:text-purple-700">About</Link>
                    <Link href="#skill" onClick={() => setIsOpen(false)} className="text-white hover:text-slate-500 p-2  hover:underline active:text-purple-700">Skill</Link>
                    <Link href="#portfolio" onClick={() => setIsOpen(false)} className="text-white hover:text-slate-500 p-2  hover:underline active:text-purple-700">Portfolio</Link>
                    <Link href="#blog" onClick={() => setIsOpen(false)} className="text-white hover:text-slate-500 p-2  hover:underline active:text-purple-700">Blogs</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-slate-500 p-2  hover:underline active:text-purple-700">Contact</Link>
                    <div onClick={() => setIsOpen(false)}>
                        <Theme />
                    </div>
                </div>

            </nav>
        </>
    );
}
