'use client'

export default function ScrollBtn() {

    const scroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div onClick={scroll} className='fixed bottom-5 right-5 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer hover:bg-opacity-75 hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </div>
    )
}