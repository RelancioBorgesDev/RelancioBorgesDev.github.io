import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { ModeToggle } from "../mode-toggle";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <header className="px-6 py-4 max-w-[1200px] mx-auto flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="font-bold text-lg text-neutral-900 dark:text-neutral-100"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src="/favicon.svg"
            alt="asa"
            className="w-8 h-8"
          />
        </Link>
      </div>

      {/* Botão do menu com animação */}
      <motion.button
        onClick={handleToggle}
        className="md:hidden z-50 cursor-pointer text-neutral-950 dark:text-neutral-200"
        whileTap={{ rotate: 90 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </motion.button>

      {/* Navegação para desktop */}
      <nav className="hidden md:flex md:items-center md:gap-4">
        <Link href="/#home">
          <Button variant="ghost" className="text-xl font-light text-neutral-950 dark:text-neutral-200">
            Início
          </Button>
        </Link>
        <Link href="/#about">
          <Button variant="ghost" className="text-xl font-light text-neutral-950 dark:text-neutral-200">
            Sobre
          </Button>
        </Link>
        <Link href="/#projects">
          <Button variant="ghost" className="text-xl font-light text-neutral-950 dark:text-neutral-200">
            Projetos
          </Button>
        </Link>
        <ModeToggle />
      </nav>

      {/* Navegação mobile com animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-neutral-300 dark:bg-[#1A1A1D] flex flex-col items-center justify-center gap-6 p-6 z-40"
          >
            <Link href="/#home" onClick={handleClose}>
              <Button variant="ghost" className="text-2xl font-light text-neutral-950 dark:text-neutral-200 cursor-pointer">
                Início
              </Button>
            </Link>
            <Link href="/#about" onClick={handleClose}>
              <Button variant="ghost" className="text-2xl font-light text-neutral-950 dark:text-neutral-200 cursor-pointer">
                Sobre
              </Button>
            </Link>
            <Link href="/#projects" onClick={handleClose}>
              <Button variant="ghost" className="text-2xl font-light text-neutral-950 dark:text-neutral-200 cursor-pointer">
                Projetos
              </Button>
            </Link>
            <ModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
