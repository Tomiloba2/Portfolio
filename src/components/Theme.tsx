"use client"
import * as React from 'react';
import { MdSunny, MdDarkMode } from "react-icons/md"

export interface ISearchBarProps {
}

export function Theme(props: ISearchBarProps) {
    const onChange = () => {
        if (localStorage.getItem('theme') === 'dark' || !('theme' in localStorage)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.setItem('theme', 'light')
        } else {
            localStorage.setItem('theme', 'dark')
        }
    }


    return (
        <div className=' flex justify-center flex-row'>
            <div
                onClick={onChange}
                className='max-w-20 flex flex-row justify-center gap-1 border-1 text-center hover:cursor-pointer dark:bg-slate-400 bg-slate-100 p-1 dark:text-white  text-black rounded-lg'>
                <p className={` px-1 rounded-md`}>
                    <MdSunny />
                </p>
                <p className={` px-1 rounded-md`}>
                    <MdDarkMode />
                </p>
            </div>
        </div>
    );
}
