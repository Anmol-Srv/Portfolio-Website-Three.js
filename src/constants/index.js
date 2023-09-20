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
  kiitopedia,
  aws,
  solidity,
  iitcell,
  eim,
  artifae
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
    title: "Data Analyst Intern",
    company_name: "Artifae, Dubai UAE",
    icon: artifae,
    iconBg: "#383E56",
    date: "October 2022 - January 2023",
    points: [
      "Crafted intuitive Tableau dashboards by translating complex financial data, providing stakeholders with actionable insights to drive business decisions.",
      "Played a pivotal role in guiding lending decisions for loans exceeding $5M, conducting comprehensive feasibility analyses for over 30 firms, emphasizing data-driven decision-making.",
      "Synthesized data insights to generate impactful reports, aiding in the formulation of strategic improvements and future business directions.",
      "Actively collaborated with cross-functional teams, leveraging feedback to refine and optimize data visualizations, ensuring maximum clarity and utility for stakeholders."
    ],
  },
  {
    title: "Full-Stack Web Developer Intern",
    company_name: "IITC - Indraprastha IT Cell (P) Ltd",
    icon: iitcell,
    iconBg: "#383E56",
    date: "June 2021 - August 2021",
    points: [
      "Web Application Leadership: Spearheaded the development and deployment of innovative web applications, resulting in a significant boost in customer growth and engagement.",
      "Custom Solutions & Satisfaction: Delivered bespoke web solutions tailored to client requirements, achieving an outstanding 95% customer satisfaction rate, showcasing adaptability and a user-centric approach.",
      "Iterative Enhancement: Incorporated user feedback to continuously optimize web applications, emphasizing a commitment to enhancing usability and overall user experience.",
      "Full-Stack Development: Demonstrated proficiency in end-to-end web development, leveraging technologies such as ReactJS and NodeJS to drive results and meet diverse client needs"
    ],
  },
  {
    title: "Marketing Intern",
    company_name: "Every Infant Matters (EIM)",
    icon: eim,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Feb 2021",
    points: [
      "Strategic Market Analysis: At Every Infant Matters, a global non-profit combatting health disparities, I led comprehensive market research to pinpoint emerging opportunities, assess needs, and devise strategies for impactful outreach campaigns.",
      "Financial Sustainability: Proactively identified and secured diverse funding avenues across partner countries, ensuring consistent financial backing for pivotal health initiatives.",
      "Partnership Development: Collaborated in grant proposal creation and diligently pursued strategic alliances, establishing enduring partnerships that amplified the organization's long-term reach and efficacy.",
      "Mission-Driven Contribution: Actively furthered the organization's commitment to providing last-mile health solutions, addressing malnutrition and its severe repercussions among underserved populations.",
      "Flagship Project Involvement: Engaged in the pivotal initiative of distributing vitamin A to malnourished children, a crucial step in preventing irreversible blindness and championing child welfare."
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
    name: "KIIOPEDIA - Social Media Platform",
    description:
      "KIITopedia is a full-stack social media platform I contributed to, built using React, NodeJs, Express, MongoDB, Redux, and JWT. It serves as a dynamic and responsive platform with features like user authorization, real-time state management, and content sharing.",
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
      {
        name: "nodeJs",
        color:"blue-text-gradient"
      },
      {
        name: "Redux",
        color: "pink-text-gradient"
      }
    ],
    image: kiitopedia,
    source_code_link: "https://github.com/Anmol-Srv/KIITopedia",
  },
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