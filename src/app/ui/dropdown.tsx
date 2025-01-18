
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function Dropdown({ title, Icon, description }: { title: string, Icon: any, description: string[] }) {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };

    return (
        <div className="card-div md:w-2/3 lg:w-3/12 shrink-0  flex flex-col snap-center relative rounded-xl h-fit shadow-md shadow-black"  >

            <div onMouseEnter={open} onMouseLeave={close} className="relative inline-block text-left rounded-xl transition ease-in duration-300 hover:transform hover:scale-110 hover:z-20">

                <div className=' flex flex-row items-center justify-center gap-4 p-4' >

                    <div className='z-0 icon-div content-center'>
                        <Icon className='icon h-9 ' />
                    </div>
                    <div className='z-0 project-text'>
                        <h2 className='text-center'>{title}</h2>
                    </div>
                </div>

                {isOpen && (
                    <div
                        className="px-8 py-10 flex-col items-center absolute z-20 w-fit h-min  top-0 left-0 bg-white text-black rounded-xl"
                        role="menu"
                    >
                        <h2 className='text-center font-bold text-xl mb-4'>{title}</h2>
                        <ul className='list-disc text-left flex flex-col justify-center '>
                            {description.map((item, index) => (
                                <li className='mb-2 w-fit' key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>

    );
}