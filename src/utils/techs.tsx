import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGithub,
  FaGitAlt,
  FaNpm,
  FaLinux,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiFastify,
  SiSqlite,
  SiKubernetes,
  SiJest,
  SiTestinglibrary,
  SiVitest,
  SiRabbitmq,
  SiApachekafka,
  SiTerraform,
  SiCloudinary,
  SiFirebase,
  SiDrizzle,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
export const frontendTechs = [
  { icon: <FaHtml5 className="h-4 w-4 text-orange-600" />, label: "HTML5" },
  { icon: <FaCss3Alt className="h-4 w-4 text-blue-600" />, label: "CSS3" },
  { icon: <FaJs className="h-4 w-4 text-yellow-500" />, label: "JavaScript" },
  {
    icon: <SiTypescript className="h-4 w-4 text-blue-500" />,
    label: "Typescript",
  },
  { icon: <FaReact className="h-4 w-4 text-cyan-400" />, label: "React" },
  {
    icon: <RiNextjsLine className="h-4 w-4 text-black" />,
    label: "Next.js",
  },
  {
    icon: <SiTailwindcss className="h-4 w-4 text-sky-400" />,
    label: "TailwindCSS",
  },
  {
    icon: <FaBootstrap className="h-4 w-4 text-purple-600" />,
    label: "Bootstrap",
  },
  { icon: <FaSass className="h-4 w-4 text-pink-500" />, label: "Sass" },
  { icon: <SiVitest className="h-4 w-4 text-green-500" />, label: "Vitest" },
  { icon: <SiJest className="h-4 w-4 text-red-500" />, label: "Jest" },
];

export const backendTechs = [
  { icon: <FaNodeJs className="h-4 w-4 text-green-600" />, label: "Node.js" },
  { icon: <SiNestjs className="h-4 w-4 text-red-600" />, label: "NestJS" },
  { icon: <SiFastify className="h-4 w-4 text-purple-600" />, label: "Fastify" },
  {
    icon: <SiDrizzle className="h-4 w-4 text-purple-600" />,
    label: "DrizzleORM",
  },

  { icon: <FaPython className="h-4 w-4 text-blue-500" />, label: "Python" },
  {
    icon: <FaDatabase className="h-4 w-4 text-slate-700" />,
    label: "PostgreSQL",
  },
  {
    icon: <SiFirebase className="h-4 w-4 text-slate-700" />,
    label: "Firebase",
  },
  { icon: <SiSqlite className="h-4 w-4 text-blue-400" />, label: "SQLite" },
  {
    icon: <SiRabbitmq className="h-4 w-4 text-orange-500" />,
    label: "RabbitMQ",
  },
  { icon: <SiVitest className="h-4 w-4 text-green-500" />, label: "Vitest" },
  { icon: <SiJest className="h-4 w-4 text-red-500" />, label: "Jest" },
];

export const devOpsTechs = [
  { icon: <FaDocker className="h-4 w-4 text-blue-500" />, label: "Docker" },
  {
    icon: <SiKubernetes className="h-4 w-4 text-sky-500" />,
    label: "Kubernetes",
  },
  { icon: <FaAws className="h-4 w-4 text-orange-500" />, label: "AWS" },
  {
    icon: <SiTerraform className="h-4 w-4 text-purple-700" />,
    label: "Terraform",
  },
  { icon: <FaLinux className="h-4 w-4 text-black" />, label: "Linux" },
];

export const toolsTechs = [
  { icon: <FaGithub className="h-4 w-4 text-gray-900" />, label: "GitHub" },
  { icon: <FaGitAlt className="h-4 w-4 text-orange-600" />, label: "Git" },
  { icon: <FaNpm className="h-4 w-4 text-red-600" />, label: "NPM" },
  { icon: <FaFigma className="h-4 w-4 text-pink-500" />, label: "Figma" },
  {
    icon: <SiTestinglibrary className="h-4 w-4 text-red-400" />,
    label: "Testing Library",
  },
  {
    icon: <SiCloudinary className="h-4 w-4 text-blue-400" />,
    label: "Cloudinary",
  },
];
