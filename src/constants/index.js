import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import AyushResume from "../assets/Ayush_resume.pdf";
import
  Java from "../assets/java-icon.svg";
import
  Python from "../assets/python-icon.svg";
import
  MySQL from "../assets/mysql-icon.svg";
import
  VeeyoTech from "../assets/veeyotech.png";
import
  UnifiedM from "../assets/unifiedmentor.png";
import
  Intel from "../assets/intel.jpg";
import
  RefiNet  from "../assets/RefiNet.png";
import
  TastyBites from "../assets/tastybites.png";
import
  ShadowCAM from "../assets/shadowcam.jpg";



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
  {
    id: "resume",
    title: "Resume",
    external: true,
    url: AyushResume, 
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "JAVA Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "MySQL",
    icon: MySQL,
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
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Data Scientist Trainee",
    company_name: "Veeyo Tech.",
    icon: VeeyoTech,
    iconBg: "#383E56",
    date: "July 2024 - Aug 2024",
    points: [
      "Learning and applying core concepts of Python, Machine Learning, and Deep Learning to real-world datasets through guided industry training.",
      "Building an end-to-end house price prediction model ('Value Vision'), involving data preprocessing, model development, evaluation,and interpretation.",
      "Gaining hands-on experience with Power BI to visualize trends and performance metrics, enabling clear and impactful data storytelling.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Unified Mentor",
    icon: UnifiedM,
    iconBg: "#13103dff",
    date: "May 2025 - Aug 2025",
    points: [
      "Developing and deploying multiple end-to-end Machine Learning models including classification, regression, and ensemble methods on real-world datasets.",
      "Working on impactful projects such as Animal Classification, Liver Cirrhosis Detection, and Forest Cover Prediction, demonstrating practical ML pipeline implementation.",
      "Applying data preprocessing, feature selection, model evaluation, and visualization techniques to optimize performance metrics like accuracy and F1-score.",
      "Collaborating remotely with mentors and team members, receiving structured training in ML and DL, and adapting quickly to feedback in a professional project-based environment.",
    ],
  },
  {
    title: "Deep Leaning Trainee",
    company_name: "Intel",
    icon: Intel,
    iconBg: "#197cd2ff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designed and implemented ReFineNet, a knowledge distillation-based image enhancement system using deep CNNs, trained on the Vimeo-90K dataset.",
      "Built a Multi-Scale Attentive Fusion Network (MSAFN) as the teacher and a lightweight LightMSAFN student model to achieve real-time inference with high SSIM/PSNR.",
      "Applied advanced training strategies including distillation loss, data augmentation, and multi-metric evaluation (SSIM, PSNR, MOS) for optimal performance.",
      "Completed under Intel Unnati Industrial Training Program, collaborating in a 3-member team with structured research, experimentation, and results-driven development.",
    ],
  },
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
    name: "RefiNet",
    description:
      "This project aims to compress a powerful image enhancement model (MSAFN) into a lightweight student model (LightMSAFN) using knowledge distillation.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: RefiNet,
    source_code_link: "https://github.com/AyushS1304/RefiNet.git",
  },
  {
    name: "ShadowCAM",
    description:
      "A real-time video streaming and background manipulation app powered by FastAPI, OpenCV, YOLOv8, and pyvirtualcam.This tool detects people in webcam feeds and allows you to apply: Custom backgrounds, Blur effects, Black backgrounds",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    image: ShadowCAM,
    source_code_link: "https://github.com/AyushS1304/ShadowCAM.git",
  },
  {
    name: "Tasty Bites",
    description:
      "TastyBites Tracker is a sleek and responsive web application designed to make food ordering effortless and enjoyable. Browse through a variety of cuisines, categories, and beverages, place your order, and track it in real-time — all in one place.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: TastyBites,
    source_code_link: "https://github.com/AyushS1304/tasty-bites-tracker.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
