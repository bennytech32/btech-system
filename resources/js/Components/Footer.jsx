import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <>
            <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 font-sans relative z-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    
                    {/* Column 1: Brand Info */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <i className="fa-solid fa-layer-group text-2xl text-blue-600"></i>
                            <span className="font-bold text-xl text-white">B-Tech<span className="text-cyan-500">Creations</span></span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm mb-6 text-gray-500">
                            Tanzania's Premier Systems Integrator. Bridging the gap between Electrical Engineering, ICT Infrastructure, and Enterprise Software.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

                    {/* Column 2: Solutions (OS) */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Software Solutions</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/ecosystem" className="hover:text-cyan-400 transition">ShuleOS (Education)</Link></li>
                            <li><Link href="/ecosystem" className="hover:text-cyan-400 transition">DukaOS (Retail)</Link></li>
                            <li><Link href="/ecosystem" className="hover:text-cyan-400 transition">AfyaOS (Health)</Link></li>
                            <li><Link href="/ecosystem" className="hover:text-cyan-400 transition">MakaziOS (Real Estate)</Link></li>
                            <li><Link href="/ecosystem" className="hover:text-cyan-400 transition">View All 12 OS</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Engineering Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-cyan-400 transition">Electrical Installation</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Structured Cabling</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">CCTV & Security</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Server Room Setup</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition">Hardware Repair</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-location-dot mt-1 text-blue-600"></i>
                                <span>Dar es Salaam, Tanzania</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-phone text-blue-600"></i>
                                <a href="tel:+255745517500" className="hover:text-cyan-400 transition">+255 745 517 500</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-envelope text-blue-600"></i>
                                <span>info@btechcreations.co.tz</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; 2026 B-Tech Creations Ltd. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Sitemap</a>
                    </div>
                </div>
            </footer>

            {/* 🔥 FLOATING WHATSAPP BUTTON 🔥 */}
            <a 
                href="https://wa.me/255745517500?text=Hello%20B-Tech,%20I%20need%20assistance%20with%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition duration-300 animate-bounce"
                title="Chat with us on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp text-3xl"></i>
            </a>
        </>
    );
}