import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import HandShakeIcon from '../components/Icon/HandShakeIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jesse Resume',
  description: "",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jesse Puricelli.`,
  description: (
     <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Floridian based <strong className="text-stone-100">Electrical Engineering Student</strong>, currently studying
        at <strong className="text-stone-100">Embry-Riddle Aeronautical University</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me bonding with my <strong className="text-stone-100">pets</strong>,
        hanging out with my <strong className="text-stone-100">friends</strong>, or exploring my natural{' '}
        <strong className="text-stone-100">environment</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
    description: `Hi! I’m passionate about technology, aerospace, and innovation. With a blend of American, Italian, Hispanic, and Irish heritage, I’m currently studying at Embry-Riddle Aeronautical University, focusing on aviation and tech.
                  In my free time, I build model rockets, experiment with Linux, play video games, and explore computer hardware`,
  aboutItems: [
    {label: 'Location', text: 'Fort Lauderdale, FL', Icon: MapIcon},
    {label: 'Age', text: '18', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / Italian / Hispanic / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Model Rocketry, Linux, Video Games, Computer Hardware', Icon: SparklesIcon},
    {label: 'Study', text: 'Embry-Riddle Aeronautical University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Student', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: '',
        level: 100, // Set to maximum level
      },
      {
        name: '',
        level: 100,
      },
      {
        name: '',
        level: 100,
      },
    ],
  },
  {
    name: 'Operating Systems',
    skills: [
      {
        name: '',
        level: 100,
      },
      {
        name: '',
        level: 100,
      },
      {
        name: '',
        level: 100,
      },
    ],
  },
  {
    name: 'Manufacturing',
    skills: [
      {
        name: 'Altium PCB Designer',
        level: 100,
      },
      {
        name: '',
        level: 100,
      },
      {
        name: '',
        level: 100,
      },
    ],
  },
  {
    name: 'Software',
    skills: [
      {
        name: 'Office 365',
        level: 100,
      },
      {
        name: '',
        level: 100,
      },
      {
        name: '',
        level: 100,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected graduation June 2028',
    location: 'Embry-Riddle',
    title: 'Bachelor of Science in Electrical Engineering',
    content: <p></p>,
  },
  {
    date: '',
    location: '',
    title: '',
    content: <p>.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
       date: '',
    location: '',
    title: '',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: '',
    location: '',
    title: '',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
   {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
    {
      name: '',
      text: '',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'JDPuricelli@outlook.com',
      href: '',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Jesse Puricelli',
      href: 'https://www.linkedin.com/in/jesse-puricelli-032902323/',
    },
    {
      type: ContactType.HandShake,
      text: 'Jesse Puricelli',
      href: 'https://app.joinhandshake.com/profiles/61800959',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/JessePuricelli'},
   {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/27386620/jesse'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jesse-puricelli-032902323/'},
   {label: 'HandShake', Icon: HandShakeIcon, href: 'https://app.joinhandshake.com/profiles/61800959'},
  // {label: 'Twitter', Icon: TwitterIcon, href: ''},
 
];
