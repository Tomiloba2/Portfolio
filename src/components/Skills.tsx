'use client'

import Image from 'next/image';
import * as React from 'react';
import { motion } from "framer-motion"

export interface ISkillsProps {
}

export function Skills(props: ISkillsProps) {
    const skillset = [
        { title: "TypeScript", img: "/typescript-removebg-preview.png" },
        { title: "React", img: "/react-removebg-preview.png" },
        { title: "Node", img: "/nodejs-removebg-preview.png" },
        { title: "Express", img: "/express-removebg-preview.png" },
        { title: "Nest", img: "/nest-removebg-preview.png" },
        { title: "Mongodb", img: "/mongodb-removebg-preview.png" },
        { title: "Sql", img: "/sql-removebg-preview(2).png" },
        { title: "Git", img: "/git-removebg-preview.png" },
    ]
    return (
        <motion.div className='flex flex-col gap-5'
            initial={{
                opacity: 0,
                x: 300
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
            viewport={{ once: true }}
        >
            <h2 className='text-2xl font-bold text-center h-1/4'>My Skills</h2>
            <section className='flex h-full flex-row justify-evenly flex-wrap gap-5 align-middle'>
                {skillset.map((item) => {
                    return (
                        <motion.div key={item.title}
                            whileHover={{
                                backgroundColor: "rgb(100, 2, 192)",
                                cursor: "pointer",
                                scale: 1,
                                color: '#000'
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut"
                            }}

                            className='p-4 transition-all delay-100  ease bg-slate-200 dark:bg-slate-900 shadow-sm shadow-cyan-900 rounded-md height-full flex-2 flex flex-col gap-4'>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={100}
                                height={100}
                                className=''
                            />
                            <p className='text-center'>{item.title}</p>
                        </motion.div>
                    )
                })}
            </section>
        </motion.div>
    );
}
