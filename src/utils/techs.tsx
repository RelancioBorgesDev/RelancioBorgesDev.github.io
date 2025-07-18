import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
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
  FaLaravel,
} from "react-icons/fa";

export const frontendTechs = [
  { icon: <FaHtml5 className="h-4 w-4 text-orange-600" />, label: "HTML5" },
  { icon: <FaCss3Alt className="h-4 w-4 text-blue-600" />, label: "CSS3" },
  { icon: <FaReact className="h-4 w-4 text-cyan-400" />, label: "React" },
  { icon: <FaJs className="h-4 w-4 text-yellow-500" />, label: "JavaScript" },
  { icon: <FaVuejs className="h-4 w-4 text-green-500" />, label: "Vue.js" },
  { icon: <FaSass className="h-4 w-4 text-pink-500" />, label: "Sass" },
  {
    icon: <FaBootstrap className="h-4 w-4 text-purple-600" />,
    label: "Bootstrap",
  },
];

export const backendTechs = [
  { icon: <FaNodeJs className="h-4 w-4 text-green-600" />, label: "Node.js" },
  { icon: <FaPython className="h-4 w-4 text-blue-500" />, label: "Python" },
  {
    icon: <FaDatabase className="h-4 w-4 text-gray-700" />,
    label: "PostgreSQL",
  },
  { icon: <FaLaravel className="h-4 w-4 text-red-600" />, label: "Laravel" },
];

export const devOpsTechs = [
  { icon: <FaDocker className="h-4 w-4 text-blue-500" />, label: "Docker" },
  { icon: <FaAws className="h-4 w-4 text-orange-500" />, label: "AWS" },
  { icon: <FaLinux className="h-4 w-4 text-black" />, label: "Linux" },
];

export const toolsTechs = [
  { icon: <FaGithub className="h-4 w-4 text-gray-900" />, label: "GitHub" },
  { icon: <FaGitAlt className="h-4 w-4 text-orange-600" />, label: "Git" },
  { icon: <FaNpm className="h-4 w-4 text-red-600" />, label: "NPM" },
  { icon: <FaFigma className="h-4 w-4 text-pink-500" />, label: "Figma" },
];
