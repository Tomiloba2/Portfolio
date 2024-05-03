"use client"
import * as React from 'react';
import { MdSunny, MdDarkMode } from "react-icons/md"

export interface ISearchBarProps {
}

export function Theme(props: ISearchBarProps) {
    const [theme, setTheme] = React.useState(false)
    const onChange = () => {
        if (localStorage.getItem('theme') === 'light') {
            localStorage.setItem('theme', 'dark')
            setTheme(!theme)
        } else {
            localStorage.setItem('theme', 'light')
            setTheme(!theme)
        }
    }

    React.useEffect(() => {
        if (localStorage.getItem('theme') === 'dark' || !('theme' in localStorage)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])
    return (
        <div className=' flex justify-center flex-row'>
            <div
                onClick={onChange}
                className='max-w-20 flex flex-row justify-center gap-1 border-1 text-center hover:cursor-pointer dark:bg-slate-400 bg-slate-100 p-1 dark:text-white  text-black rounded-lg'>
                <p className={`${!theme?`bg-purple-600`:``} px-1 rounded-md`}>
                    <MdSunny />
                </p>
                <p className={`${theme?`bg-purple-600`:``} px-1 rounded-md`}>
                    <MdDarkMode />
                </p>
            </div>
        </div>
    );
}
