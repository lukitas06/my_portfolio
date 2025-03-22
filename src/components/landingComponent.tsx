'use client'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { LockClosedIcon } from '@heroicons/react/16/solid';
import { Cog6ToothIcon } from '@heroicons/react/16/solid';
import { ArrowTrendingUpIcon } from '@heroicons/react/16/solid';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Dropdown from '@/app/ui/dropdown';

const iconMapping = {
  lock: LockClosedIcon,
  setting: Cog6ToothIcon,
  trending: ArrowTrendingUpIcon,
};

const knowledge: { title: string; icon: IconKey; description: string[] }[] = [
  {
    title: 'Cibersecurity',
    icon: 'lock',
    description: [
      'Conduct penetration testing (Pentesting) and vulnerability analysis.',
      'Simulate attacks in virtual environments using tools like Nmap, Metasploit, and ZAP.',
      'Participate in cybersecurity challenges such as picoCTF.'
    ],
  },
  {
    title: 'Secure Software Development',
    icon: 'setting',
    description: [
      'Apply OWASP principles in designing and developing APIs and applications.',
      'Automate secure deployments using CI/CD pipelines.',
      'Implement encryption measures and access control in applications.'
    ],
  },
  {
    title: 'Machine Learning and Cybersecurity',
    icon: 'trending',
    description: [
      'Explore how machine learning algorithms can enhance threat detection and anomaly analysis in networks.'
    ]
  }
];

type IconKey = 'lock' | 'setting' | 'trending';

export default function LandingComponent() {

  const proyectRef = useRef(null);
  // const isVisibleProyects = useIsVisible(proyectRef);

  const { ref, inView } = useInView({
    threshold: 0.1, // 10% visible
  });

  useEffect(() => {
    if (inView) {
      const element = document.getElementById('scroll-to');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [inView, ref]);

  return (
    <div className="flex justify-center items-center flex-col mb-36 w-full gap-8 lg:gap-32">
      <div ref={ref} className='flex flex-col lg:flex-row p-12 justify-between items-center lg:px-28 animate-fade-out-down [animation-timeline:scroll()] [animation-range:0px_300px] supports-no-scroll-driven-animations:animate-none'>
        <div className='flex flex-col gap-5 w-full align-center justify-center mt-11 mb-5'>
          <h1 className='text-7xl h-fit mt-30 text-center lg:text-start'><span className='text-4xl'>Hi, i am</span><br></br><span className='font-bold tracking-wide text-red-400'>Lucas Alegre</span><br></br><span className='text-3xl font-medium leading-tight'>Computer Engineering Student</span></h1>
          <button className='self-center md:self-start p-3 mt-3 border rounded-md flex flex-row gap-3 w-40 hover:scale-110 hover:border-blue-400'>Contact me <ArrowRightIcon className='h-6' /> </button>
        </div>
        <p className='font-medium text-xl leading-relaxed tracking-wide w-full text-center md:text-start lg:w-3/5 text-gray-400'>My focus is on building robust software that combines technological innovation with secure development practices to protect information and ensure privacy.</p>
      </div>
      <div ref={ref} className={`flex flex-col gap-12 p-10 w-full items-center `}>
        <div ref={proyectRef} className={`flex flex-col justify-center items-center gap-4 w-full transition-opacity ease-in duration-1000`}>
          <h1 className='w-full text-center font-bold text-6xl mb-3 tracking-wide'>What i do?</h1>
          <div className='flex flex-col gap-5 mb-14 justify-around items-center w-full '>
            {knowledge.map((card, index) => (
              <Dropdown key={index} title={card.title} Icon={iconMapping[card.icon]} description={card.description} />

            ))}
          </div>
          <h1 className='w-full text-center font-bold text-2xl mb-3'>My goal</h1>
          <p className='md:w-3/5 text-center text-xl'>To become a cybersecurity professional capable of designing systems and applications that are not only functional but also resilient to modern digital threats.</p>
        </div>
      </div>
    </div>
  );
}
