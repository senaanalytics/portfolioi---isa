import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Sobre', 'Habilidades', 'Experiência', 'Certificados', 'Projetos'];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-[2rem] px-5 py-3.5 flex items-center justify-between transition-all duration-500 ease-out ${scrolled
          ? 'glass-morphism shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]'
          : 'bg-transparent border border-transparent shadow-none'
          }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[20px]">insights</span>
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Isaque Sena</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 px-2 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50">
          {menuItems.map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 hover:bg-white dark:hover:bg-slate-700 dark:hover:text-white transition-all px-4 py-2 rounded-full cursor-pointer"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-bold shadow-xl shadow-slate-900/10 dark:shadow-white/10 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
          href="#contato"
        >
          <span className="material-symbols-outlined text-[18px]">mail</span>
          Contato
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-1.5 focus:outline-none w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full pointer-events-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-slate-900 dark:bg-white rounded-full origin-center transition-all"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-slate-900 dark:bg-white rounded-full transition-all"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-slate-900 dark:bg-white rounded-full origin-center transition-all"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col"
          >
            <div className="flex flex-col p-4 gap-2">
              {menuItems.map((item) => (
                <a
                  key={item}
                  className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-all px-6 py-3.5 rounded-2xl"
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="w-full h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
              <a
                className="flex items-center justify-center gap-2 py-4 mt-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black shadow-lg mx-2 hover:bg-slate-800 transition-colors"
                href="#contato"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
                Entrar em Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
