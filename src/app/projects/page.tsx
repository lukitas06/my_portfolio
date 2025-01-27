'use server'
import { securityProjects } from "@/lib/generalProjects/securityProjects";
import { simpleProjects } from "@/lib/generalProjects/simpleProjects";
import ProjectCard from "@/app/ui/projectCard"

type Project = {
    title: string,
    description: string,
    image: string,
    codeLink: string,
    detailsLink: string
}

export default async function Project() {

    return (
        <div className="flex flex-col text-white p-2 md:p-8 my-7">
            <div className='cards-container flex flex-col gap-7 mb-20 '>
                <h1 className='text-4xl font-semibold text-center md:text-start'>Simple projects</h1>
                <div className='w-auto inline-flex flex-nowrap mx-2 md:mx-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
                    <div className='w-auto flex items-center justify-center md:justify-start group-hover:animation-pause [&_.projectCard]:mx-8 md:[&_.projectCard]:mx-8 [&_img]:max-w-none animate-infinite-scroll '>
                        {simpleProjects.map((project: Project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                detailsLink={project.detailsLink}
                            />
                        ))}
                    </div>
                    <div className="w-auto flex items-center justify-center md:justify-start group-hover:animation-pause [&_.projectCard]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
                        {securityProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                detailsLink={project.detailsLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='cards-container flex flex-col gap-7'>
                <h1 className='text-4xl font-semibold text-center md:text-start'>Cibersecurity projects</h1>
                <div className='w-auto inline-flex flex-nowrap mx-2 md:mx-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
                    <div className='w-auto flex items-center justify-center md:justify-start group-hover:animation-pause [&_.projectCard]:mx-8 [&_img]:max-w-none animate-infinite-scroll '>
                        {securityProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                detailsLink={project.detailsLink}
                            />
                        ))}
                    </div>
                    <div className="w-auto flex items-center justify-center md:justify-start group-hover:animation-pause [&_.projectCard]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
                        {securityProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                detailsLink={project.detailsLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}