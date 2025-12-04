import {
  Code2,
  Database,
  Cloud,
  Lock,
  Terminal,
  Cpu,
  Zap,
  Shield,
  Bug,
  Search,
  Key,
  Skull,
  Layers,
  Box,
  FileCode,
  Smartphone,
  Brain,
  Eye,
  Wifi,
  Globe,
} from "lucide-react";

export const content = {
  developer: {
    hero: {
      title: "Full Stack Developer",
      typewriterWords: [
        "Web Developer",
        "Mobile Developer",
        "UI/UX Enthusiast",
      ],
      subtitle: "Crafting Digital Experiences",
      description:
        "Turning ideas into dynamic, secure, and beautiful digital experiences — from the backend logic to the pixel-perfect front end.",
      cta: "View My Projects",
    },
    about: {
      title: "About Me",
      description:
        "I'm Jerry Juan, a passionate full-stack developer and cybersecurity enthusiast. I specialize in building modern, performant, and secure web and mobile applications. With a background in Laravel, React, and mobile development, I love bridging design, functionality, and security.",
      highlights: [
        "Full Stack Developer (React, Laravel, Tailwind, Flask, Node.js)",
        "Experienced in building complex, scalable platforms",
        "Mobile Development (React Native & flutter)",
        "UI/UX-focused with a strong sense for design and detail",
        "Cloud, API design, and database optimization expert",
        "Always pushing boundaries between software and cybersecurity",
      ],
    },
    skills: [
      { name: "React", iconComponent: Code2 },
      { name: "Laravel", iconComponent: FileCode },
      { name: "Tailwind CSS", iconComponent: Cpu },
      { name: " React Native", iconComponent: Box },
      { name: "Flutter", iconComponent: Terminal },
      { name: "MySQL", iconComponent: Database },
      { name: "Figma", iconComponent: Database },
      { name: "PostgreSQL", iconComponent: Database },
      { name: "Docker", iconComponent: Cloud },
      { name: "Problems solving", iconComponent: Cloud },
      { name: "Team work", iconComponent: Smartphone },
      { name: "Fast learner", iconComponent: Cpu },
      { name: "Git & GitHub", iconComponent: Terminal },
    ],
    projects: [
      {
        id: 1,
        title: "EyesON Parental Control",
        description:
          "A powerful parental control system with LiveView, screen recording, app blocking, download restrictions, keylogging, geolocation tracking, and real-time device lock/unlock via Pusher and WebRTC.",
        tech: [
          "Flutter",
          "Dart",
          "Laravel",
          "Pusher",
          "WebRTC",
          "Google Maps API",
          // "Tailwind",
        ],
        image: "/assets/eyeson/main.jpg",
        images: [
          "/assets/eyeson/main.jpg",
          "/assets/eyeson/photo_1_2025-12-04_12-18-51.jpg",
          "/assets/eyeson/photo_3_2025-12-04_12-18-51.jpg",
          "/assets/eyeson/photo_4_2025-12-04_12-18-51.jpg",
        ],
        github: null,
        live: null,
        featured: true,
      },
      {
        id: 2,
        title: "Gest-Stock",
        description:
          "A plateform for managing stocks, orders, and customers. Built with strong encryption and user-friendly interfaces.",
        tech: ["Laravel 12", "Tailwind CSS", "MySQL", "API", "Security Layers"],
        image: "/assets/Gest-stock/main.jpg",
        images: [
          "/assets/Gest-stock/main.jpg",
          "/assets/Gest-stock/photo_1_2025-12-04_11-35-39.jpg",
          "/assets/Gest-stock/photo_2_2025-12-04_11-35-39.jpg",
          "/assets/Gest-stock/photo_3_2025-12-04_11-35-39.jpg",
          "/assets/Gest-stock/photo_4_2025-12-04_11-35-39.jpg",
          "/assets/Gest-stock/photo_5_2025-12-04_11-35-39.jpg",
        ],
        github: null,
        live: null,
        featured: true,
      },
      {
        id: 3,
        title: "Ekose RX",
        description:
          "A health app connecting users with doctors for online consultations, test bookings, result retrievals, and emergency ambulance calls",
        tech: ["React Native", "tailwind", "AOS"],
        image: "/assets/ekose-rx/main.png",
        images: [
          "/assets/ekose-rx/main.png",
          "/assets/ekose-rx/Screenshot 2025-12-04 112731.png",
          "/assets/ekose-rx/Screenshot 2025-12-04 112820.png",
          "/assets/ekose-rx/Screenshot 2025-12-04 113017.png",
          "/assets/ekose-rx/Screenshot 2025-12-04 113049.png",
        ],
        github: null,
        live: "https://ekose.horizonservicessl.net/",
        featured: true,
      },
      {
        id: 4,
        title: "PublicSprint",
        description:
          "A social platform for enthousiasts to create sprints, follow each other, and share their progress .",
        tech: [
          "laravel",
          "tailwind",
          "mysql",
          "api",
          "react",
          "AI integration",
          
        ],
        image: "/assets/publicSprint/main.png",
        images: [
          "/assets/publicSprint/main.png",
          "/assets/publicSprint/Screenshot 2025-12-02 141631.png",
          "/assets/publicSprint/Screenshot 2025-12-02 141737.png",
          "/assets/publicSprint/Screenshot 2025-12-02 141900.png",
          "/assets/publicSprint/Screenshot 2025-12-02 141934.png",
        ],
        github: null,
        live: null,
        featured: false,
      },
      {
        id: 5,
        title: "Portfolio of Dual Identity",
        description:
          "An animated single-page React portfolio with two dynamic modes — Developer and Ethical Hacker — featuring AOS, glassmorphism, fluorescence, and smooth motion effects.",
        tech: ["React", "Tailwind", "Framer Motion", "AOS"],
        image: "/assets/portfolio/main.png",
        images: [
          "/assets/portfolio/main.png",
          "/assets/portfolio/Screenshot 2025-12-04 114837.png",
          "/assets/portfolio/Screenshot 2025-12-04 114906.png",
          "/assets/portfolio/Screenshot 2025-12-04 114948.png",
        ],
        github: "https://github.com",
        live: "https://your-portfolio-link.com",
        featured: false,
      },
      {
        id: 6,
        title: "Ikary Pay",
        description:
          "A payment platform for users to make payments on an ecommerce plateform.",
        tech: ["React", "Tailwind", "AOS", "Custom CSS Grid", "nodejs", "tailwind", "postgres", "api", "react-native", "express",],
        image: "/assets/ikary-pa/main.png",
        images: [
          "/assets/ikary-pa/main.png",
          "/assets/ikary-pa/Screenshot 2025-12-04 114505.png",
          "/assets/ikary-pa/Screenshot 2025-12-04 114554.png",
          "/assets/ikary-pa/Screenshot 2025-12-04 114609.png",
          "/assets/ikary-pa/Screenshot 2025-12-04 114624.png",
        ],
        github: null,
        live: null,
        featured: false,
      },
    ],
  },

  hacker: {
    hero: {
      title: "Ethical Hacker",
      typewriterWords: [
        "Red Teamer",
        "Penetration Tester",
        "Security Researcher",
      ],
      subtitle: "Securing Digital Frontiers",
      description:
        "Exploring the unseen side of technology — identifying, exploiting, and patching vulnerabilities to strengthen digital infrastructures.",
      cta: "Explore Security Work",
    },
    about: {
      title: "About Me",
      description:
        "I'm a cybersecurity enthousiast and ethical hacker passionate about offensive security, network defense, and red team operations. I conduct realistic penetration tests, build exploit labs, and teach social engineering and ethical hacking with a hands-on, creative approach.",
      highlights: [
        "Red Team vs Blue Team operator",
        "Creator of advanced exploit and defense labs",
        "Expert in Social Engineering & Human Factor Exploitation",
        "Skilled in web exploitation, privilege escalation, and forensics",
        "Researching advanced malware behavior and defensive countermeasures",
      ],
    },
    skills: [
      { name: "Penetration Testing", iconComponent: Shield },
      { name: "Network Security", iconComponent: Lock },
      { name: "Web Exploitation", iconComponent: Bug },
      { name: "Reverse Engineering", iconComponent: Cpu },
      { name: "Cryptography", iconComponent: Key },
      { name: "Social Engineering", iconComponent: Brain },
      { name: "Red Team Ops", iconComponent: Skull },
      { name: "Forensics", iconComponent: Search },
      { name: "Exploitation", iconComponent: Zap },
      { name: "OSINT", iconComponent: Eye },
      { name: "Cloud Security", iconComponent: Cloud },
      { name: "Wireless Attacks", iconComponent: Wifi },
    ],
    projects: [
      {
        id: 1,
        title: "Red vs Blue Simulation",
        description:
          "Led a real-time attack-defense simulation similar to Hack The Box, executing offensive tactics and defensive hardening simultaneously.",
        tech: ["Kali Linux", "Metasploit", "Wireshark", "Custom Scripts"],
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
        featured: true,
      },
      {
        id: 2,
        title: "JWT Exploitation Lab",
        description:
          "Developed a JWT vulnerability lab inspired by PortSwigger Academy — including tampering, signature bypass, and exploitation walkthroughs in French.",
        tech: ["Node.js", "Express", "JWT", "Burp Suite", "Python"],
        image:
          "https://images.unsplash.com/photo-1603791452906-e3cde84de33f?w=800",
        featured: true,
      },
      {
        id: 3,
        title: "Social Engineering Masterclass",
        description:
          "A full course teaching psychological manipulation, phishing, pretexting, and human-layer defense for organizations.",
        tech: ["PowerPoint", "Demonstrations", "Labs", "Simulation Tools"],
        image:
          "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=800",
        featured: true,
      },
      {
        id: 4,
        title: "PHP-VulnApp",
        description:
          "A purposely vulnerable Laravel web app with realistic medium-hard exploitation points for training pentesters and students.",
        tech: ["Laravel", "Tailwind", "SQLi", "XSS", "Auth Bypass"],
        image: "/assets/vulnmarket/main.jpg",
        images: [
          "/assets/vulnmarket/main.jpg",
          "/assets/vulnmarket/photo_2_2025-12-04_11-54-27.jpg",
          "/assets/vulnmarket/photo_3_2025-12-04_11-54-27.jpg",
        ],
        featured: false,
      },
      {
        id: 5,
        title: "Network Segmentation ACL Lab",
        description:
          "Simulated two interconnected LANs using DHCP with ACLs blocking specific traffic for real-world defensive configuration training.",
        tech: ["Cisco Packet Tracer", "ACL", "DHCP", "LAN"],
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
        featured: false,
      },
      {
        id: 6,
        title: "Active Directory Attack Lab",
        description:
          "Set up Windows Server and client machines on VirtualBox to test privilege escalation, lateral movement, and defense hardening.",
        tech: ["VirtualBox", "AD", "PowerShell", "Kerberos"],
        image:
          "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800",
        featured: false,
      },
    ],
  },

  contact: {
    title: "Let's Connect",
    description:
      "Interested in collaborating, learning, or building something powerful together? Let’s connect and make it happen.",
    email: "juanjerry120@gmail.com",
    social: {
      github: "https://github.com/Tetang-Jerry",
      linkedin: "https://www.linkedin.com/in/jerry-joanito-365318324?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      twitter: "https://x.com/jerrytetan67?s=21",
      website: "https://your-portfolio-link.com",
    },
  },
};
