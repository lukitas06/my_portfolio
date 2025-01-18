/* eslint-disable @typescript-eslint/no-explicit-any */

import { simpleProjects } from '@/lib/generalProjects/simpleProjects';

interface Post {
    title: string;
    description: string;
    image: string;
    codeLink: string;
    detailsLink: string;
}

// export async function generateStaticParams() {
//     const posts = simpleProjects;

//     return posts.map((post: Post) => ({
//         slug: post.title,
//     }));
// }

export async function generateStaticParams() {
    const projects = simpleProjects;

    return projects.map((post: Post) => ({
        slug: post.title,
    }))
}

export default async function ProjectDetails({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params
    // Get artist information
    const project = getProject(slug);
    // const project = simpleProjects.find((project: Post) => project.title === slug);

    return (
        <div>
            <h1 className='text-2xl '> PAGE NOT IMPLEMENTED</h1>
            <h1 >Project Page {project?.title}</h1>
        </div>
    )
}

function getProject(slug: string) {
    return simpleProjects.find((project: Post) => project.title === slug);
}
