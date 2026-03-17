import React from 'react';
import { motion } from 'motion/react';

const certificates = [
    {
        title: 'Introdução a ciência de dados com Python',
        issuer: 'DIO.ME',
        hours: '13 horas',
        icon: 'analytics',
        color: 'from-violet-500 to-indigo-500'
    },
    {
        title: 'Análise de dados com Excel e Copilot',
        issuer: 'DIO.ME',
        hours: '16 horas',
        icon: 'table_chart',
        color: 'from-indigo-500 to-sky-500'
    },
    {
        title: 'Versionamento com Git e GitHub',
        issuer: 'UDEMY',
        hours: '4 horas',
        icon: 'account_tree',
        color: 'from-sky-500 to-emerald-500'
    },
    {
        title: 'Claude code in action',
        issuer: 'ANTHROPIC',
        hours: '10 horas',
        icon: 'smart_toy',
        color: 'from-emerald-500 to-teal-500'
    }
];

export const Certificates = () => {
    return (
        <section className="section-padding overflow-hidden" id="certificados">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Formação & Conquistas
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tight"
                    >
                        Certificados <span className="text-gradient">Profissionais</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col items-center text-center group"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                <span className="material-symbols-outlined text-3xl">
                                    {cert.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
                                {cert.title}
                            </h3>
                            <div className="flex flex-col items-center gap-1 mt-auto pt-4">
                                <span className="text-sm font-black text-primary uppercase tracking-widest">
                                    {cert.issuer}
                                </span>
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                                    {cert.hours}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
