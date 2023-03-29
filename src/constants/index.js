import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  indra,
  echofy,
  metacrowd,
  aws,
  solidity,
  iitcell,
  eim
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "solidity",
    icon: solidity,
  },
];

const experiences = [
  {
    title: "Full-Stack Web Developer Intern",
    company_name: "IITC - Indraprastha IT Cell (P) Ltd",
    icon: iitcell,
    iconBg: "#383E56",
    date: "June 2021 - August 2021",
    points: [
      "Worked under various professionals to design and develop next-generation web applications for the company and numerous clients using the latest tools and technologies like Docker, AWS, React and RESTful APIs.",
      "Got an opportunity to work collaboratively with various teams and gained experience in various project lifecycle practices like CI/CD pipelining.",
      "Developed websites and software for clients including Reliance VFX Education, AY Task Consulting Agency, and Task and Associates. Explored ways to improve user experience.",
    ],
  },
  {
    title: "Marketing Intern",
    company_name: "Every Infant Matters (EIM)",
    icon: eim,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Feb 2021",
    points: [
      "Investigating emerging markets, assessing the need and then formulating a strategy in accordance with numerous outreach activities and identifying funding sources in the countries with which the organisation is associated.",
      "Assisting in grant writing and searching for strategic partners in the respective countries and closing meaningful partnerships for the long term.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Indraprastha IT Cell Web Portal",
    description:
      "Developed a Web Application for the company using HTML, CSS, JavaScript and various APIs. The website serves as an online portal for showcasing the company's services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: indra,
    source_code_link: "https://www.iitcell.com/",
  },
  {
    name: "ECHOFY Online",
    description:
      "Developed a high-performance and scalable e-commerce web application using React.js and Next.js framework along with Stripe API for faster and hassle-free payment processing and Sanity headless CMS for managing and organizing product data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: echofy,
    source_code_link: "https://echofy-ecommerce-website.vercel.app/",
  },
  {
    name: "META-crowdfunding website",
    description:
      "Designed and developed a decentralized crowdfunding platform on the Ethereum blockchain using Solidity smart contracts, Web3.js and MetaMask wallet integration for secure and easy payment processing.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: metacrowd,
    source_code_link: "https://metacrowdfunding.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };