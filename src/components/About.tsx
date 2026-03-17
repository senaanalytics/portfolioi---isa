import React from 'react';
import { motion } from 'motion/react';
import aboutIllustration from '../assets/about-illustration.png';

export const About = () => {
    return (
        <section className="section-padding overflow-hidden" id="sobre">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 text-primary font-bold tracking-[0.2em] uppercase text-xs">
                                <span className="h-px w-10 bg-primary"></span>
                                Sobre Mim
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                                Paixão por extrair <span className="text-gradient">conhecimento</span> dos dados.
                            </h2>
                        </div>

                        <div className="space-y-6 max-w-2xl">
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Me chamo Isaque, tenho 22 anos e sou estudante de Ciência da Computação.
                            </p>
                            <p className="text-lg text-slate-500 dark:text-slate-500 leading-relaxed">
                                Minha curiosidade em resolver problemas utilizando programação evoluiu para uma paixão por transformar dados brutos em decisões inteligentes. Foco em criar soluções que tragam clareza e valor estratégico, buscando sempre o próximo nível na área de dados.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
                        <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-4 shadow-2xl shadow-primary/10">
                            <img
                                src={aboutIllustration}
                                alt="Data Analysis Illustration"
                                className="w-full h-auto rounded-[2rem] hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
