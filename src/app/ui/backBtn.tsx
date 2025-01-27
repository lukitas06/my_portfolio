'use client'
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

export default function BackBtn() {

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="w-fit flex flex-row gap-3 justify-center items-center ml-3 mt-3  text-white">
            <button className="text-white rounded-lg  border-x-gray-500 p-1  hover: scale-110 hover:bg-slate-400 hover:text-black" onClick={goBack} >
                <ArrowUturnLeftIcon className='h-6 w-6 ' />
            </button>
            <h1 className="align-middle h-fit m-0">Go back</h1>
        </div>
    )
}