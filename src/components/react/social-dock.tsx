import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/RelancioBorgesDev",
    icon: FaGithub,
    lightClass: "text-black",
    darkClass: "text-white",
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/relancioborges/",
    icon: FaLinkedin,
    lightClass: "text-blue-500",
    darkClass: "text-blue-400",
  },
];

export function SocialDock() {
  return (
    <div className="max-xl:hidden flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-50" role="navigation" aria-label="Redes sociais">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Acessar ${social.name}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
          className={`p-2 rounded-full transition-colors dark:text-white text-black hover:opacity-80`}
        >
          <social.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
}
