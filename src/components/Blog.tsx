'use client'
import Image from 'next/image';
import * as React from 'react';
import {motion} from 'framer-motion'

export interface IBlogsProps {
}

export function Blogs(props: IBlogsProps) {
    const blogList = [
        {
            title: 'Demystifying Client-Side Scripting and Server-Side Scripting',
            img: "/demystifying.avif",
            link: "https://dev.to/tomiloba2/demystifying-client-side-scripting-and-server-side-scripting-49bi"
        }, {
            title: 'How to Optimise your website for optimal performance',
            img: "/optimize.jpg",
            link: "https://dev.to/tomiloba2/how-to-optimize-your-website-for-optimal-performance-466n"
        }, {
            title: 'understanding-the-difference-between-bugs-errors-defects-and-failures-in-software-testing',
            img: "/bugs.avif",
            link: "https://dev.to/tomiloba2/understanding-the-difference-between-bugs-errors-defects-and-failures-in-software-testing-eje"
        }, {
            title: 'understanding-cross-origin-resource-sharing-cors-for-web-developersUndder',
            img: "/cors.avif",
            link: "https://dev.to/tomiloba2/understanding-cross-origin-resource-sharing-cors-for-web-developers-31oa"
        },
    ]
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -300
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeInOut"
            }}
            viewport={{once:true}}
            >
            <h2 className='text-2xl font-bold py-4'>My Blogs</h2>
            <section className='flex h-full flex-row justify-evenly flex-wrap gap-5 align-middle'>
                {blogList.map((item) => {
                    return (
                        <div key={item.title}
                            className='shrink sm:basis-1/3 md:basis-2/5 lg:basis-1/5 p-4 bg-white dark:bg-slate-900 shadow-sm shadow-cyan-950 rounded-md  flex flex-col gap-4'>
                            <div className="grid place-items-center">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={500}
                                    height={500}
                                    className='object-cover'
                                />
                            </div>
                            <a href={item.link} className='text-center text-sm hover:text-purple-700'>{item.title}</a>
                        </div>
                    )
                })}
            </section>

        </motion.div>
    );
}
