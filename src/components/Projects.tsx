import React from 'react';
import { motion } from 'motion/react';
import climateProjectImg from '../assets/climate-project.png';
import etlHealthImg from '../assets/etl-health-project.png';

const projetosData = [
    {
        id: 1,
        titulo: "Análise de Vendas de Loja (EDA)",
        descricao: "Análise exploratória de dados de vendas de uma loja, identificando tendências, sazonalidade e insights para apoiar decisões comerciais estratégicas.",
        tags: ["Python", "EDA", "Pandas"],
        imagem: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        link: "https://colab.research.google.com/drive/1HENapCwQr_AwKKyi3Aqec_qQjF4zWYma?authuser=1#scrollTo=8kpCaBnFdNVf"
    },
    {
        id: 2,
        titulo: "Análise de Clima",
        descricao: "Estudo exploratório de dados climáticos, analisando padrões meteorológicos, variações de temperatura e tendências sazonais com visualizações interativas.",
        tags: ["Python", "Análise", "Visualização"],
        imagem: climateProjectImg,
        link: "https://colab.research.google.com/drive/1cuN7fyXgQXiWAZSClbqvqrbXEcQeoIWg"
    },
    {
        id: 3,
        titulo: "ETL de Saúde",
        descricao: "Pipeline de ETL para processamento e transformação de dados de saúde, estruturando informações brutas de fontes médicas em bases limpas e prontas para análise.",
        tags: ["ETL", "Python", "Pipeline"],
        imagem: etlHealthImg,
        link: "https://drive.google.com/file/d/1I-cc0FjPFR0lA43V-0kuLqBd7qPFfrEg/view?usp=sharing"
    },
];

export const Projects = () => {
    return (
        <section className="section-padding" id="projetos">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center space-y-4 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Portfolio
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tight"
                    >
                        Projetos em <span className="text-gradient">Destaque</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
                    >
                        Projetos reais desenvolvidos com foco em análise de dados e engenharia de dados.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projetosData.map((projeto, i) => (
                        <motion.a
                            key={projeto.id}
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            whileHover={{ y: -12 }}
                            className="flex flex-col rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 group hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={projeto.imagem}
                                    alt={projeto.titulo}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Ver Projeto <span className="material-symbols-outlined">arrow_outward</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 space-y-5 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2">
                                    {projeto.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-tighter">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-black group-hover:text-primary transition-colors duration-300 mb-3">
                                        {projeto.titulo}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {projeto.descricao}
                                    </p>
                                </div>
                                <div className="pt-2 flex items-center gap-2 text-primary font-bold text-sm">
                                    <span>Acessar projeto</span>
                                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
