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
  lastName: "Maulana Yusuf",
  name: `Rizal M. Yusuf`,
  role: "Full-Stack Developer & Educator",
  avatar: "/images/avatar.jpg",
  email: "rijalmy010600@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier
  languages: ["English", "Bahasa", "Sundanese", "Arabic"],
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
  headline: <>Building and Maintaining Website Applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">TTW Apps</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest project
        </Text>
      </Row>
    ),
    href: "https://rizaalmyusuf.vercel.app/work/ttw-improve-students-logical-thinking-skills",
  },
  subline: (
    <>
      I'm {person.firstName}, my fullname is Rizal Maulana Yusuf. <br />A
      full-stack developer as well as an educator, who is always interested in
      world technological advances.
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
        As a {person.role}, I specialize in website development and
        technology-based education. Armed with strong analytical skills and
        experience in designing, developing, and optimizing digital systems, I
        am committed to creating innovative solutions with real impact. With a
        balanced academic and professional background in technology and
        education, I am focused on collaboration, efficiency, and IT-based human
        resource development.
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
            Designing and developing national and specialized curricula for
            junior high schools (Package B), which are implemented in 70% of
            student school activities.
          </>,
          <>
            Managing student administrative data and grades, which increased
            efficiency by 50% through a digital system.
          </>,
          <>
            Assisting students in memorizing the Qur'an and developing Islamic
            character, which successfully achieved 2 juz of memorization during
            one academic year.
          </>,
          <>
            Managing the official social media of SMP PINTAR, which increased
            engagement by 20%.
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
            Designing and developing national and customized curricula for
            equivalency programs, which are implemented in 80% of student school
            activities.
          </>,
          <>
            Managing student administrative data and grades, which has increased
            efficiency by 50% through a digital system.
          </>,
          <>
            Managing PKBM PINTAR's official social media, which has increased
            engagement by 40%.
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
            Designing graphic designs for posters/banners/banners for marketing
            or informational purposes, resulting in more than hundreds of
            designs being printed and distributed.
          </>,
          <>
            Assisting in setting up technical electronic equipment for
            activities, which increased event preparation efficiency by 50%.
          </>,
          <>
            Managing the foundation's official website, which increased
            engagement by 10%.
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
        description: <>Developing curriculum.</>,
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
