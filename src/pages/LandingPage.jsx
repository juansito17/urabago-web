import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                <div className="flex items-center gap-2">
                    <div className="bg-yellow-400 p-1.5 rounded-lg">
                        <span className="text-slate-900 font-black text-xl">U</span>
                    </div>
                    <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        UrabáGo
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <a href="#servicios" className="hover:text-yellow-400 transition-colors">Servicios</a>
                    <a href="#nosotros" className="hover:text-yellow-400 transition-colors">Nosotros</a>
                    <a href="#contacto" className="hover:text-yellow-400 transition-colors">Contacto</a>
                    <Link to="/login" className="bg-yellow-400 text-slate-900 px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 active:scale-95">
                        Admin Login
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-yellow-400 text-xs font-bold uppercase tracking-widest animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            Logística Inteligente en Urabá
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-tight">
                            Mueve tu negocio <br />
                            <span className="text-yellow-400">al siguiente nivel.</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
                            La plataforma de logística y transporte más eficiente de la región. Conectamos negocios, aliados y repartidores para llevar Urabá a tu puerta.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-black text-lg hover:bg-yellow-300 transition-all shadow-xl shadow-yellow-400/20 active:scale-95">
                                Empezar Ahora
                            </button>
                            <button className="bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-700 transition-all active:scale-95">
                                Saber más
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-slate-800 aspect-square shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                                alt="Logística UrabáGo"
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m1.866-1.867a14.986 14.986 0 00-5.841 2.58m4.76-4.703a4.5 4.5 0 00-6.364 6.364l1.091-1.091" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">Entregas Ultra Rápidas</div>
                                        <div className="text-slate-300 text-sm">La mejor tasa de cumplimiento en Urabá.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Background pattern */}
                        <div className="absolute -top-10 -right-10 w-full h-full border-2 border-dashed border-slate-700 rounded-[2.5rem] -z-10 animate-[spin_60s_linear_infinite]"></div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-24 px-6 bg-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="text-4xl md:text-5xl font-black">Nuestros Servicios</h2>
                        <div className="w-20 h-2 bg-yellow-400 mx-auto rounded-full"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Soluciones integrales diseñadas para potenciar la economía local y facilitar la vida de nuestros clientes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Entregas Local",
                                desc: "Reparto de pedidos a domicilio en tiempo récord con cobertura total en el casco urbano.",
                                icon: "🚚"
                            },
                            {
                                title: "Gestión Administrativa",
                                desc: "Panel de control completo para aliados y comerciantes de la región Urabá.",
                                icon: "📁"
                            },
                            {
                                title: "Soluciones de Pago",
                                desc: "Múltiples métodos de pago integrados para tu seguridad y comodidad.",
                                icon: "🤝"
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-[2rem] hover:border-yellow-400/50 transition-all hover:-translate-y-2 group shadow-xl">
                                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
                                <h3 className="text-2xl font-black mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contacto" className="py-12 px-6 border-t border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <div className="bg-slate-800 p-1.5 rounded-lg border border-slate-700">
                                <span className="text-yellow-400 font-black text-xl">U</span>
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white">
                                UrabáGo
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                            Orgullosamente hecho en Urabá, para la gente de Urabá. Conectando el futuro comercial de nuestra región.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>
                    <div className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} UrabáGo. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
