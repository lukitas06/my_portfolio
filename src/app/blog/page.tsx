
import ProjectCard from '@/app/ui/projectCard';
import { security } from '@/lib/articles/security';

const sections = [
    {
        title: 'My write-ups',
        link: '#write-ups',
    },
    {
        title: 'More about Cibersecurity',
        link: '#cibersecurity',
    },
];
const writeUps = [
    {
        title: 'OWASP Juice Shop',
        text: 'OWASP Juice Shop is an intentionally insecure web application that is great for learning about web application security. It is a great way to practice your hacking skills in a legal environment.',
        detailsLink: 'writeups/owasp-juice-shop',
        codeLink: 'todaviaNada',
        image: '/writeups-images/juiceshop.png'
    },
    {
        title: 'CWE Mitigations',
        text: 'The Common Weakness Enumeration (CWE) is a list of common software security weaknesses. This write-up covers some of the most common CWEs and how to mitigate them.',
        detailsLink: 'writeups/cwe-mitigations',
        codeLink: 'todaviaNada',
        image: '/writeups-images/CWE.png',
    },
    {
        title: 'CTF Write-ups',
        text: 'Capture The Flag (CTF) competitions are a great way to practice your hacking skills. This write-up covers some of the most popular CTF challenges and how to solve them.',
        detailsLink: 'writeups/ctf-writeups',
        codeLink: 'todaviaNada',
        image: '/writeups-images/picoctf.jpg',
    }
];
export default async function Blog() {

    return (
        <div className='blogs-container flex flex-col gap-12 w-full mt-6'>
            <div className='flex flex-col gap-5 self-center pl-6'>
                <h1 className='text-2xl  text-white'>Page sections</h1>
                <div className='flex flex-row flex-wrap gap-6'>
                    {sections.map((section, index) => <a key={index} className='p-3 rounded-md w-fit h-fit bg-slate-400 text-black hover:scale-110 ' href={section.link} >{section.title}</a>)}
                </div>
            </div>
            <div id='write-ups' className='flex flex-col md:flex-row gap-5 justify-center items-center w-full px-2  md:px-8 lg:px-28 lg:py-32'>
                <h1 className='w-full md:w-1/2 text-5xl leading-relaxed text-white text-center'>My cybersecurity <br />write-ups</h1>
                <div className='w-full h-fit inline-flex flex-nowrap mx-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
                    <div className='w-auto flex items-center justify-center md:justify-start group-hover:animation-pause [&_.projectCard]:mx-8 [&_img]:max-w-none animate-infinite-scroll '>
                        {writeUps.map((writeUp, index) => (
                            <ProjectCard
                                key={index}
                                title={writeUp.title}
                                description={writeUp.text}
                                image={writeUp.image}
                                codeLink={writeUp.codeLink}
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
                                codeLink={writeUp.codeLink}
                                detailsLink={writeUp.detailsLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div id='cibersecurity' className='w-full  space-y-7 justify-center flex flex-col py-8'>
                <h1 className='section-title mb-10 text-5xl leading-relaxed text-white text-center'>Security Articles</h1>
                <div className='flex flex-col md:flex-row items-center md:items-start justify-center flex-wrap px-5 gap-5'>
                    {security.map((card, index) => AboutCard(index, card.image, card.title, card.link))}
                </div>
            </div>
        </div>
    );
}
function AboutCard(index: number, img: string, title: string, link: string) {
    console.log(link);
    return (
        <div key={index} className='flex flex-col w-72 md:w-96 mb-10 bg-[#404040]'>
            <div className='card-img'>
                <img className='object-fill h-56 w-full' src={img} alt="" />
            </div>
            <div className='flex flex-col gap-5 p-5'>
                <h2 className='font-semibold text-white tracking-wide'>{title}</h2>
                <a href={link} target="_blank"><h2 className='w-fit cursor-pointer text-gray-100 hover:text-red-500'> LEER MÁS</h2></a>
            </div>
        </div>
    );
}