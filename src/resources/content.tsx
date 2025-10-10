import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rizal",
  lastName: "M. Yusuf",
  name: `Rizal M. Yusuf`,
  role: "Back-End Developer & Educator",
  avatar: "/images/avatar.jpg",
  email: "rijalmy010600@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa", "Sunda"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/6285155209076",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/rizaalmyusuf",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://fb.me/rizaalmyusuf",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/rizaalmyusuf",
  },
  {
    name: "X",
    icon: "twitter",
    link: "https://x.com/rizaalmyusuf",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://tiktok.com/rizaalmyusuf",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.gg/3FpkHBBe",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rizaalmyusuf",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/rizaalmyusuf/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building and maintaining website applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Freelance</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Open to work
        </Text>
      </Row>
    ),
    href: "",
  },
  subline: (
    <>
      I'm {person.firstName}, my fullname is Rizal Maulana Yusuf. <br />
	A web developer as well as an educator, who is always interested in world technological advances.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com/rizaalmyusuf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a {person.role}.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Junior High School Homeschooling PINTAR",
        timeframe: "2023 - 2025",
        role: "Vice Principal",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [],
      },
      {
        company: "PKBM PINTAR",
        timeframe: "2023 - 2024",
        role: "Equality Program Manager",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
      {
        company: "Yayasan Percikan Insan Tarbiyah (PINTAR) Indonesia",
        timeframe: "2022 - 2023",
        role: "IT Support",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Indonesia University of Education",
        description: <>Studied computer science of education.</>,
      },
      {
        name: "Vocatinal High School 2 Bandung",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Web Development",
        description: (
          <>Able to develop website applications using framework or native.</>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html5",
          },
          {
            name: "CSS",
            icon: "css3",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "Bootstrap",
            icon: "bootstrap",
          },
          {
            name: "CodeIgniter",
            icon: "codeigniter",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "TailwindCSS",
            icon: "tailwindcss",
          },
        ],
        images: [
          {
            src: "/images/projects/ttw/ttw-3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/enshi/enshi-1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/pjbl/pjbl-3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/booklib/booklib-3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/dailylog/dailylog-3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/ipcam/ipcam-3.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Curriculum Development",
        description: (
          <>Developing curriculum.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Build and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
