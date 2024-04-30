"use client"
import Image from 'next/image';
import { FaGithub } from "react-icons/fa"
import { MdPlayCircle, MdLink } from 'react-icons/md'
import { motion } from 'framer-motion'
import * as React from 'react';
import { Modal } from './Modal';

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
                ""
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
                ""
            ],
            description: "I created a restaurant webpage using HTML, Materialize and jQuery, emphasizing a user-friendly interface and smooth navigation"
        },
        {
            title: 'Portfolio',
            img: '/nest-removebg-preview.png',
            skills: ['Next.js', "Tailwind", "TypeScript"],
            links: [
                "",
                "",
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
            <Modal open={open} onCloseModal={onCloseModal}>
                <video height={240} width={320} controls>
                    <source src='' type='' />
                </video>
            </Modal>
            <h2 className='text-2xl font-bold text-center py-1'>Portfolio</h2>
            <div className='grid sm:grid-cols-2 gap-4'>
                {portfolioList.map((item) => {
                    return (
                        <section
                            key={item.title}
                            className='grid lg:grid-cols-2 shadow-sm shadow-cyan-950 rounded-md py-2 '>
                            <div className='grid place-items-center'>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={150}
                                    height={20}
                                />
                            </div>
                            <div className='text-center md:text-justify'>
                                <h4 className='text-purple-700 text-lg px-2'>{item.title}</h4>
                                <div>
                                    <ul className='underline py-2 font-bold'>
                                        {item.skills.map((skill) => {
                                            return (
                                                <li
                                                    key={skill}
                                                    className='inline-block px-2'>{skill}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <p className=' italic  p-2'>
                                    {item.description}
                                </p>
                                <div className=' px-2 flex flex-row justify-center md:justify-start gap-5 text-2xl py-2'>
                                    <a href={item.links[0]} className=' hover:text-purple-400 text-blue-500' title='live website'>
                                        <MdLink />
                                    </a>
                                    <a href={item.links[1]} className='hover:text-purple-400' title='github repository'>
                                        <FaGithub />
                                    </a>
                                    <p className='hover:text-purple-400 text-red-700' title='video record'  onClick={onOpenModal}>
                                        <MdPlayCircle />
                                    </p>
                                </div>
                            </div>
                        </section>

                    )
                })}
            </div>
        </motion.div>
    );
}
