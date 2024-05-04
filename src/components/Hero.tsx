'use client'

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { FaDev, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { motion } from 'framer-motion'

export interface IHeroProps {
}

export function Hero(props: IHeroProps) {
    return (
        <motion.article className='relative'
            initial={{
                opacity: 0,
                y: -50
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
            <div className='grid sm:grid-cols-2 place-items-center '>
                <section className='flex flex-col gap-10 text-center sm:text-justify'>
                    <div>
                        <h4 className=''> I&apos;M &nbsp;
                            <span className=' text-2xl font-extrabold text-purple-700 '>
                                TOMILOBA DAVID
                            </span>
                        </h4>
                        <h4 className='py-2'>
                            Frontend Developer & Backend Developer
                        </h4>
                    </div>
                    <div>
                        <div className='border-2 border-purple-700 bg-purple-700 hover:bg-purple-500 text-white inline p-2 rounded-md'>
                            <Link href={"#contact"}>Contact Me</Link>
                        </div>
                    </div>
                </section>
                <motion.section>
                    <Image
                        src={`/img.png`}
                        alt='tomiloba developer photo'
                        width={300}
                        height={300}
                        className='dark:sepia rounded-full object-cover'
                    />
                </motion.section>
            </div>
            <div className='absolute bottom-2 right-2'>
                <div className=' text-md font-bold '>
                    <div className="flex flex-col gap-2">
                        <a href="https://github.com/tomiloba2"
                            title='github'
                            className='hover:text-yellow-500 cursor-pointer'>
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/omojolatomiloba-david-frontend-and-backend-developer-b31506255/"
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
        </motion.article>
    );
}
