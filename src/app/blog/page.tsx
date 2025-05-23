
import ProjectCard from '@/app/ui/projectCard';
import { security }from '@/lib/blog/articles/security';
import { writeUps } from '@/lib/blog/projects/cardsContent';
import '@/app/styles/blog.css';
import { howTo } from '@/lib/blog/articles/security';

export default async function Blog() {

    return (
        <div className='blogs-container flex flex-col gap-12 w-full mt-6'>
            <div id='write-ups' className='flex flex-col md:flex-row gap-5 justify-center items-center w-full px-2  md:px-8 lg:px-28 lg:py-32'>
                <h1 className='w-full md:w-1/2 text-5xl leading-relaxed text-white text-center font-semibold'>My cybersecurity <br />write-ups</h1>
                <div className='w-full h-fit inline-flex flex-nowrap mx-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
                    <div className='w-auto flex items-center justify-center md:justify-start group-hover:animation-pause [&_.projectCard]:mx-8 [&_img]:max-w-none animate-infinite-scroll '>
                        {writeUps.map((writeUp, index) => (
                            <ProjectCard
                                key={index}
                                title={writeUp.title}
                                description={writeUp.text}
                                image={writeUp.image}
                                detailsLink={writeUp.detailsLink}
                            />
                        ))}
                    </div>
                    <div className="w-auto flex items-center justify-center md:justify-start group-hover:animation-pause [&_.projectCard]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
                        {writeUps.map((writeUp, index) => (
                            <ProjectCard
                                key={index}
                                title={writeUp.title}
                                description={writeUp.text}
                                image={writeUp.image}
                                detailsLink={writeUp.detailsLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div id='cibersecurity' className='w-full  space-y-7 justify-center flex flex-col py-8'>
                <h1 className='section-title mb-10 text-5xl leading-relaxed text-white text-center font-semibold'>Cybersecurity Articles</h1>
                <div className='flex flex-col md:flex-row items-center md:items-start justify-center flex-wrap px-5 gap-5'>
                    {security.map((card, index) => AboutCard(index, card.image, card.title, card.link))}
                </div>
            </div>
            <div id='cibersecurity' className='w-full  space-y-7 justify-center flex flex-col py-8'>
                <h1 className='section-title mb-10 text-5xl leading-relaxed text-white text-center font-semibold'>How to Articles</h1>
                <div className='flex flex-col md:flex-row items-center md:items-start justify-center flex-wrap px-5 gap-5'>
                    {howTo.map((card, index) => AboutCard(index, card.image, card.title, card.link))}
                </div>
            </div>
        </div>
    );
}
function AboutCard(index: number, img: string, title: string, link: string) {
    console.log(link);
    return (
        <div key={index} className='sec-article-card flex flex-col w-72 md:w-96 mb-10 bg-[#404040]'>
            <div className='card-img'>
                <img className='object-fill h-56 w-full' src={img} alt="" />
            </div>
            <div className='flex flex-col gap-5 p-5'>
                <h2 className='font-semibold text-white tracking-wide'>{title}</h2>
                <a href={link} target="_blank"><h2 className='w-fit cursor-pointer text-gray-100 hover:text-red-500'> See more</h2></a>
            </div>
        </div>
    );
}