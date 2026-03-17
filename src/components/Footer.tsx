import React from 'react';

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-xl">insights</span>
                    </div>
                    <span className="font-black text-xl tracking-tight">Isaque Sena</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <p className="text-sm font-semibold text-slate-500">
                        © {year} Isaque Sena · Rio de Janeiro, Brasil
                    </p>
                    <p className="text-xs text-slate-400">Analista de Dados</p>
                </div>

                <div className="flex gap-3">
                    <a
                        href="https://www.linkedin.com/in/isaque-sena-794b89233/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all"
                    >
                        <span className="material-symbols-outlined text-xl">link</span>
                    </a>
                    <a
                        href="https://medium.com/@isaquesenna"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Medium"
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all"
                    >
                        <span className="material-symbols-outlined text-xl">article</span>
                    </a>
                    <a
                        href="mailto:isaquesenadasilva1@gmail.com"
                        title="Email"
                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all"
                    >
                        <span className="material-symbols-outlined text-xl">mail</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};
