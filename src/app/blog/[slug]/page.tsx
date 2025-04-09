/* eslint-disable @typescript-eslint/no-explicit-any */

import '@/app/styles/project.css'


export default async function ProjectDetails({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params
    console.log(slug)
    const { default: Post } = await import(`@/lib/blog/${slug}.mdx`);

    return (
        <div className='p-10 w-[90%] flex flex-col justify-self-center'>
            <Post />
        </div>
    )
}

