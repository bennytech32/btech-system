import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Contact() {
    return (
        <>
            <Head title="Contact Us | B-Tech Creations" />

            <MainLayout>
                <div className="bg-slate-50 min-h-screen py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        
                        <div className="text-center mb-16">
                            <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm">Get In Touch</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">Contact Our Engineering Team</h1>
                            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                                Ready to digitize your operations or upgrade your infrastructure? Reach out to our certified specialists for a comprehensive audit and consultation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div className="space-y-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl shrink-0">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Head Office</h3>
                                        <p className="text-gray-500 leading-relaxed">
                                            B-Tech Creations HQ<br />
                                            Dar es Salaam, Tanzania<br />
                                            (Include precise building/street here)
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                                    <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center text-2xl shrink-0">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Phone & Direct WhatsApp</h3>
                                        <p className="text-gray-500 leading-relaxed mb-3">
                                            Available 24/7 for SLA clients and technical emergencies.
                                        </p>
                                        <a href="https://wa.me/255745517500" target="_blank" className="inline-flex items-center gap-2 font-bold text-lg text-slate-800 hover:text-green-600 transition">
                                            +255 745 517 500 <i className="fa-brands fa-whatsapp text-green-500"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6">
                                    <div className="w-14 h-14 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center text-2xl shrink-0">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Email Address</h3>
                                        <p className="text-gray-500 leading-relaxed mb-3">
                                            For detailed RFQs, project proposals, and corporate inquiries.
                                        </p>
                                        <a href="mailto:info@btechcreations.co.tz" className="font-bold text-lg text-blue-600 hover:underline">
                                            info@btechcreations.co.tz
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Direct WhatsApp CTA Card */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
                                
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-4">Fast-Track Your Project</h2>
                                    <p className="text-slate-300 mb-8 leading-relaxed">
                                        Skip the emails. Connect directly with our lead engineers on WhatsApp to discuss your enterprise requirements, request a site survey, or get a quotation instantly.
                                    </p>

                                    <div className="bg-white/10 p-6 rounded-xl border border-white/20 mb-8">
                                        <h4 className="font-bold text-cyan-400 mb-2">What happens next?</h4>
                                        <ul className="space-y-3 text-sm text-slate-200">
                                            <li className="flex gap-3"><i className="fa-solid fa-check text-green-400 mt-1"></i> We assess your system requirements.</li>
                                            <li className="flex gap-3"><i className="fa-solid fa-check text-green-400 mt-1"></i> We schedule a physical or remote technical survey.</li>
                                            <li className="flex gap-3"><i className="fa-solid fa-check text-green-400 mt-1"></i> We send a detailed corporate quotation.</li>
                                        </ul>
                                    </div>

                                    <a 
                                        href="https://wa.me/255745517500?text=Hello%20B-Tech%20Creations,%20I%20would%20like%20to%20request%20a%20consultation." 
                                        target="_blank"
                                        className="w-full inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/20 transition transform hover:-translate-y-1"
                                    >
                                        <i className="fa-brands fa-whatsapp text-2xl"></i> Start Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </MainLayout>
        </>
    );
}
