'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import '@/app/styles/header.css';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/16/solid';

export default function Header() {

    const [scrollDirection, setScrollDirection] = useState('up');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = (): void => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };


        window.addEventListener("scroll", updateScrollDirection); // add event listener
        console.log(scrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        };
    }, [scrollDirection]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    if (menuOpen) {
        return (
            <div
                className='menu-div fixed top-0 left-0 w-1/2 md:w-1/3 h-full text-white bg-gray-950 z-50 bg-opacity-90'
            >
                <div className='closeMenu-div '>
                    <XMarkIcon onClick={toggleMenu} className='h-10 w-10 place-self-end p-2 hover:scale-110' />
                </div>
                <div className='menu-content flex flex-col justify-center h-full'>
                    <ul className='text-white flex flex-col items-center gap-3'>
                        <li className='page-link'> <Link href="/">HOME</Link></li>
                        <li className='page-link'><Link href="/about">ABOUT</Link></li>
                        <li className='page-link'><Link href="/projects">PROJECTS</Link></li>
                        <li className='page-link'><Link href="/blog">BLOG</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={`header-div sticky ${scrollDirection === "down" ? " -top-20" : "top-0"} justify-between md:justify-around transition-all duration-500 z-50 px-8 md:p-3`}>
                <ul className='w-fit md:hidden flex flex-col justify-around pr-6'>
                    <Bars3BottomLeftIcon onClick={toggleMenu} className='h-8 w-8' />
                </ul>
                <div className='logo-div'>
                    <h1 className='font-bold text-2xl tracking-wider'>Portfolio</h1>
                </div>
                <div className='links-div hidden md:flex'>
                    <ul className=' w-full flex flex-row justify-around text-white'>
                        <li className='page-link'> <Link href="/">HOME</Link></li>
                        <li className='page-link'><Link href="/about">ABOUT</Link></li>
                        <li className='page-link'><Link href="/projects">PROJECTS</Link></li>
                        <li className='page-link'><Link href="/blog">BLOG</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}