import { Link, Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function About() {
    return (
        <>
            <Head title="About Us - Engineering Excellence" />
            
            <MainLayout>

                {/* Hero Section */}
                <section className="pt-40 pb-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Our Story</span>
                            <h1 className="text-5xl font-bold mt-4 mb-6 leading-tight text-slate-900">
                                Bridging <span className="text-blue-600">Power</span> and <span className="text-cyan-500">Intelligence</span>.
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                B-Tech Creations was born from a simple observation: Software doesn't work without hardware, and hardware is useless without power. We are the only company in Tanzania that provides the full stack: <strong>Electrical Engineering, Network Infrastructure, and Software Development</strong>.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="rounded-xl shadow-lg mt-10" />
                            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" className="rounded-xl shadow-lg" />
                        </div>
                    </div>
                </section>

                {/* The 3 Pillars */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold">Our Engineering Core</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition">
                                <i className="fa-solid fa-bolt text-4xl text-yellow-500 mb-6"></i>
                                <h3 className="text-xl font-bold mb-3">Electrical</h3>
                                <p className="text-gray-500 text-sm">3-Phase installation, UPS Backup, and Smart Office Wiring. We ensure 99.9% uptime.</p>
                            </div>
                            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition">
                                <i className="fa-solid fa-network-wired text-4xl text-blue-600 mb-6"></i>
                                <h3 className="text-xl font-bold mb-3">Infrastructure</h3>
                                <p className="text-gray-500 text-sm">Structured Cabling, Server Rooms, and CCTV Security Systems integration.</p>
                            </div>
                            <div className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition">
                                <i className="fa-solid fa-code text-4xl text-cyan-500 mb-6"></i>
                                <h3 className="text-xl font-bold mb-3">Software</h3>
                                <p className="text-gray-500 text-sm">Custom development and enterprise digital solutions (Retail, Education, Healthcare platforms, etc).</p>
                            </div>
                        </div>
                    </div>
                </section>

            </MainLayout>
        </>
    );
}