import { useState, useEffect } from 'react';
import { Link, Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import QuoteModal from '@/Components/QuoteModal';

export default function Welcome({ auth }) {

    // State ya kufungua/kufunga Fomu ya Quote
    const [isQuoteOpen, setQuoteOpen] = useState(false);

    // Hero Section Background Images Carousel (Featuring African tech professionals and IT infrastructure)
    const heroImages = [
        {
            url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1950&q=80',
            alt: 'African Tech Professionals & Engineers'
        },
        {
            url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1950&q=80',
            alt: 'Tanzanian Software & Systems Specialists'
        },
        {
            url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1950&q=80',
            alt: 'African Enterprise Technology Hub'
        },
        {
            url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1950&q=80',
            alt: 'Enterprise Data Center & Network Infrastructure'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    // 1. Sector-Based Enterprise Solutions
    const featuredProducts = [
        { name: 'Retail & Wholesale Systems', icon: 'shop', cat: 'Commerce & POS', desc: 'Integrated inventory control, POS automation, multi-branch stock management, and real-time sales reporting.', color: 'text-blue-500' },
        { name: 'Real Estate & Property Tech', icon: 'house-chimney', cat: 'Property Management', desc: 'Digital tenant portals, automated rent invoicing, lease agreement tracking, and utility billing automation.', color: 'text-green-500' },
        { name: 'Education & School Technology', icon: 'graduation-cap', cat: 'EdTech & Portals', desc: 'Automated academic grading, parent SMS notification portals, online fee collection, and student records.', color: 'text-yellow-500' },
        { name: 'Healthcare & Hospital Systems', icon: 'notes-medical', cat: 'HealthTech Systems', desc: 'Electronic medical record management (EMR), laboratory workflows, pharmacy stock control, and patient queues.', color: 'text-red-500' },
    ];

    // 2. Orodha ya Huduma (Service Portfolio - Expanded according to Memorandum objects)
    const serviceCategories = [
        {
            title: "Software & Systems Engineering",
            icon: "code",
            desc: "Custom enterprise platforms & ERP systems.",
            items: ["ERP & POS Systems", "Proprietary OS Development", "Cloud Deployment", "API Integrations"]
        },
        {
            title: "Electrical, HVAC & MEP",
            icon: "bolt",
            desc: "Industrial & domestic power systems.",
            items: ["Industrial Wiring", "Solar & Generator Backups", "HVAC & Cold Rooms", "Smart Energy Management"]
        },
        {
            title: "Cybersecurity & Cloud",
            icon: "shield-halved",
            desc: "Comprehensive information assurance.",
            items: ["Penetration Testing", "Digital Forensics", "Data Center Hosting", "Disaster Recovery"]
        },
        {
            title: "Telecommunications & ISP",
            icon: "tower-broadcast",
            desc: "High-speed network architecture.",
            items: ["Fiber Backbone Setup", "Licensed ISP Services", "Server Room Design", "Structured Cabling"]
        },
        {
            title: "Security & ELV Systems",
            icon: "video",
            desc: "Advanced surveillance & access control.",
            items: ["CCTV Ecosystems", "Biometric Access Control", "Fire Alarms", "Electric Fencing"]
        },
        {
            title: "AI, IoT & Telematics",
            icon: "microchip",
            desc: "Smart automation & machine learning.",
            items: ["IoT Smart Devices", "Automotive ECU Programming", "Data Analytics & BI", "Machine Learning Models"]
        },
        {
            title: "ICT & Electronics Supply & SLA Support",
            icon: "desktop",
            desc: "End-to-end hardware supply, config & repairs.",
            items: ["ICT Hardware & Electronics Supply", "Professional Equipment Setup & Config", "Component Repair & Maintenance", "24/7 SLA Technical Support"]
        },
        {
            title: "Fintech & Digital Solutions",
            icon: "wallet",
            desc: "Secure financial tech infrastructure.",
            items: ["Digital Escrow Platforms", "Secure Payment Gateways", "E-Commerce Engines", "Financial Auditing Tech"]
        },
        {
            title: "Logistics & Digital Agency",
            icon: "bullhorn",
            desc: "Global supply chain & brand scaling.",
            items: ["Supply Chain Management", "Technical SEO & Marketing", "IT Consultancy & Training", "General Procurement"]
        }
    ];

    // 3. Orodha ya Miradi (Our Projects for Parallax Section)
    const projects = [
        {
            title: "National Fiber Backbone & ISP Infrastructure",
            category: "Telecommunications",
            desc: "Architecting high-speed redundant network lines and server environments across commercial hubs.",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Smart CCTV Surveillance & IoT Smart Devices",
            category: "Security & IoT Automation",
            desc: "Full installation of AI-powered CCTV camera ecosystems, smart IoT sensors, biometric access control, and 24/7 remote surveillance.",
            image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Enterprise Cloud & Data Center Infrastructure",
            category: "Cloud & Data Centers",
            desc: "Deploying automated cloud backups, high-availability server clusters, and enterprise security management.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        }
    ];

    // 4. Expert Engineering Team Roles (Role/Titles according to company structure)
    const teamRoles = [
        {
            role: "Chief Systems Architect & Software Engineering Lead",
            dept: "Software Engineering",
            desc: "Enterprise OS architecture, cloud infrastructure & core system design.",
            icon: "code"
        },
        {
            role: "Lead Telecommunications & Fiber Network Specialist",
            dept: "Telecom & Networking",
            desc: "National fiber backbone setups, ISP routing & data center design.",
            icon: "tower-broadcast"
        },
        {
            role: "Senior Cybersecurity & Cloud Infrastructure Engineer",
            dept: "Cybersecurity",
            desc: "Penetration testing, digital forensics & disaster recovery systems.",
            icon: "shield-halved"
        },
        {
            role: "Senior Electrical & MEP Systems Engineer",
            dept: "Electrical & Power",
            desc: "3-Phase industrial wiring, generator backups & smart energy control.",
            icon: "bolt"
        },
        {
            role: "Smart Security & AI CCTV Integration Lead",
            dept: "ELV & Surveillance",
            desc: "AI camera ecosystems, biometric access control & electric fencing.",
            icon: "video"
        },
        {
            role: "ICT Electronics Supply & SLA Operations Manager",
            dept: "Hardware & Support",
            desc: "Hardware procurement, component-level repairs & 24/7 SLA support.",
            icon: "desktop"
        },
        {
            role: "AI, IoT & Telematics Automation Engineer",
            dept: "AI & Smart Tech",
            desc: "IoT smart sensors, ECU automotive programming & machine learning.",
            icon: "microchip"
        },
        {
            role: "Fintech Platforms & Payment Gateway Architect",
            dept: "Fintech Solutions",
            desc: "Digital escrow engines, payment gateways & financial auditing tech.",
            icon: "wallet"
        }
    ];

    return (
        <>
            <Head title="B-Tech Creations | Bridging Power, Code & Enterprise Solutions" />

            {/* THE QUOTE MODAL (Pop-up Form) */}
            <QuoteModal isOpen={isQuoteOpen} onClose={() => setQuoteOpen(false)} />

            <MainLayout isTransparentNavbar={true}>


                {/* HERO SECTION WITH SLIDING BACKGROUND IMAGE CAROUSEL */}
                <section className="relative min-h-[90vh] flex items-center justify-center text-white pt-20 pb-16 overflow-hidden bg-slate-900">
                    {/* Background Image Carousel with Overlay */}
                    {heroImages.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentSlide ? 'opacity-40 scale-105 transition-transform duration-10000' : 'opacity-0 scale-100'
                            }`}
                        >
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900 z-0"></div>

                    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                            Architecting Next-Generation <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                                Software, Fiber Networks & Cloud Systems.
                            </span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-300 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
                            We engineer intelligent enterprise software solutions, build high-speed telecommunications backbones, deploy AI CCTV surveillance networks, and manage cloud infrastructure for modern organizations.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <button
                                onClick={() => setQuoteOpen(true)}
                                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-500 hover:to-cyan-400 transition shadow-xl shadow-blue-600/30 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Get a Free Quote <i className="fa-solid fa-arrow-right text-sm"></i>
                            </button>
                            <Link href="/ecosystem" className="bg-slate-800/90 backdrop-blur-md border border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-700 transition shadow-xl transform hover:-translate-y-1">
                                Explore Our Software
                            </Link>
                        </div>

                        {/* Carousel Dots */}
                        <div className="flex justify-center items-center gap-2 mt-4">
                            {heroImages.map((_, dotIdx) => (
                                <button
                                    key={dotIdx}
                                    onClick={() => setCurrentSlide(dotIdx)}
                                    className={`h-2.5 rounded-full transition-all duration-500 ${
                                        dotIdx === currentSlide ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                                    }`}
                                    aria-label={`Go to slide ${dotIdx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* MODERN ENGINEERING EXCELLENCE SECTION */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                                <i className="fa-solid fa-layer-group"></i> Single-Source Systems Integrator
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Full-Spectrum Systems Engineering <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    & Managed Technical Services.
                                </span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal">
                                Eliminating the friction of coordinating multiple contractors. At <strong>B-Tech Creations</strong>, we combine ICT hardware procurement, network installation, component repairs, and custom software development under one seamless engineering contract.
                            </p>
                            
                            {/* Feature Pills Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                                    <div className="p-2.5 rounded-lg bg-blue-600 text-white text-lg"><i className="fa-solid fa-boxes-packing"></i></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">ICT & Electronics Supply</h4>
                                        <p className="text-xs text-gray-500 mt-0.5">Hardware procurement & SLA repairs</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                                    <div className="p-2.5 rounded-lg bg-cyan-500 text-white text-lg"><i className="fa-solid fa-network-wired"></i></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Network & CCTV Setup</h4>
                                        <p className="text-xs text-gray-500 mt-0.5">Fiber backbones & smart surveillance</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                                    <div className="p-2.5 rounded-lg bg-yellow-500 text-white text-lg"><i className="fa-solid fa-bolt"></i></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Electrical & Power Backups</h4>
                                        <p className="text-xs text-gray-500 mt-0.5">3-Phase power, generators & UPS</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                                    <div className="p-2.5 rounded-lg bg-emerald-600 text-white text-lg"><i className="fa-solid fa-code"></i></div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Custom Software Solutions</h4>
                                        <p className="text-xs text-gray-500 mt-0.5">Enterprise ERPs & cloud apps</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex items-center gap-6">
                                <Link href="/about" className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-blue-600 transition shadow-lg">
                                    Learn More About Us <i className="fa-solid fa-arrow-right text-xs"></i>
                                </Link>
                                <button onClick={() => setQuoteOpen(true)} className="text-blue-600 font-bold text-sm hover:underline">
                                    Request Technical Audit &rarr;
                                </button>
                            </div>
                        </div>

                        {/* Image Showcase Side */}
                        <div className="lg:col-span-6 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
                                <img
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Engineers and ICT Specialists"
                                    className="w-full h-[460px] object-cover group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                                {/* Floating Stat Card 1 */}
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center font-bold text-lg">
                                        <i className="fa-solid fa-shield-check"></i>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase text-slate-900 tracking-wider">Certified Engineers</div>
                                        <div className="text-[11px] text-gray-500">Multi-Sector ICT, Power & Software</div>
                                    </div>
                                </div>

                                {/* Floating Stat Card 2 */}
                                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 text-white flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-headset text-2xl text-cyan-400"></i>
                                        <div>
                                            <div className="font-bold text-sm">24/7 SLA Technical Support</div>
                                            <div className="text-xs text-gray-400">Supply, Install, Configure & Repair</div>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-full border border-cyan-500/30">Active SLA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION (Executive Dark Glassmorphic Design) */}
                <section id="services" className="py-28 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 inline-block shadow-md">
                                Multi-Disciplinary Engineering
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3">Our Service Portfolio</h2>
                            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base md:text-lg">
                                Backed by our corporate memorandum objects, covering everything from core systems engineering to electrical, network, and enterprise cloud solutions.
                            </p>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceCategories.map((service, index) => (
                                <div key={index} className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-700/80 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10 transition duration-300 group flex flex-col justify-between">
                                    <div>
                                        <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-400 transition-colors shadow-inner border border-slate-700/50">
                                            <i className={`fa-solid fa-${service.icon} text-2xl text-cyan-400 group-hover:text-slate-950 transition duration-300`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">{service.title}</h3>
                                        <p className="text-sm text-gray-400 mb-6">{service.desc}</p>
                                    </div>
                                    <ul className="space-y-2.5 border-t border-slate-700/60 pt-4">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-300">
                                                <i className="fa-solid fa-check text-cyan-400 mt-1 mr-3 text-xs"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* CTA Box - High Impact Gradient */}
                            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-2xl p-8 flex flex-col justify-center text-center text-white shadow-2xl relative overflow-hidden group border border-cyan-400/30">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-4 border border-white/20">
                                        <i className="fa-solid fa-headset text-3xl text-cyan-300"></i>
                                    </div>
                                    <h3 className="text-2xl font-extrabold mb-2">Need a Custom Enterprise Quote?</h3>
                                    <p className="text-cyan-100 text-sm mb-6 leading-relaxed">
                                        For large-scale installations (Offices, Schools, Hospitals, Commercial & Industrial Plants).
                                    </p>
                                    <button
                                        onClick={() => setQuoteOpen(true)}
                                        className="inline-block bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        Get a Custom Quote
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
                                <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm">Enterprise Software</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Industry-Specific Solutions</h2>
                                <p className="text-gray-500 mt-4 max-w-xl text-lg">
                                    Tailored digital platforms engineered to digitize, automate, and scale key enterprise sectors.
                                </p>
                            </div>
                            <div>
                                <Link href="/ecosystem" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition duration-300 shadow-sm">
                                    View All 12 Solutions <i className="fa-solid fa-arrow-right ml-2"></i>
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

                {/* OUR PROJECTS SECTION WITH PARALLAX SCROLLING EFFECT */}
                <section id="projects" className="relative py-32 bg-slate-900 text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')` }}>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm">Portfolio & Track Record</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2">Our Landmark Projects</h2>
                            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
                                Showcasing excellence across multi-disciplinary engineering, networking, and digital deployments.
                            </p>
                            <div className="w-20 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {projects.map((proj, i) => (
                                <div key={i} className="bg-slate-800/80 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700 shadow-2xl hover:border-cyan-500 transition duration-300 group flex flex-col">
                                    <div className="h-52 overflow-hidden relative">
                                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                            {proj.category}
                                        </span>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition">{proj.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed mb-6">{proj.desc}</p>
                                        </div>
                                        <button
                                            onClick={() => setQuoteOpen(true)}
                                            className="inline-flex items-center text-cyan-400 font-bold text-sm hover:text-cyan-300 transition"
                                        >
                                            Inquire About Similar Project <i className="fa-solid fa-arrow-right ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR EXPERT TEAM SECTION - RIGHT TO LEFT CONTINUOUS MARQUEE SLIDER */}
                <section className="py-20 bg-slate-950 text-white border-t border-slate-800/80 overflow-hidden relative">
                    <style>{`
                        @keyframes slideLeft {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-team-marquee {
                            display: flex;
                            width: max-content;
                            animation: slideLeft 35s linear infinite;
                        }
                        .animate-team-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>

                    <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                        <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm">Multidisciplinary Talent</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-2">Our Expert Engineering Team</h2>
                        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
                            Certified system architects, network leads, and engineering specialists driving execution across B-Tech divisions.
                        </p>
                        <div className="w-16 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
                    </div>

                    {/* Infinite Sliding Container (Right to Left) */}
                    <div className="relative w-full overflow-hidden">
                        {/* Gradient Fades on edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

                        <div className="animate-team-marquee flex gap-6">
                            {/* Duplicate array twice to create seamless loop */}
                            {[...teamRoles, ...teamRoles].map((member, index) => (
                                <div
                                    key={index}
                                    className="w-[340px] shrink-0 bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-800 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10 transition duration-300 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-slate-950 transition duration-300">
                                                <i className={`fa-solid fa-${member.icon}`}></i>
                                            </div>
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                                                {member.dept}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition">
                                            {member.role}
                                        </h3>
                                        <p className="text-gray-400 text-xs leading-relaxed">
                                            {member.desc}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-gray-500">
                                        <span className="flex items-center gap-1.5 text-slate-400">
                                            <i className="fa-solid fa-user-gear text-cyan-400"></i> B-Tech Specialist
                                        </span>
                                        <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                                            <i className="fa-solid fa-circle text-[6px]"></i> Certified
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </MainLayout>
        </>
    );
}