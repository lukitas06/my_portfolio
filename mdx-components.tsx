import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => (
            <h1 style={{ color: 'white', fontSize: '48px', fontWeight: 'semibold', }}>{children}</h1>
        ),
        p: ({ children }) => (
            <p style={{ color: 'white' }}>{children}</p>
        ),
        li: ({ children }) => (
            <li style={{ color: 'white' }}>{children}</li>
        ),
        // code: ({ children }) => (
        //     <code className='rounded-lg bg-slate-400 border border-gray-400' style={{ padding: '15px', display: 'block', width: 'fit-content', }}>{children}</code>
        // ),
        img: (props) => (
            <Image
                width={500}
                height={500}
                sizes="100vw"
                style={{ height: 'auto' }}
                {...(props as ImageProps)}
            />
        ),
        ...components,
    }
}
