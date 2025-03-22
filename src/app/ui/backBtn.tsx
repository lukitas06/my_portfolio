'use client'
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

export default function BackBtn() {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="w-fit flex flex-row gap-3 justify-center items-center ml-3 mt-3  text-white ">
            <button className="text-white p-1 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer hover:bg-opacity-75 hover:scale-110" onClick={goBack} >
                <ArrowUturnLeftIcon className='h-6 w-6 ' />
            </button>
        </div>
    )
}