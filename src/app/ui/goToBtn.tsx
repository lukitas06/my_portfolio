'use client'


export default function GoToBtn({ text, href }: { text: string, href: string }) {

    return (
        <a target="_" href={href} className="flex border-none w-fit items-center justify-center bg-[#404040] text-white font-semibold text-lg py-2 px-4 rounded hover:bg-gray-700 hover:border-cyan-300 hover:border transition duration-300 ease-in-out">
            {text}
        </a>
    )
}