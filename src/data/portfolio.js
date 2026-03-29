/**
 * Central content for the portfolio — edit here to update copy and links.
 */

export const profile = {
  name: 'Ajmal CV',
  title: 'MERN Stack Developer',
  tagline: 'Building scalable and modern web applications',
  resumePath: '/resume.pdf',
}

export const about = {
  summary:
    'MERN stack developer skilled in MongoDB, Express.js, React and Node.js. Experienced in building scalable web apps, APIs, and modern UIs.',
  highlights: [
    'RESTful APIs & JWT authentication',
    'Real-time features (Socket.IO, WebRTC)',
    'Payment integrations & cloud media',
    'Responsive, accessible interfaces',
  ],
}

export const skillCategories = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Redux', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Postman', 'Figma'],
  },
  {
    title: 'Integrations',
    items: ['Razorpay', 'Cloudinary', 'Firebase', 'Socket.IO', 'WebRTC'],
  },
]

export const featuredProjects = [
  {
    id: 'playbook',
    name: 'PlayBook',
    subtitle: 'Turf Booking App',
    description:
      'A full-featured turf booking platform with chat, video calls, and payments.',
    tech: ['MERN', 'Socket.io', 'WebRTC', 'Razorpay'],
    features: [
      'Real-time chat',
      'Video/audio call',
      'JWT auth + OTP verification',
    ],
    liveUrl: 'https://play-book.xyz',
    githubUrl: 'https://github.com/ajmalcvaju/PlayBook',
    filter: 'featured',
  },
  {
    id: 'elegance',
    name: 'Elegance Store',
    subtitle: 'E-commerce',
    description:
      'E-commerce platform with product management and payments.',
    tech: ['Node', 'Express', 'MongoDB', 'Bootstrap'],
    features: [],
    liveUrl: 'https://elegance-shop.xyz',
    githubUrl: 'https://github.com/ajmalcvaju/Elegance.com',
    filter: 'featured',
  },
]

export const miniProjects = [
  { name: 'Quiz App', filter: 'mini' },
  { name: 'Netflix Clone', filter: 'mini' },
  { name: 'OLX Clone', filter: 'mini' },
  { name: 'MERN Login', filter: 'mini' },
  { name: 'Sales Report App', filter: 'mini' },
]

export const experience = [
  {
    role: 'Software Engineer Trainee',
    company: 'Squadl Technologies',
    period: '2025',
  },
  {
    role: 'Web Developer',
    company: 'Influocial Technologies',
    period: '2023',
  },
  {
    role: 'Previous roles',
    company: 'Sales, Electrical Supervisor',
    period: '',
  },
]

export const education = [
  {
    title: 'MERN Stack Development',
    institution: 'Brototype',
    period: '2024 – Present',
  },
  {
    title: 'B.Tech EEE',
    institution: 'Kerala University',
    period: '',
  },
]

export const contact = {
  phone: '+91 8714156151',
  email: 'ajmalcvaju1997@gmail.com',
  github: 'https://github.com/ajmalcvaju',
  linkedin: 'https://linkedin.com/in/ajmal-cv',
}

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
