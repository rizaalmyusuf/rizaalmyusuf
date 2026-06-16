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
  role: "DevOps Engineer & IT Support",
  avatar: "/images/avatar.jpg",
  email: "rijalmy010600@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier
  languages: ["English", "Bahasa", "Arabic"],
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
  headline: <>Build, Automate, Deploy, and Monitor Applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ALYSA</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest project
        </Text>
      </Row>
    ),
    href: "https://rizaalmyusuf.vercel.app/work/alysa-automation-logic-for-your-system-assurance",
  },
  subline: (
    <>
      I'm {person.firstName}, my fullname is Rizal Maulana Yusuf. <br />A DevOps
      Engineer and IT Support specialist, who is always interested in world
      technological advances.
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
        As a {person.role}, I specialize in IT development and operations. Armed
        with strong analytical skills and experience in building, automating,
        and monitoring digital systems, I am committed to creating innovative
        solutions with real impact. With a balanced academic and professional
        background in technology, I am focused on collaboration, efficiency, and
        IT-based human resource development.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PT. Telekomunikasi Indonesia (Persero) Tbk",
        timeframe: "2025 - 2026",
        role: "DevOps Engineer",
        achievements: [
          <>
            Built and maintained CI/CD pipelines for continuous integration and
            deployment.
          </>,
          <>Built an automated testing framework for improved code quality.</>,
          <>
            Monitored and optimized application performance, resulting in a 30%
            reduction in downtime.
          </>,
          <>
            Implemented containerization using Docker, enhancing scalability and
            resource utilization.
          </>,
          <>
            Built an auto-backup system for databases, ensuring data integrity
            and availability.
          </>,
        ],
      },
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
      {
        company: "CV Petik Emas Indonesia",
        timeframe: "Jan 2022 - Jun 2022",
        role: "Full-Stack Developer",
        achievements: [],
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
        title: "DevOps",
        description: (
          <>
            Able to construct, deploy, maintain, and monitor CI/CD pipelines and
            infrastructure of application.
          </>
        ),
        tags: [
          {
            name: "Version Control (Git)",
            icon: "git",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Bitbucket",
            icon: "bitbucket",
          },
          {
            name: "Bash Scripting",
            icon: "bash",
          },
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Jenkins",
            icon: "jenkins",
          },
          {
            name: "Github Actions",
            icon: "githubActions",
          },
          {
            name: "SonarQube",
            icon: "sonarqube",
          },
          {
            name: "Terraform",
            icon: "terraform",
          },
          {
            name: "Grafana",
            icon: "grafana",
          },
          {
            name: "Prometheus",
            icon: "prometheus",
          },
          {
            name: "OpenTelemetry",
            icon: "opentelemetry",
          },
        ],
        images: [],
      },
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
            icon: "css",
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
          {
            name: "NodeJS",
            icon: "nodejs",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Golang",
            icon: "golang",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MinIO",
            icon: "minio",
          },
          {
            name: "Redis",
            icon: "redis",
          },
          {
            name: "Swagger",
            icon: "swagger",
          },
        ],
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
