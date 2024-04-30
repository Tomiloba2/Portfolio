'use client'

import { HorizontalRule } from '@mui/icons-material';
import * as React from 'react';
import { motion } from "framer-motion"

export interface IAboutProps {
}

export function About(props: IAboutProps) {
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
                delay:0.5,
                duration:1,
                ease:"easeInOut"
            }}
            viewport={{once:true}}
        >
            <h2 className='text-2xl font-bold'>About</h2>
            <div className='px-2 flex flex-row gap-1'>
                <p className=' text-purple-700'><HorizontalRule /> </p>
                <p className='text-justify'>
                    I am a passionate Software developer who is commited to creating amazing online experiences.
                    Having worked in the industry for over a year I have developed my abilities in&nbsp;
                    <span className='text-purple-700'>frontend development</span >,&nbsp;
                    <span className='text-purple-700'>API development</span> and &nbsp;
                    <span className='text-purple-700'>Responsive Web Design</span>.
                    My strategy is based on meeting the specific need of every client by providing individualised solutions that
                    produce outcomes. <br />
                    I enjoy a challenge and I am proud of the creative solutionss I can come up with for challenging issues.
                    Whether it is improving user experiences ,expediting procedures, or raising conversion rates
                </p>
            </div >
        </motion.div>
    );
}
