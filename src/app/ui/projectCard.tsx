'use client'

import { useState } from "react";

export default function ProjectCard({ title, description, image, codeLink }: { title: string, description: string, image: string, codeLink: string, detailsLink: string }) {

    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };

    const goToCode = (url: string) => {
        // router.push(codeLink);
        console.log(url);
    }

    return (
        <div onClick={() => goToCode(codeLink)} onMouseEnter={open} onMouseLeave={close} className="relative projectCard flex flex-col items-center justify-center bg-white w-80 h-fit rounded-xl hover:scale-110 hover:rounded-xl">
            <div className="image-div w-full h-1/2 aspect-w-16 aspect-h-9">
                <img src={image} alt="Imagen del proyec" className="z-10 w-full h-48 object-cover rounded-t-xl" />
            </div>
            <div className="text-div w-full bg-gray-200 px-3 py-5 rounded-b-xl">
                <h1 className="font-semibold text-xl text-center text-black">{title}</h1>
            </div>
            {
                isOpen && (
                    <div className="flex flex-col px-5 py-5 justify-center items-center absolute z-20 w-full h-full top-0 left-0 bg-white text-black rounded-xl hover:rounded-xl">
                        <h2 className='text-center font-bold text-xl mb-1'>{title}</h2>
                        <p className="text-center">{description}</p>
                    </div>
                )
            }
        </div>
    );
}