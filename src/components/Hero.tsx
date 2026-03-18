import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-400/8 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Disponível para oportunidades
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight"
                >
                    Isaque Sena <br />
                    <span className="text-gradient">Analista de Dados</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    Transformando dados complexos em <span className="text-slate-900 dark:text-white font-semibold">decisões estratégicas</span> e insights de alto impacto.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500 mb-14"
                >
                    <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-lg">
                        <span className="material-symbols-outlined text-primary text-base">school</span>
                        Estudante de Ciência da Computação
                    </span>
                    <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-lg">
                        <span className="material-symbols-outlined text-primary text-base">terminal</span>
                        Técnico em Informática
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <motion.a
                        whileHover={{ scale: 1.05, translateY: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg shadow-2xl shadow-slate-900/10 hover:shadow-primary/20 transition-all inline-flex items-center gap-3"
                        href="#projetos"
                    >
                        Ver Projetos
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05, translateY: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:shadow-lg hover:border-primary/30 transition-all inline-flex items-center gap-3"
                        href="https://www.linkedin.com/in/isaque-sena-794b89233/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="material-symbols-outlined text-primary">link</span>
                        LinkedIn
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                    <span className="material-symbols-outlined text-xl">keyboard_arrow_down</span>
                </motion.div>
            </motion.div>
        </section>
    );
};
