import Image from 'next/image';
import * as React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdPlayCircle, MdLink } from 'react-icons/md';
import { Modal } from './Modal';

export interface IProjectProps {

    title: string
    img: string
    skills: string[]
    links: string[]
    description: string
}

export function Project(props: IProjectProps) {
    const { title, img, skills, links, description } = props
    const [open, setOpen] = React.useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)
    return (
        <section
            key={title}
            className='grid lg:grid-cols-2 shadow-sm shadow-cyan-950 rounded-md py-2 '>
            <div className='grid place-items-center'>
                <Image
                    src={img}
                    alt={title}
                    width={150}
                    height={20}
                />
            </div>
            <div className='text-center md:text-justify'>
                <h4 className='text-purple-700 text-lg px-2'>{title}</h4>
                <div>
                    <ul className='underline py-2 font-bold'>
                        {skills.map((skill) => {
                            return (
                                <li
                                    key={skill}
                                    className='inline-block px-2'>{skill}</li>
                            )
                        })}
                    </ul>
                </div>
                <p className=' italic  p-2'>
                    {description}
                </p>
                <div className=' px-2 flex flex-row justify-center md:justify-start gap-5 text-2xl py-2'>
                    <a href={links[0]} className=' hover:text-purple-400 text-blue-500' title='live website'>
                        <MdLink />
                    </a>
                    <a href={links[1]} className='hover:text-purple-400' title='github repository'>
                        <FaGithub />
                    </a>
                    <p
                        className='hover:text-purple-400 text-red-700'
                        title='video record'
                        onClick={onOpenModal}>
                        <MdPlayCircle />
                    </p>
                    <Modal open={open} onCloseModal={onCloseModal} src={links[2]} />
                </div>
            </div>
        </section>

    );
}
