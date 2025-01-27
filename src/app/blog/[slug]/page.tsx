/* eslint-disable @typescript-eslint/no-explicit-any */

import '@/app/styles/project.css'

interface Post {
    title: string;
    description: string;
    image: string;
    codeLink: string;
    detailsLink: string;
}

export default async function ProjectDetails({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params
    console.log(slug)
    const { default: Post } = await import(`@/lib/blog/${slug}.mdx`);

    return (
        <div className='p-10'>
            <Post />
        </div>
    )
}

