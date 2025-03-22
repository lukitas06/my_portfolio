
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import '@/app/styles/dropdown.css'


export default function Dropdown({ title, Icon, description,delay }: { title: string, Icon: any, description: string[],delay:number }) {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        setIsOpen(true);
    };
    const close = () => {
        setIsOpen(false);
    };

    const classname = isOpen ? 'dropdown-div border border-gray-200 shadow-md rounded-xl w-4/5 text-center' : 'dropdown-div shadow-md rounded-xl w-4/5 text-center'

    return (
        <div className= {classname}  >

            <div onMouseEnter={open} onMouseLeave={close} className="relative inline-block text-left rounded-xl transition ease-in duration-300 hover:transform hover:scale-110 hover:z-20  ">

                <div className=' flex flex-row items-center justify-center gap-4 p-4' >

                    <div className='z-0 icon-div content-center'>
                        <Icon className='icon h-9 ' />
                    </div>
                    <div className='z-0 project-text'>
                        <h2 className='text-center'>{title}</h2>
                    </div>
                </div>

            </div>
                {isOpen && (
                    <div className=" ">
                        <ul className='list-disc flex flex-col justify-center align-center items-center px-8 pb-4'>
                             {description.map((item, index) => (
                                 <li className='mb-2 w-fit text-center text-lg' key={index}>{item}</li>
                             ))}
                         </ul>
                    </div>
                    // <div
                    //     className="px-8 py-10 flex-col items-center absolute z-20 w-fit h-min  top-0 left-0 bg-white text-black rounded-xl"
                    //     role="menu"
                    // >
                    //     <h2 className='text-center font-bold text-xl mb-4'>{title}</h2>
                    //     <ul className='list-disc text-left flex flex-col justify-center '>
                    //         {description.map((item, index) => (
                    //             <li className='mb-2 w-fit' key={index}>{item}</li>
                    //         ))}
                    //     </ul>
                    // </div>
                )}
        </div>

    );
}