import React from 'react';
import { motion } from 'motion/react';

export const Contact = () => {
    return (
        <section className="section-padding bg-slate-900 text-white overflow-hidden relative" id="contato">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-indigo-500 to-accent"></div>

            {/* Decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-0"></div>

            <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Vamos <span className="text-gradient">conectar?</span></h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        Estou sempre aberto a novos desafios, parcerias estratégicas e discussões sobre o futuro da análise de dados.
                    </p>
                </motion.div>

                <div className="flex flex-col items-center gap-8 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                        <motion.a
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-[2rem] font-black hover:bg-slate-100 transition-all shadow-xl shadow-white/5"
                            href="https://www.linkedin.com/in/isaque-sena-794b89233/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="material-symbols-outlined">link</span>
                            LinkedIn
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-slate-800 text-white border border-slate-700 rounded-[2rem] font-black hover:bg-slate-700 transition-all"
                            href="https://medium.com/@isaquesenna"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="material-symbols-outlined">article</span>
                            Medium
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-[2rem] font-black hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
                            href="mailto:isaquesenadasilva1@gmail.com"
                        >
                            <span className="material-symbols-outlined">alternate_email</span>
                            Email
                        </motion.a>
                    </div>

                    {/* Contact details */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 text-slate-400 text-sm font-medium">
                        <a href="mailto:isaquesenadasilva1@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-base text-primary">mail</span>
                            isaquesenadasilva1@gmail.com
                        </a>
                        <span className="hidden sm:block w-px h-4 bg-slate-700"></span>
                        <a href="tel:+5521970209311" className="flex items-center gap-2 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-base text-primary">call</span>
                            (21) 97020-9311
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
