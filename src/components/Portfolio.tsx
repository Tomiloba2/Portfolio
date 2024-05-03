"use client"
import Image from 'next/image';
import { FaGithub } from "react-icons/fa"
import { MdPlayCircle, MdLink } from 'react-icons/md'
import { motion } from 'framer-motion'
import * as React from 'react';
import { Project } from './Project';

export interface IPortfolioProps {
}

export function Portfolio(props: IPortfolioProps) {
    const portfolioList = [
        {
            title: 'Movie Den',
            img: '/movieDen.jpg',
            skills: ['React', "TypeScript", "CSS", "SASS"],
            links: [
                "https://movie-den.vercel.app",
                "https://github.com/Tomiloba2/movieDen.git",
                "/movie.mp4"
            ],
            description: "I developed a movie website using React, TMDB API, and CSS. This project showcased my proficiency in front-end development and API integration,with a focus on responsible design and user experience"
        },
        {
            title: 'Todo Manager',
            img: '/todo-manager.jpg',
            skills: ['React', "Tailwind", "Appwrite", "TypeScript"],
            links: [
                "https://todo-manager-client.vercel.app",
                "https://github.com/Tomiloba2/Todo-manager.git",
                ""
            ],
            description: "Employing React, TypeScript and API integration, I built a comprehensive Full stack Task Manager application, showcasing my proficiency in front-end and back-end development"
        },
        {
            title: 'BurgerHub',
            img: '/burgerHub.jpg',
            skills: ['Html', "Materialize", "jquery"],
            links: [
                "https://tomiloba2.github.io/BurgerHub/",
                "https://github.com/Tomiloba2/BurgerHub.git",
                "/bugerhub.mp4"
            ],
            description: "I created a restaurant webpage using HTML, Materialize and jQuery, emphasizing a user-friendly interface and smooth navigation"
        },
        {
            title: 'Portfolio',
            img: '/tomi.png',
            skills: ['Next.js', "Tailwind", "TypeScript"],
            links: [
                "https://tomiloba.vercel.app",
                "https://github.com/Tomiloba2/portfolio.git",
                ""
            ],
            description: "Leveraging Next.js, Framer Motion and tailwind, I crafted a fully responsive portfolio, demonstrating my expertise in creating visually appealing and interactive web experiences  "
        }
    ]
    const [open, setOpen] = React.useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 100
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
            <h2 className='text-2xl font-bold text-center py-1'>Portfolio</h2>
            <div className='grid sm:grid-cols-2 gap-4'>
                {portfolioList.map((item) => {
                    return (
                        <Project {...item} />
                    )
                })}
            </div>
        </motion.div>
    );
}
