import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import QuoteModal from '@/Components/QuoteModal';

export default function MainLayout({ children, isTransparentNavbar = false }) {
    const [isQuoteOpen, setQuoteOpen] = useState(false);
    const { auth } = usePage().props;

    const navClasses = isTransparentNavbar
        ? "bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all duration-300"
        : "bg-white border-b border-gray-100 p-6 fixed w-full z-50";

    return (
        <>
            <QuoteModal isOpen={isQuoteOpen} onClose={() => setQuoteOpen(false)} />
            
            <div className="bg-white text-slate-800 font-sans antialiased scroll-smooth">
                {/* GLOBAL NAVIGATION */}
                <nav className={navClasses}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            <div className="flex items-center">
                                <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                                    <i className="fa-solid fa-layer-group text-3xl text-blue-600"></i>
                                    <span className="font-bold text-2xl tracking-tighter text-slate-900">
                                        B-Tech<span className="text-cyan-500">Creations</span>
                                    </span>
                                </Link>
                            </div>

                            <div className="hidden md:flex items-center space-x-6">
                                <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition">Home</Link>
                                <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium transition">About Us</Link>
                                <Link href="/ecosystem" className="text-slate-600 hover:text-blue-600 font-medium transition">OS Ecosystem</Link>
                                <a href="/#services" className="text-slate-600 hover:text-blue-600 font-medium transition">Services</a>
                                <Link href="/projects" className="text-slate-600 hover:text-blue-600 font-medium transition">Projects</Link>
                                <Link href="/contact" className="text-slate-600 hover:text-blue-600 font-medium transition">Contact Us</Link>

                                <button
                                    onClick={() => setQuoteOpen(true)}
                                    className="text-slate-600 hover:text-blue-600 font-bold border-l border-slate-200 pl-6"
                                >
                                    Request Quote
                                </button>

                                {auth?.user ? (
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

                {/* PAGE CONTENT */}
                <main>
                    {children}
                </main>

                {/* GLOBAL FOOTER */}
                <Footer />
            </div>
        </>
    );
}
