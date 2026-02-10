import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Funcionamiento', href: '#como-funciona' },
    { name: 'Impacto', href: '#impacto' },
    { name: 'FAQ', href: '#faq' },
];

const stats = [
    { label: 'Entregas Exitosas', value: '+15,000', icon: '📦' },
    { label: 'Aliados Locales', value: '+120', icon: '🏪' },
    { label: 'Repartidores Activos', value: '+80', icon: '🛵' },
    { label: 'Cobertura Regional', value: '100%', icon: '📍' },
];

const steps = [
    {
        title: 'Elige tu producto',
        desc: 'Explora cientos de opciones de tus aliados favoritos en Urabá.',
        icon: '📱'
    },
    {
        title: 'Preparamos el pedido',
        desc: 'Nuestros aliados alistan tu orden con el mayor cuidado y rapidez.',
        icon: '👨‍🍳'
    },
    {
        title: 'Entrega en camino',
        desc: 'Un repartidor experto lleva tu pedido hasta la puerta de tu casa.',
        icon: '⚡'
    },
];

const faqs = [
    {
        q: '¿Cómo puedo ser aliado de UrabáGo?',
        a: 'Es muy sencillo. Solo debes contactarnos a través de nuestra sección de soporte y un asesor te guiará en el proceso de registro para empezar a vender.'
    },
    {
        q: '¿Cuál es el tiempo promedio de entrega?',
        a: 'Dependiendo de la ubicación y el tipo de pedido, nuestro tiempo promedio oscila entre 20 y 45 minutos.'
    },
    {
        q: '¿Tienen cobertura en toda la región?',
        a: 'Actualmente cubrimos los principales cascos urbanos de la zona de Urabá y estamos expandiéndonos constantemente.'
    },
];

const TestimonialCard = ({ name, role, text, img }) => (
    <div className="bg-slate-800/40 p-8 rounded-[2.5rem] border border-slate-700/50 backdrop-blur-sm shadow-xl">
        <div className="flex items-center gap-4 mb-6">
            <img src={img} alt={name} className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover" />
            <div>
                <h4 className="font-bold text-lg">{name}</h4>
                <p className="text-slate-500 text-sm">{role}</p>
            </div>
        </div>
        <p className="text-slate-300 italic">"{text}"</p>
        <div className="flex gap-1 mt-4 text-yellow-500">
            {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
        </div>
    </div>
);

const LandingPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-yellow-400 selection:text-slate-900">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-5 fixed w-full z-[100] bg-slate-900/40 backdrop-blur-xl border-b border-white/5">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-yellow-400 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-slate-900 font-black text-2xl">U</span>
                    </div>
                    <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent">
                        UrabáGo
                    </span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-400">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="hover:text-yellow-400 transition-all duration-300 relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/login" className="hidden sm:block text-sm font-bold text-slate-300 hover:text-white transition-colors mr-4">
                        Ingreso Aliados
                    </Link>
                    <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-2xl font-black shadow-lg shadow-yellow-400/20 hover:scale-105 active:scale-95 transition-all">
                        Descargar App
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px]"></div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <span className="flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-400"></span>
                            </span>
                            <span className="text-yellow-400 text-xs font-black uppercase tracking-[0.2em]">Logística Premium en Urabá</span>
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] tracking-tight">
                            Entregas que <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">transforman</span> <br />
                            tu región.
                        </h1>

                        <p className="text-slate-400 text-xl max-w-lg leading-relaxed font-medium">
                            Conectamos el corazón comercial de Urabá con tecnología de punta. Eficiencia, rapidez y compromiso en cada pedido.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <button className="flex-1 sm:flex-none bg-yellow-400 text-slate-900 px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl shadow-yellow-400/30 hover:bg-yellow-300 transition-all hover:scale-[1.02] active:scale-95">
                                Empezar Pedido
                            </button>
                            <button className="flex-1 sm:flex-none bg-slate-800/50 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-[2rem] font-black text-xl hover:bg-slate-700 transition-all active:scale-95">
                                Ver Aliados
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-500 text-sm font-semibold">
                                Más de <span className="text-white">5,000+</span> usuarios confían en nosotros
                            </p>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl shadow-yellow-400/5 bg-slate-800">
                            <img
                                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad21?q=80&w=2030&auto=format&fit=crop"
                                alt="Logística UrabáGo"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8 space-y-4">
                                <div className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-yellow-400 font-bold text-sm uppercase">Pedido en Curso</span>
                                        <span className="text-slate-400 text-xs font-medium">Hace 2 min</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center rounded-2xl text-slate-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-white font-black">Entrega Express</div>
                                            <div className="text-slate-300 text-sm italic whitespace-nowrap overflow-hidden text-ellipsis">Turbo - Apartadó, Antioquia</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="impacto" className="py-20 bg-slate-800/20 border-y border-white/5 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center space-y-3 group">
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <div className="text-4xl lg:text-5xl font-black text-yellow-400 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                            <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Grid */}
            <section id="servicios" className="py-32 px-6">
                <div className="max-w-7xl mx-auto mb-20">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
                        <div className="space-y-6">
                            <h2 className="text-5xl lg:text-6xl font-black leading-tight">Servicios que <br /> <span className="text-slate-500 italic">impulsan</span> Urabá.</h2>
                            <div className="w-32 h-2 bg-yellow-400 rounded-full"></div>
                        </div>
                        <p className="text-slate-400 text-xl max-w-xl font-medium leading-relaxed">
                            No solo entregamos paquetes, construimos el puente digital entre los mejores comercios de la región y sus clientes.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Envíos Locales",
                            desc: "Cobertura completa en Apartadó, Carepa, Chigorodó y Turbo. La velocidad es nuestra prioridad.",
                            color: "from-blue-500/20 to-blue-600/5",
                            icon: "🚀"
                        },
                        {
                            title: "Logística B2B",
                            desc: "Soluciones a medida para empresas que necesitan mover grandes volúmenes con control total.",
                            color: "from-yellow-400/20 to-yellow-500/5",
                            icon: "🏗️"
                        },
                        {
                            title: "Pago Contra Entrega",
                            desc: "Ofrece confianza total a tus clientes permitiéndoles pagar cuando reciben su pedido.",
                            color: "from-emerald-500/20 to-emerald-600/5",
                            icon: "💳"
                        }
                    ].map((item, i) => (
                        <div key={i} className={`group p-10 rounded-[3rem] bg-gradient-to-br ${item.color} border border-white/5 hover:border-yellow-400/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden shadow-2xl`}>
                            <div className="absolute top-0 right-0 p-8 text-6xl opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">{item.icon}</div>
                            <h3 className="text-3xl font-black mb-6 mt-12">{item.title}</h3>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">{item.desc}</p>
                            <div className="flex items-center gap-3 text-yellow-400 font-bold group-hover:translate-x-3 transition-transform">
                                Saber más
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How it Works Section */}
            <section id="como-funciona" className="py-32 px-6 bg-slate-950/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/5 -skew-x-12 -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-6">
                        <h2 className="text-5xl lg:text-6xl font-black">Así de fácil es UrabáGo</h2>
                        <p className="text-slate-500 text-xl font-medium uppercase tracking-[0.3em]">Solo tres pasos</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 relative">
                        <div className="hidden lg:block absolute top-[40%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-800 to-transparent -z-10"></div>

                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-8 group">
                                <div className="w-28 h-28 rounded-[2.5rem] bg-slate-900 border-4 border-slate-800 flex items-center justify-center text-5xl group-hover:bg-yellow-400 group-hover:text-slate-900 group-hover:border-yellow-300 transition-all duration-500 shadow-2xl relative">
                                    {step.icon}
                                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-800 text-white text-lg font-black flex items-center justify-center border-4 border-slate-950">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black">{step.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed max-w-xs">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 space-y-8">
                        <h2 className="text-5xl lg:text-7xl font-black leading-tight">Historias de <br /> <span className="text-yellow-400 underline decoration-slate-700 underline-offset-8"> éxito </span> local.</h2>
                        <p className="text-slate-400 text-xl font-medium leading-relaxed italic">
                            "Desde que integramos UrabáGo, nuestras ventas a domicilio crecieron un 40%. La gestión es impecable."
                        </p>
                        <div className="flex gap-4">
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-white/10"></div>
                            <div className="w-3 h-3 rounded-full bg-white/10"></div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TestimonialCard
                            name="Carlos Mendoza"
                            role="Dueño de 'El Sazón Costeño'"
                            text="UrabáGo nos permitió llegar a clientes que antes no podíamos atender por falta de transporte propio."
                            img="https://i.pravatar.cc/150?img=11"
                        />
                        <div className="md:mt-12">
                            <TestimonialCard
                                name="Elena Ruiz"
                                role="Gerente de 'Moda Urabá'"
                                text="La rapidez en las entregas de ropa y accesorios ha sido la clave para fidelizar a nuestros compradores online."
                                img="https://i.pravatar.cc/150?img=32"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-32 px-6 bg-slate-950/30">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-5xl font-black">Preguntas Frecuentes</h2>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Todo lo que necesitas saber</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'bg-white/5 border-yellow-400/30' : 'bg-slate-900/50 hover:bg-white/5'}`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-8 text-left transition-colors"
                                >
                                    <span className="text-xl font-bold pr-8">{faq.q}</span>
                                    <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-yellow-400' : 'text-slate-500'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="p-8 pt-0 text-slate-400 text-lg leading-relaxed border-t border-white/5">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-400 -z-10 translate-y-full animate-[slide_1s_ease_forwards]"></div>
                <div className="max-w-7xl mx-auto text-center space-y-12">
                    <h2 className="text-6xl lg:text-8xl font-black text-white leading-tight">Mueve tu mundo <br /> con <span className="text-yellow-400">UrabáGo.</span></h2>
                    <p className="text-slate-400 text-2xl max-w-2xl mx-auto font-medium">
                        Únete a la mayor red de logística y comercio de la región de Urabá.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 pt-8">
                        <button className="bg-white text-slate-900 px-12 py-6 rounded-3xl font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                            Bajar para iOS
                        </button>
                        <button className="bg-white text-slate-900 px-12 py-6 rounded-3xl font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                            Bajar para Android
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/5 bg-slate-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <div className="bg-yellow-400 p-2 rounded-xl">
                                <span className="text-slate-900 font-black text-2xl">U</span>
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white">
                                UrabáGo
                            </span>
                        </div>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Tecnología logística de talla mundial, orgullosamente nacida en el corazón de Urabá.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3].map(i => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 hover:-translate-y-1 transition-all">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xl font-bold text-white uppercase tracking-widest text-sm">Empresa</h4>
                        <ul className="space-y-4 text-slate-500 font-semibold">
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Sobre nosotros</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Trabaja con nosotros</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Blog Regional</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Aliados Estratégicos</a></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xl font-bold text-white uppercase tracking-widest text-sm">Soporte</h4>
                        <ul className="space-y-4 text-slate-500 font-semibold">
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Centro de Ayuda</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contacto Directo</a></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xl font-bold text-white uppercase tracking-widest text-sm">Boletín</h4>
                        <p className="text-slate-500 font-medium">Suscríbete para recibir novedades y promociones exclusivas en Urabá.</p>
                        <div className="flex flex-col gap-4">
                            <input type="email" placeholder="tu@email.com" className="bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 transition-colors" />
                            <button className="bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black hover:bg-yellow-300 transition-colors">Unirse</button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 font-bold text-sm">
                    <p>© {new Date().getFullYear()} UrabáGo S.A.S. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <a href="#">Cookies</a>
                        <a href="#">Seguridad</a>
                        <a href="#">Transparencia</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
