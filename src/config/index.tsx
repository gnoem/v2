import React from "react";

import { Icons } from "@components";
import { IFeaturedProject, IService, ISkill } from "@types";

export const projectsList: IFeaturedProject[] = [{
  title: 'Habitat',
  image: '/images/portfolio/habitat.png',
  blurb: "My most recent project, a digital habit tracker. Definitely the coolest thing I've made so far!",
  links: {
    primary: 'https://habi.vercel.app/?demo',
    github: 'https://github.com/gnoem/habitat'
  },
  tags: ['Next.js', 'GraphQL', 'Apollo', 'PostgreSQL', 'Prisma', 'Chart.js'],
  featured: true
}, {
  title: 'Dragonfly',
  image: '/images/portfolio/dragonfly.png',
  blurb: "A simple web app for composing, editing, and organizing rich text notes.",
  links: {
    primary: 'https://ngwdragonfly.herokuapp.com',
    github: 'https://github.com/gnoem/dragonfly'
  },
  tags: ['Node.js', 'Express', 'React', 'MongoDB', 'Draft.js'],
  featured: true,
  wait: true,
}, {
  title: 'Pianopet',
  image: '/images/portfolio/pianopet.png',
  blurb: "Part homework tracker, part virtual pet dress-up game! Built for a music teacher friend of mine.",
  links: {
    primary: 'https://pianopet.herokuapp.com/demo',
    github: 'https://github.com/gnoem/Pianopet'
  },
  tags: ['Node.js', 'Express', 'React', 'MongoDB'],
  featured: true,
  wait: true
}, {
  title: 'TALAS',
  image: '/images/portfolio/talas.png',
  blurb: "Wordpress-based homepage for the Texas Association of Latino Administrators and Superintendents. I built this theme from scratch with HTML, CSS, JavaScript, and PHP.",
  links: {
    primary: 'https://www.talasedu.org'
  },
  tags: ['HTML', '(S)CSS', 'JavaScript', 'PHP', 'Wordpress'],
  featured: false
}, {
  title: 'Rooting For You',
  image: '/images/portfolio/rfy.png',
  blurb: "Wordpress-based homepage for a friend's wellness blog. I built this theme from scratch with HTML, CSS, JavaScript, and PHP.",
  links: {
    primary: 'https://www.mymamajo.com'
  },
  tags: ['HTML', '(S)CSS', 'JavaScript', 'PHP', 'Wordpress'],
  featured: false
}]

export const servicesOffered: IService[] = [
  { icon: <Icons.Palette />, title: 'Web Design', description: "I'll draw up a website design that suits your needs well and creates an excellent first impression. You'll get a clean, attractive design that combines your organization's aesthetic with a simple, clear, and consistent user interface." },
  { icon: <Icons.Code />, title: 'Web Development', description: "I'll build you a functional, responsive website from the ground up. If you have a design ready to go, I'll bring it to life with pixel-perfect accuracy; if not, we can work together to create a design that works for you." },
  { icon: <Icons.Magic />, title: 'Digital Marketing', description: "Take your brand to the next level! I'll work with you to develop a unique brand identity and a strong digital presence for your organization. This service is comprehensive and includes art direction, iconography, web design, and SEO." }
]

export const skillsItems: ISkill[] = [{
  title: 'coding languages',
  listItems: ['HTML', 'CSS/Sass', 'JavaScript (ES6+)', 'TypeScript', 'PHP', 'GraphQL'],
  image: <img src="/images/layout/lilypad1.svg" alt="" />
}, {
  title: 'libraries & frameworks',
  listItems: ['Node.js', 'Express', 'React', 'Redux', 'Three.js', 'Next.js', 'Gatsby', 'Jest', 'Flow'],
  image: <img src="/images/layout/lilypad2.svg" alt="" />
}, {
  title: 'dbs, tools, & platforms',
  listItems: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'Photoshop', 'Illustrator', 'Wordpress', 'Heroku', 'Vercel', 'Netlify'],
  image: <img src="/images/layout/lilypad3.svg" alt="" />
}]