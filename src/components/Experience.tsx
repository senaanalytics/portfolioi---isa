import React from 'react';
import { motion } from 'motion/react';

const experiences = [
    {
        period: '2024 — Presente',
        role: 'Analista de TI',
        company: 'Grupo GSH',
        description: 'Desenvolvimento de dashboards em Power BI para análise de performance operacional e suporte direto à tomada de decisão estratégica dos stakeholders.',
        highlights: [
            'Construção de KPIs estratégicos para alta gestão',
            'Automação de relatórios, reduzindo horas de trabalho manual',
            'Integração de múltiplas fontes de dados via ETL',
        ],
        current: true
    },
    {
        period: '2022 — 2024',
        role: 'Estágio em Dados',
        company: 'Grupo GSH',
        description: 'Atuação com extração de dados brutos de ERP, limpeza e transformação (ETL) para geração de relatórios de BI, otimizando fluxos de informação internos.',
        highlights: [
            'Extração e tratamento de dados de sistemas ERP',
            'Criação de relatórios automatizados em Excel/Sheets',
            'Colaboração com times de negócio na análise de dados',
        ],
        current: false
    }
];

export const Experience = () => {
    return (
        <section className="section-padding bg-slate-50 dark:bg-slate-900/20" id="experiência">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Trajetória
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tight"
                    >
                        Experiência <span className="text-gradient">Profissional</span>
                    </motion.h2>
                </div>

                <div className="relative space-y-10 before:absolute before:inset-y-0 before:left-8 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.role + i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative pl-24 group"
                        >
                            <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform z-10 ${exp.current ? 'bg-primary ring-4 ring-primary/20' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
                            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all">
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                    <span className={`text-xs font-black uppercase tracking-widest ${exp.current ? 'text-primary' : 'text-slate-500'}`}>
                                        {exp.period}
                                    </span>
                                    {exp.current && (
                                        <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            Cargo Atual
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                                <div className="text-base font-bold text-primary mb-4">{exp.company}</div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{exp.description}</p>
                                <ul className="space-y-2">
                                    {exp.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">check_circle</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
