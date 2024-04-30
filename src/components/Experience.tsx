"use client"
import { MdCircle } from 'react-icons/md';
import * as React from 'react';
import { motion } from "framer-motion"

export interface IExperienceProps {
}

export function Experience(props: IExperienceProps) {
    return (
        <motion.div className=''
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
            <h2 className='text-2xl font-bold'>Experience</h2>
            <div className='container mx-auto px-10 md:w-3/4  py-4'>
                <section className='flex gap-1 sm:gap-2'>
                    <div className='text-purple-700'>
                        <span>2023_</span>
                        <MdCircle />
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <h4 className='font-bold text-lg'>Back End Developer</h4>
                        <h5 className='text-md'>HNG internship</h5>
                        <p className='text-sm italic text-justify'>
                            I completed Stage 3 of the HNG internship program on the backend track, gaining valuable experiences and skills in the process.
                            My internship at HNG provided me with an oppurtunity to further develop my professional capabilities and
                            contribute to real world projects. I look forward to leveraging my experience to make meaninful contributions
                            in future endeavors
                        </p>
                    </div>
                </section>
                <section className='flex gap-1 sm:gap-2'>
                    <div className='text-purple-700'>
                        <span>2023_</span>
                        <MdCircle />
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <h4 className='font-bold text-lg'>Front End Developer</h4>
                        <h5 className='text-md'>Parakletus hub</h5>
                        <p className='text-sm italic text-justify'>
                            I briefly served as a frontend developer at Parakletus, where I contributed to web development
                            projects. During my tenure, I honed my skills in front-end technologies like REACT and NEXT.js
                            and gained practical experiences in delivering high-quality solutions. Though my time at Parakletus was
                            short, I am grateful for the oppurtunuity to contribute to the team's success
                        </p>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}
