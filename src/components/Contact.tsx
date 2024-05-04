'use client'
import * as React from 'react';
import { MdCall, MdEmail } from 'react-icons/md';
import { FaLinkedin, FaInstagram, FaGithub, FaDev } from 'react-icons/fa';
import { motion } from 'framer-motion'

export interface IContactProps {
}

export function Contact(props: IContactProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -100
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeInOut"
            }}
            viewport={{ once: true }}
        >
            <div className='relative  border-purple-700 border-t-2'>
                <h4 className=' p-1 absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold z-10 bg-slate-200 dark:bg-slate-950 inline'>
                    Contact Me
                </h4>
            </div>
            <div className='  flex flex-row justify-evenly flex-wrap align-middle my-10 '>
                <div className='bg-slate-200 dark:bg-slate-900 flex flex-row gap-2 p-3 my-3 rounded-sm'>
                    <MdEmail /> <a href='mailto:oluwatomiloba@gmail.com'>oluwatomiloba@gmail.com</a>
                </div>
                <div className='bg-slate-200 dark:bg-slate-900 rounded-sm  border-b-1 border-b-yellow-500 flex flex-row gap-2 p-3 my-3'>
                    <MdCall /> <a href="tel:+2349114722090">+2349114722090</a>
                </div>
                <div className='bg-slate-200 dark:bg-slate-900 rounded-sm  border-b-1 border-b-yellow-500 flex flex-row gap-2 p-3 my-3'>
                    <MdCall /> <a href="#">Ibadan Nigeria</a>
                </div>
                <div>

                </div>

            </div>
            <div className='relative  border-purple-700 border-t-2'>
                <div className=' p-2 absolute -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold z-10 bg-slate-200 dark:bg-slate-950 inline'>
                    <div className="flex flex-row gap-2">
                        <a href="https://github.com/tomiloba2"
                            title='github'
                            className='hover:text-yellow-500 cursor-pointer'>
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/omojolatomiloba-david-frontend-and-backend-developer-b31506255"
                            title='linkedin'
                            className='text-cyan-500 hover:text-yellow-500 cursor-pointer'>
                            <FaLinkedin />
                        </a>
                        <a href="https://instagram.com/tomiloba211"
                            title='instagram'
                            className='text-red-500 hover:text-yellow-500 cursor-pointer'>
                            <FaInstagram />
                        </a>
                        <a href="https://dev.to/tomiloba2"
                            title='dev.to'
                            className=' hover:text-yellow-500 cursor-pointer'>
                            <FaDev />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}



