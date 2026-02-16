import { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import QuoteModal from '@/Components/QuoteModal';

export default function Welcome({ auth }) {
    
    // State ya kufungua/kufunga Fomu ya Quote
    const [isQuoteOpen, setQuoteOpen] = useState(false);

    // 1. Orodha ya "Big 4" Products
    const featuredProducts = [
        { name: 'DukaOS', icon: 'shop', cat: 'Retail & Wholesale', desc: 'Dhibiti stoo, mauzo, na faida. Inafanya kazi Offline.', color: 'text-blue-500' },
        { name: 'MakaziOS', icon: 'house-chimney', cat: 'Real Estate', desc: 'Simamia wapangaji, kodi, na mikataba ya nyumba.', color: 'text-green-500' },
        { name: 'ShuleOS', icon: 'graduation-cap', cat: 'Education', desc: 'Mfumo wa matokeo, ada, na SMS kwa wazazi.', color: 'text-yellow-500' },
        { name: 'AfyaOS', icon: 'notes-medical', cat: 'Healthcare', desc: 'Rekodi za wagonjwa, maabara na stoo ya dawa.', color: 'text-red-500' },
    ];

    // 2. Orodha ya Huduma (Service Portfolio)
    const serviceCategories = [
        {
            title: "Computer Engineering",
            icon: "laptop-medical",
            desc: "Hardware repair & maintenance.",
            items: ["Chip-level Repair", "OS Installation", "Virus Removal", "Hardware Supply"]
        },
        {
            title: "Network & Electrical",
            icon: "network-wired",
            desc: "Power & Data infrastructure.",
            items: ["Structured Cabling", "3-Phase Power", "UPS/Inverter Backup", "Smart Wiring"]
        },
        {
            title: "Security Systems",
            icon: "shield-dog",
            desc: "Physical & Digital protection.",
            items: ["CCTV Installation", "Biometric Access", "Electric Fencing", "Fire Alarms"]
        },
        {
            title: "Software Dev",
            icon: "code",
            desc: "Custom systems & Apps.",
            items: ["Web & Mobile Apps", "ERP Systems", "API Integrations", "Cloud Hosting"]
        },
        {
            title: "Digital Marketing",
            icon: "bullhorn",
            desc: "Brand visibility & Growth.",
            items: ["SEO & Social Media", "Graphic Design", "Bulk SMS", "Content Creation"]
        }
    ];

    return (
        <>
            <Head title="B-Tech Creations | Bridging Power & Code" />

            {/* THE QUOTE MODAL (Pop-up Form) */}
            <QuoteModal isOpen={isQuoteOpen} onClose={() => setQuoteOpen(false)} />

            <div className="bg-white text-slate-800 font-sans antialiased scroll-smooth">
                
                {/* NAVIGATION */}
                <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all duration-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-20">
                            <div className="flex items-center">
                                <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                                    <i className="fa-solid fa-layer-group text-3xl text-blue-600"></i>
                                    <span className="font-bold text-2xl tracking-tighter text-slate-900">
                                        B-Tech<span className="text-cyan-500">Creations</span>
                                    </span>
                                </Link>
                            </div>
                            
                            <div className="hidden md:flex items-center space-x-6">
                                <Link href="/" className="text-blue-600 font-bold transition">Home</Link>
                                <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium transition">About Us</Link>
                                <Link href="/ecosystem" className="text-slate-600 hover:text-blue-600 font-medium transition">OS Ecosystem</Link>
                                <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition">Services</a>
                                
                                {/* Kitufe cha Request Quote kwenye Navbar */}
                                <button 
                                    onClick={() => setQuoteOpen(true)}
                                    className="text-slate-600 hover:text-blue-600 font-bold border-l border-slate-200 pl-6"
                                >
                                    Request Quote
                                </button>

                                {auth.user ? (
                                    <Link href={route('dashboard')} className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                                        Dashboard
                                    </Link>
                                ) : (
                                    <Link href={route('login')} className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition shadow-lg">
                                        Client Portal
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* HERO SECTION */}
                <section className="relative h-[90vh] flex items-center justify-center text-white pt-20 overflow-hidden bg-slate-900">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img 
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                            alt="Technology Background" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>

                    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-slate-800 border border-slate-700 backdrop-blur-sm text-xs font-bold text-cyan-400 uppercase tracking-widest">
                            🚀 Tanzania's Leading Systems Integrator
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                            Bridging the Gap Between <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Power, Data & Code.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
                            Most companies stop at software. We don't. <br/>
                            We wire your building (Electrical), secure your premises (CCTV), and build the software that runs your business (ERP).
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <button 
                                onClick={() => setQuoteOpen(true)}
                                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl transform hover:-translate-y-1"
                            >
                                Get a Quote
                            </button>
                            <Link href="/ecosystem" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition shadow-xl shadow-blue-600/20 transform hover:-translate-y-1">
                                View Our Software
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ABOUT TEASER (Engineering Focus) */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Engineering Excellence</span>
                            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6 leading-tight">
                                We Are Engineers, <br/>Not Just Developers.
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                In Tanzania, businesses often have to hire three different companies: one for electrical wiring, one for networks, and another for software. This creates chaos.
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                <strong>B-Tech Creations</strong> solves this. We handle the entire lifecycle. From the moment power enters your building to the moment you print a receipt on our POS system.
                            </p>
                            <Link href="/about" className="text-blue-600 font-bold hover:underline inline-flex items-center">
                                Read Our Story <i className="fa-solid fa-arrow-right ml-2"></i>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-4 -right-4 w-full h-full bg-slate-100 rounded-xl -z-10"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                alt="Engineering Team" 
                                className="rounded-xl shadow-2xl" 
                            />
                            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full text-green-600"><i className="fa-solid fa-certificate"></i></div>
                                <div>
                                    <div className="font-bold text-slate-900">Certified Experts</div>
                                    <div className="text-xs text-gray-500">Electrical & Network Engineers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section id="services" className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Service Portfolio</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Comprehensive IT Services</h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceCategories.map((service, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition duration-300 group">
                                    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                        <i className={`fa-solid fa-${service.icon} text-2xl text-blue-600 group-hover:text-white`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6">{service.desc}</p>
                                    <ul className="space-y-2 border-t border-slate-50 pt-4">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-600">
                                                <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-xs"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            
                            {/* CTA Box - Hapa Button inafungua Modal */}
                            <div className="bg-slate-900 rounded-2xl p-8 flex flex-col justify-center text-center text-white shadow-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <i className="fa-solid fa-headset text-4xl mb-4 text-cyan-400"></i>
                                    <h3 className="text-xl font-bold mb-2">Need a Custom Quote?</h3>
                                    <p className="text-gray-400 text-sm mb-6">
                                        For large scale installations (Offices, Schools, Hospitals).
                                    </p>
                                    <button 
                                        onClick={() => setQuoteOpen(true)}
                                        className="inline-block bg-cyan-500 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition"
                                    >
                                        Get a Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOFTWARE ECOSYSTEM TEASER (The Big 4) */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm">Software Products</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">The B-Tech Ecosystem</h2>
                                <p className="text-gray-500 mt-4 max-w-xl text-lg">
                                    Our flagship Operating Systems driving Tanzanian businesses.
                                </p>
                            </div>
                            <div>
                                <Link href="/ecosystem" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition duration-300">
                                    View All 12 Products <i className="fa-solid fa-arrow-right ml-2"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredProducts.map((product, idx) => (
                                <div key={idx} className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-400 hover:shadow-xl transition duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-xl bg-white shadow-sm ${product.color} text-2xl`}>
                                            <i className={`fa-solid fa-${product.icon}`}></i>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
                                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-3">{product.cat}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {product.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROFESSIONAL FOOTER */}
                <Footer />
            </div>
        </>
    );
}