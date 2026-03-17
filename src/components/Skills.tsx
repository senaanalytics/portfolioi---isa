import React from 'react';
import { motion } from 'motion/react';

const skillCategories = [
    {
        title: 'Análise & BI',
        icon: 'monitoring',
        color: 'from-violet-500 to-indigo-500',
        skills: [
            { name: 'Power BI (DAX)', level: 'Intermediário' },
            { name: 'SQL', level: 'Básico' },
            { name: 'Excel Avançado', level: 'Intermediário' },
            { name: 'Google Sheets', level: 'Básico' },
        ]
    },
    {
        title: 'Engenharia de Dados',
        icon: 'rebase_edit',
        color: 'from-indigo-500 to-sky-500',
        skills: [
            { name: 'Python', level: 'Intermediário' },
            { name: 'ETL / Pipelines', level: 'Intermediário' },
            { name: 'Machine Learning', level: 'Básico' },
            { name: 'Big Data', level: 'Básico' },
        ]
    },
    {
        title: 'Ferramentas & Dev',
        icon: 'code',
        color: 'from-sky-500 to-emerald-500',
        skills: [
            { name: 'Git / GitHub', level: 'Avançado' },
            { name: 'Automação', level: 'Intermediário' },
            { name: 'ERP / SAP (básico)', level: 'Básico' },
            { name: 'Linux CLI', level: 'Básico' },
        ]
    },
];

const levelColor: Record<string, string> = {
    'Avançado': 'bg-primary/10 text-primary border-primary/20',
    'Intermediário': 'bg-sky-500/10 text-sky-600 border-sky-300/30',
    'Básico': 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700',
};

export const Skills = () => {
    return (
        <section className="section-padding" id="habilidades">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Toolkit Técnico
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tight"
                    >
                        Habilidades & <span className="text-gradient">Tecnologias</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.15 }}
                            className="rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
                        >
                            {/* Category Header */}
                            <div className={`p-6 bg-gradient-to-r ${cat.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,white,transparent)]"></div>
                                <span className="material-symbols-outlined text-white text-3xl mb-3 block">{cat.icon}</span>
                                <h3 className="text-white font-black text-xl">{cat.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="p-6 space-y-3">
                                {cat.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIdx * 0.1 + i * 0.07 }}
                                        className="flex items-center justify-between"
                                    >
                                        <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{skill.name}</span>
                                        <span className={`text-[11px] font-black uppercase tracking-tight px-2.5 py-1 rounded-full border ${levelColor[skill.level]}`}>
                                            {skill.level}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
