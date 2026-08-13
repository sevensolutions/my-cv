export const roles = [
  'Software Architect',
  'Full-Stack Developer',
  'DevOps Enthusiast',
  'Tech Allrounder',
]

export const socials = [
  { name: 'GitHub', href: 'https://github.com/sevensolutions', icon: 'github' },
  { name: 'Instagram', href: 'https://www.instagram.com/__daeny__/', icon: 'instagram' },
  { name: 'Facebook', href: 'https://www.facebook.com/danielpeinhopf7', icon: 'facebook' },
  { name: 'Xing', href: 'https://www.xing.com/profile/Daniel_Peinhopf', icon: 'xing' },
]

export const facts = [
  { label: 'Based in', value: 'Austria', icon: 'map-pin' },
  { label: 'Nationality', value: 'Austrian', icon: 'flag' },
  { label: 'Experience', value: '13+ years', icon: 'briefcase' },
  { label: 'Freelance', value: 'Not available', icon: 'circle-off' },
]

export interface ExperienceItem {
  date: string
  title: string
  place: string
  description?: string
  link?: { href: string; label: string }
}

export const experience: ExperienceItem[] = [
  {
    date: '2023 — Present',
    title: 'Product Owner — BORA',
    place: 'Boom Software AG',
    description: 'Responsible for the architecture and design of the BORA framework, and advising projects on architectural decisions.',
  },
  {
    date: '2020 — 2021',
    title: 'Technical Lead — Boom Rail Solutions',
    place: 'Boom Software AG',
    description: 'Responsible for the technical implementation of the Rail Solutions product line.',
    link: { href: 'https://rail.boomsoftware.com/', label: 'rail.boomsoftware.com' },
  },
  {
    date: '2015 — 2021',
    title: 'Software Developer (R&D)',
    place: 'Boom Software AG',
    description: 'Product development of the Boom Maintenance Manager — a highly configurable maintenance & repair application.',
  },
  {
    date: '2012 — 2015',
    title: 'Software Developer (Total Customizing)',
    place: 'Boom Software AG',
    description: 'Customizing the Boom Maintenance Manager to meet specific customer requirements.',
  },
  {
    date: '2011 — 2012',
    title: 'Community Service',
    place: 'Benedictine monastery of St. Lambrecht',
  },
  {
    date: '2008 & 2009',
    title: 'Internship',
    place: 'MODER Elektrotechnik',
    description: 'Two four-week internships supporting electrical installations and gaining hands-on experience.',
  },
]

export const education: ExperienceItem[] = [
  {
    date: '2006 — 2011',
    title: 'HTBLA Kapfenberg',
    place: 'Regelungstechnik',
    description: 'Successful completion of the Matura after 5 years.',
  },
  {
    date: '2002 — 2006',
    title: 'Technische Hauptschule Pöls',
    place: 'Secondary school, technical focus',
  },
  {
    date: '1998 — 2002',
    title: 'Volksschule Pöls',
    place: 'Elementary school',
  },
]

export const codingSkills = [
  { name: 'C# (.NET)', value: 100 },
  { name: 'HTML / CSS / JS / TS', value: 90 },
  { name: 'Go', value: 75 },
  { name: 'C / C++', value: 65 },
]

export const languageSkills = [
  { name: 'German (native)', value: 100 },
  { name: 'English', value: 90 },
]

export const frameworkSkills = [
  { name: 'BORA', value: 100 },
  { name: '.NET', value: 100 },
  { name: 'Vue / Nuxt', value: 85 },
  { name: 'Entity Framework', value: 75 },
  { name: 'React', value: 60 },
  { name: 'React Native', value: 60 },
]

export const knowledge = [
  'Website / WebApp Hosting',
  'Web Design',
  'DevOps',
  'HashiCorp Nomad, Consul, Terraform',
  'Azure Cloud',
  'MSSQL and PostgreSQL',
  'UX / UI Design',
  'Photography and Video Editing',
  'Umbraco CMS',
  'Electronics',
  'KiCad',
  'Buildroot',
  'Linux Kernel Driver Development',
  'GIT and TFVC Version Control',
]

export type ProjectCategory = 'webApp' | 'mobileApp' | 'website' | 'electronics' | 'openSource'

export const categoryLabels: Record<ProjectCategory, string> = {
  webApp: 'Web App',
  mobileApp: 'Mobile App',
  website: 'Website',
  electronics: 'Electronics',
  openSource: 'Open Source',
}

export const categoryIcons: Record<ProjectCategory, string> = {
  webApp: 'lucide:app-window',
  mobileApp: 'lucide:smartphone',
  website: 'lucide:globe',
  electronics: 'lucide:cpu',
  openSource: 'lucide:github',
}

/** How an image should fill its frame — 'cover' crops to fill (the default), 'contain' letterboxes to show the whole image uncropped (best for logos/screenshots). */
export type ImageFit = 'cover' | 'contain'

export interface GalleryImage {
  src: string
  fit?: ImageFit
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  image: string
  /** Fit mode for the card thumbnail and, when `images` isn't set, the detail dialog's main image. Defaults to 'cover'. */
  imageFit?: ImageFit
  /** Additional images for a photo gallery in the project's detail dialog, each with its own fit mode. Optional — most projects only have one shot. */
  images?: GalleryImage[]
  description: string[]
  link?: { href: string; label: string }
}

export const projects: Project[] = [
  {
    slug: 'automations',
    title: 'AutomationS',
    category: 'electronics',
    image: '/images/works/AutomationS.jpg',
    description: [
      'AutomationS is my own SmartHome solution. It\'s one of my bigger hobby projects and includes big software but also hardware components.',
      'The client software features a graphical flow designer which allows easy no-code programming of complex automations. Due to the long history of this project, it is still a WPF application, though it has already been ported to .NET 6.',
      'The server software is also written in .NET 6, part of my very own AutomationS Operating System, built using Buildroot.',
      'The hardware is designed by me around the Raspberry Pi Compute Module 4, with an M.2 NVMe drive and a CAN port for future extension modules.',
      'Currently it powers my own home, as well as the home of a friend.',
    ],
  },
  {
    slug: 'equitable-app',
    title: 'Equitable App',
    category: 'mobileApp',
    image: '/images/works/Equitable1.jpg',
    imageFit: 'contain',
    images: [
      { src: '/images/works/Equitable1.jpg', fit: 'contain' },
      { src: '/images/works/Equitable2.jpg', fit: 'contain' },
      { src: '/images/works/Equitable3.jpg', fit: 'contain' },
      { src: '/images/works/Equitable4.jpg', fit: 'contain' },
    ],
    description: [
      'Together with three students of the HAK Lambach I developed a timetable mobile app as part of the project "Digitalisierung des Reitplans in der Schulgemeinschaft Agrarbildungszentrum Lambach und HAK Lambach".',
    ],
  },
  {
    slug: 'nomad-iis',
    title: 'Nomad IIS Task Driver',
    category: 'openSource',
    image: 'https://github.com/sevensolutions/nomad-iis/raw/main/artwork/logo.svg',
    imageFit: 'contain',
    description: [
      'Nomad IIS is a task driver for HashiCorp Nomad to run web applications in IIS on Windows machines. Unlike most other Nomad task drivers, this one is written in C# using ASP.NET 8. It uses the Microsoft.Web.Administration API to communicate with IIS.',
      'This is my first real open source project.',
    ],
    link: { href: 'https://github.com/sevensolutions/nomad-iis', label: 'GitHub Repository' },
  },
  {
    slug: 'eingefaedelt',
    title: 'eingefädelt Website',
    category: 'website',
    image: '/images/works/eingefaedelt.png',
    description: [
      'The website of my mom\'s non-profit organization "eingefädelt — Zusammenleben in Vielfalt".',
      'Update: The organization was unfortunately dissolved in 2024, so the website is now offline.',
    ],
  },
  {
    slug: 'church-planner',
    title: 'Church Planner',
    category: 'webApp',
    image: '/images/works/ChurchPlanner.png',
    imageFit: 'contain',
    description: [
      'Church Planner is a small web application for creating schedules across multiple parishes. It allows collaboration of multiple users and generates a print-ready PDF for the newspapers.',
      'This was my first project using Google Firebase — Auth and its document store, with everything else running in the browser.',
    ],
  },
  {
    slug: 'apache-apisix',
    title: 'Contributions to Apache APISIX',
    category: 'openSource',
    image: '/images/works/ApacheApisix.jpg',
    imageFit: 'contain',
    description: [
      'I really like Apache APISIX, a great API gateway. In 2023 I made my first contribution to this open source project.',
    ],
  },
  {
    slug: 'pick-and-place',
    title: 'Pick & Place Machine',
    category: 'electronics',
    image: '/images/works/PickAndPlace.jpg',
    description: [
      'One of my newer projects is a self-made pick-and-place machine for mass-assembly of electronic products.',
    ],
  },
  {
    slug: 'traefik-oidc-auth',
    title: 'Traefik OIDC Authentication Plugin',
    category: 'openSource',
    image: 'https://raw.githubusercontent.com/sevensolutions/traefik-oidc-auth/refs/heads/main/.assets/icon.png',
    imageFit: 'contain',
    description: [
      'A Traefik plugin for securing the upstream service with OpenID Connect, acting as a relying party.',
      'My second real open source project, used by the Traefik community quite a lot.',
    ],
    link: { href: 'https://github.com/sevensolutions/traefik-oidc-auth', label: 'GitHub Repository' },
  },
  {
    slug: 'audio-mixing-console',
    title: 'Digital Audio Mixing Console',
    category: 'electronics',
    image: '/images/works/SoundcraftMixer.jpg',
    description: [
      'In our parish I often help with my audio equipment at various events, such as weddings.',
      'Since setting up all the equipment always took a relatively long time, I built this flight-cased mixing console. It includes a Soundcraft UI24R digital mixer, a super bright industrial touchscreen monitor, a wireless microphone receiver and integrated power distribution.',
    ],
  },
]

export const testimonials = [
  {
    quote: 'Thanks to Daniel Peinhopf, our non-profit organization "eingefädelt" has a very attractive and professional website. We are often asked about this.',
    name: 'eingefädelt',
    company: 'Zusammenleben in Vielfalt',
  },
]
