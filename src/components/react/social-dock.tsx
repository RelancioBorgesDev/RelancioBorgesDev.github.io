import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/seu-usuario",
    icon: FaGithub,
    white_mode: "black",
    dark_mode: "white",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/seu-usuario",
    icon: FaLinkedin,
    white_mode: "blue-500",
    dark_mode: "blue-400",
  },
];

export function SocialDock() {
  return (
    <div>
      {/* Desktop: barra lateral fixa */}
      <div className="hidden md:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-50">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
            className={`p-2 dark:text-${social.dark_mode}  text-${social.white_mode} rounded-full `}
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>

      {/* Mobile: dock fixa embaixo */}
      <div className="md:hidden fixed bottom-0 left-0 w-full flex justify-around py-3 z-50 shadow-t-lg">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
            className="p-3 bg-gray-800 text-white rounded-full shadow-lg"
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
