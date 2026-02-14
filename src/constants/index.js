import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer focused on building robust and scalable web applications. With hands-on experience in modern web development, I have developed my skills in front-end technologies like React, as well as back-end technologies like Python, Django, PostgreSQL, and MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With hands-on experience in modern web development, I have worked with a variety of technologies, including React, Python, Django, PostgreSQL, and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a path where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2026 - Present",
    role: "QA/VAPT",
    company: "Lumica Labs.",
    description: `Worked on Quality Assurance and Vulnerability Assessment & Penetration Testing (VAPT) projects. Performed basic security testing on web applications, identified vulnerabilities such as IDOR, misconfigurations, and authentication flaws, and documented findings with proper reports. Assisted in proxy setup, request interception, and testing workflows using industry tools.`,
    technologies: ["Burpsuite", "REST APIs"],
  },
  {
    year: "2025 - 2025",
    role: "Odoo Functional/Support Intern",
    company: "Nexus Incorporation.",
    description: `Collaborated with the development team to troubleshoot and test module functionalities. Helped train users on ERP features and documented processes.Assisted in functional setup and configuration of Odoo ERP modules.`,
    technologies: ["Odoo", "Python", "PostgreSQL", "XMl"],
  },
  {
    year: "2022 - 2023",
    role: "Graphics Designer",
    company: "Milton College.",
    description: `Designed promotional materials, event posters, and digital graphics for college events and programs. Collaborated with the media and marketing team to maintain consistent branding.`,
    technologies: ["Photoshop", "Canva", "Figma"],
  }
];

export const PROJECTS = [
  {
    title: "College Portal",
    image: project1,
    description:
      "A centralized college platform designed to streamline event management, publish exam results, and showcase campus life through an organized photo gallery",
    technologies: ["HTML", "CSS", "DJango", "Tailwind", "Sqlite"],
  },
  {
    title: "Miles for Smiles",
    image: project2,
    description:
      "A digital hub built to amplify the mission of Miles for Smiles, showcasing community moments through a dynamic gallery while managing charity events and facilitating seamless donations.",
    technologies: ["HTML", "CSS", "Tailwind", "Django", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
  },
  {
    title: "Inventory Management System",
    image: project4,
    description:
      "Built an Inventory Management System to streamline product tracking, user management, and sales operations for better efficiency and record accuracy. The system includes role-based access control, sales reporting, and import/export functionality to manage inventory data effectively.",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Kathmandu, Nepal ",
  phoneNo: "+977 - 9745248889 ",
  email: "work.nikeshh@gmail.com",
};
