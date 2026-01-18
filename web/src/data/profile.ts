export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  images: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  dates: string;
  details: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  dates: string;
  bullets: string[];
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  shortBio: string;
  longBio: string[];
  hero: {
    kicker: string;
    availability: string;
  };
  focusAreas: string[];
  stats: Stat[];
  ctas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  navigation: {
    sections: NavItem[];
  };
  navCta: { label: string; href: string };
  socialLinks: SocialLink[];
  projects: Project[];
  featuredProjectSlugs: string[];
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  resume: {
    label: string;
    href: string;
    summary: string;
  };
  contact: {
    heading: string;
    description: string;
    pageIntro: string;
    availability: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
      sendingLabel: string;
      successTitle: string;
      successText: string;
      errorTitle: string;
      errors: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
        messageMin: string;
      };
    };
  };
  footer: {
    description: string;
    note: string;
    links: NavItem[];
  };
  avatar: {
    src: string;
    alt: string;
  };
  site: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
  };
  ui: {
    aboutTitle: string;
    aboutSubtitle: string;
    focusAreasLabel: string;
    featuredProjectsLabel: string;
    featuredProjectsSubtitle: string;
    seeAllProjectsLabel: string;
    skillsTitle: string;
    skillsSubtitle: string;
    experienceEducationTitle: string;
    experienceEducationSubtitle: string;
    experienceLabel: string;
    educationLabel: string;
    certificationsLabel: string;
    certificationsSubtitle: string;
    certificationsEmptyLabel: string;
    contactLinksLabel: string;
    projectsPageTitle: string;
    projectsPageIntro: string;
    resumePageTitle: string;
    resumePageIntro: string;
    contactPageTitle: string;
    contactPageIntro: string;
    filterLabel: string;
    filterAllLabel: string;
    projectsEmptyLabel: string;
    viewProjectLabel: string;
    viewCodeLabel: string;
    liveDemoLabel: string;
    backToProjectsLabel: string;
    projectProblemLabel: string;
    projectSolutionLabel: string;
    projectImpactLabel: string;
    projectTechStackLabel: string;
    projectLinksLabel: string;
    projectLinksEmptyLabel: string;
    footerQuickLinksLabel: string;
    mainNavLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    themeToggleLabel: string;
  };
};

export const profile: Profile = {
  name: 'Muhammad Saidov',
  role: 'ICT / IT Student | Developer',
  location: 'Tashkent, Uzbekistan',
  shortBio:
    'I build dependable systems and clean interfaces with a focus on data, networks, and practical web tools.',
  longBio: [
    'I am an ICT and IT student who enjoys mixing structured data work with clean, usable interfaces.',
    'My process starts with system mapping and data modeling, then moves into automation and UI polish.',
    'I focus on database design, network documentation, and web applications that solve real tasks.',
    'Right now I am sharpening my skills in networking, cloud fundamentals, and performance minded UX.',
  ],
  hero: {
    kicker: 'Reliable systems, clear UX',
    availability: 'Open to internships and junior roles',
  },
  focusAreas: [
    'Database design and SQL automation',
    'Network planning and documentation',
    'Backend services and scripting',
    'User focused web applications',
  ],
  stats: [
    { label: 'Projects delivered', value: '12+' },
    { label: 'Years of study', value: '3+' },
    { label: 'Focus areas', value: '4' },
  ],
  ctas: {
    primary: { label: 'View Projects', href: '#projects' },
    secondary: { label: 'Contact', href: '#contact' },
  },
  navigation: {
    sections: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  navCta: {
    label: 'Resume',
    href: '/resume',
  },
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/username' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/username' },
    { label: 'Telegram', url: 'https://t.me/username' },
    { label: 'Email', url: 'mailto:muhammad@example.com' },
  ],
  projects: [
    {
      slug: 'banking-data-warehouse',
      title: 'Banking Data Warehouse',
      description:
        'Normalized SQL Server schema with reporting views for core banking data.',
      problem:
        'Financial data lived across siloed tables with inconsistent reporting definitions.',
      solution:
        'Designed a normalized schema, created ETL scripts, and added indexed reporting views.',
      impact:
        'Reduced report generation time by 60 percent and improved audit readiness.',
      techStack: ['SQL Server', 'T-SQL', 'SSIS', 'Power BI'],
      githubUrl: 'https://github.com/username/banking-data-warehouse',
      liveUrl: '',
      images: ['/images/projects/banking-db.svg'],
    },
    {
      slug: 'netmap-diagram-tool',
      title: 'NetMap Diagram Tool',
      description:
        'Interactive web tool for mapping campus networks and exporting topology diagrams.',
      problem:
        'Network documentation was spread across files with no unified view.',
      solution:
        'Built a browser based editor with reusable nodes, labels, and export features.',
      impact:
        'Improved onboarding time for new technicians and reduced configuration errors.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SVG'],
      githubUrl: 'https://github.com/username/netmap-diagram-tool',
      liveUrl: 'https://example.com',
      images: ['/images/projects/netmap.svg'],
    },
    {
      slug: 'automation-suite',
      title: 'Python Automation Suite',
      description:
        'Set of scripts that automate reports, clean files, and validate data inputs.',
      problem:
        'Weekly reporting and cleanup tasks were manual and error prone.',
      solution:
        'Created a modular Python toolkit with reusable validators and schedulable jobs.',
      impact:
        'Saved several hours per week and improved data consistency.',
      techStack: ['Python', 'Pandas', 'SQLite', 'Docker'],
      githubUrl: 'https://github.com/username/automation-suite',
      liveUrl: '',
      images: ['/images/projects/automation-suite.svg'],
    },
    {
      slug: 'campus-service-portal',
      title: 'Campus Service Portal',
      description:
        'Helpdesk portal for student requests with clear status tracking and routing.',
      problem:
        'Requests were handled through email threads with poor visibility.',
      solution:
        'Built a responsive web app with role based dashboards and ticket workflows.',
      impact:
        'Centralized support requests and improved response time.',
      techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/username/campus-service-portal',
      liveUrl: 'https://example.com',
      images: ['/images/projects/campus-portal.svg'],
    },
  ],
  featuredProjectSlugs: [
    'banking-data-warehouse',
    'netmap-diagram-tool',
    'automation-suite',
  ],
  skills: [
    {
      category: 'Programming',
      items: ['TypeScript', 'Python', 'C#', 'SQL', 'Bash'],
    },
    {
      category: 'Databases',
      items: [
        'SQL Server',
        'PostgreSQL',
        'SQLite',
        'ER Modeling',
        'Query Optimization',
      ],
    },
    {
      category: 'Networking',
      items: [
        'Cisco Packet Tracer',
        'IP Subnetting',
        'LAN and WAN',
        'Network Security Basics',
      ],
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'Linux', 'VS Code', 'Figma'],
    },
  ],
  experience: [
    {
      company: 'Tashkent Smart Lab',
      role: 'IT Support Intern',
      dates: '2023 - Present',
      bullets: [
        'Supported network troubleshooting and device inventory audits.',
        'Documented recurring system issues and resolution steps.',
        'Assisted with database backups and access control reviews.',
      ],
    },
    {
      company: 'Freelance Projects',
      role: 'Developer',
      dates: '2021 - 2023',
      bullets: [
        'Delivered small automation scripts and reporting tools for local teams.',
        'Translated business needs into clear workflows and data models.',
      ],
    },
  ],
  education: [
    {
      school: 'Tashkent University of Information Technologies',
      degree: 'BSc in Information Technology',
      dates: '2021 - 2025',
      details: [
        'Coursework in databases, networks, and software engineering.',
        'Led a student team for a semester long systems design project.',
      ],
    },
  ],
  certifications: [
    {
      title: 'Cisco Networking Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2024',
    },
  ],
  resume: {
    label: 'Download Resume PDF',
    href: '/resume.pdf',
    summary: 'Replace the PDF in public/resume.pdf with your latest resume.',
  },
  contact: {
    heading: "Let's build something reliable.",
    description:
      'If you have a project or collaboration in mind, send a message and I will reply.',
    pageIntro:
      'Send a message or reach out through the channels below. I reply within a few days.',
    availability: 'Available for internships, part time roles, and project work.',
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project.',
      submitLabel: 'Send message',
      sendingLabel: 'Sending...',
      successTitle: 'Message sent',
      successText: 'Thanks for reaching out. I will reply soon.',
      errorTitle: 'Please check the form fields.',
      errors: {
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email.',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Please enter a message.',
        messageMin: 'Message should be at least 10 characters.',
      },
    },
  },
  footer: {
    description: 'Building reliable systems and clean interfaces.',
    note: 'All rights reserved.',
    links: [
      { label: 'Projects', href: '/projects' },
      { label: 'Resume', href: '/resume' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  avatar: {
    src: '/images/profile.svg',
    alt: 'Abstract portrait illustration',
  },
  site: {
    title: 'Muhammad Saidov | ICT / IT Student',
    description:
      'Portfolio of Muhammad Saidov featuring projects, skills, and contact details.',
    url: 'https://example.com',
    ogImage: '/images/og-image.svg',
  },
  ui: {
    aboutTitle: 'About',
    aboutSubtitle: 'Short bio, focus areas, and quick stats.',
    focusAreasLabel: 'Focus areas',
    featuredProjectsLabel: 'Featured Projects',
    featuredProjectsSubtitle: 'Selected work across data, automation, and web.',
    seeAllProjectsLabel: 'See all projects',
    skillsTitle: 'Skills',
    skillsSubtitle: 'Tools and technologies I use daily.',
    experienceEducationTitle: 'Experience and Education',
    experienceEducationSubtitle: 'Hands on roles and learning milestones.',
    experienceLabel: 'Experience',
    educationLabel: 'Education',
    certificationsLabel: 'Certifications and Awards',
    certificationsSubtitle: 'Learning milestones and recognitions.',
    certificationsEmptyLabel: 'Add certifications and awards in profile.ts.',
    contactLinksLabel: 'Connect',
    projectsPageTitle: 'Projects',
    projectsPageIntro:
      'A focused selection of work across databases, networks, and web tools.',
    resumePageTitle: 'Resume',
    resumePageIntro: 'Download the PDF version of my resume.',
    contactPageTitle: 'Contact',
    contactPageIntro: 'Send a message or connect on social platforms.',
    filterLabel: 'Filter by tech',
    filterAllLabel: 'All',
    projectsEmptyLabel: 'No projects match this filter.',
    viewProjectLabel: 'View project',
    viewCodeLabel: 'View code',
    liveDemoLabel: 'Live demo',
    backToProjectsLabel: 'Back to projects',
    projectProblemLabel: 'Problem',
    projectSolutionLabel: 'Solution',
    projectImpactLabel: 'Impact',
    projectTechStackLabel: 'Tech Stack',
    projectLinksLabel: 'Project links',
    projectLinksEmptyLabel: 'No public links available yet.',
    footerQuickLinksLabel: 'Quick links',
    mainNavLabel: 'Main navigation',
    openMenuLabel: 'Open menu',
    closeMenuLabel: 'Close menu',
    themeToggleLabel: 'Toggle theme',
  },
};
