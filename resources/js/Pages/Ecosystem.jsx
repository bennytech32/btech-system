import { Link, Head } from '@inertiajs/react';
import Footer from '@/Components/Footer'; // Import Footer

export default function Ecosystem() {
    
    // MAKUNDI YA OS (CATEGORIES)
    const categories = [
        {
            title: "Core Business Essentials",
            desc: "The fundamental systems that run the daily operations of major sectors.",
            color: "blue",
            products: [
                { name: 'DukaOS', icon: 'shop', cat: 'Retail & Wholesale', desc: 'POS, Stock & Profit Analysis.' },
                { name: 'ShuleOS', icon: 'graduation-cap', cat: 'Education', desc: 'School Management & Parents Portal.' },
                { name: 'AfyaOS', icon: 'notes-medical', cat: 'Healthcare', desc: 'Hospital & Pharmacy Management.' },
                { name: 'MakaziOS', icon: 'house-chimney', cat: 'Real Estate', desc: 'Property & Tenant Management.' },
            ]
        },
        {
            title: "Industrial & Logistics",
            desc: "Heavy-duty software for production, transport, and construction.",
            color: "orange",
            products: [
                { name: 'ViwandaOS', icon: 'industry', cat: 'Manufacturing', desc: 'Production Line & Raw Materials.' },
                { name: 'MizigoOS', icon: 'truck-fast', cat: 'Logistics', desc: 'Fleet Management & Tracking.' },
                { name: 'JengaOS', icon: 'trowel-bricks', cat: 'Construction', desc: 'Site Management & Materials.' },
                { name: 'GariOS', icon: 'wrench', cat: 'Garage', desc: 'Vehicle Service History & Spares.' },
            ]
        },
        {
            title: "Service & Financial Tools",
            desc: "Specialized tools for service providers and financial institutions.",
            color: "emerald",
            products: [
                { name: 'MalaziOS', icon: 'bed', cat: 'Hospitality', desc: 'Hotel Booking & Room Service.' },
                { name: 'FedhaOS', icon: 'money-bill-trend-up', cat: 'Finance', desc: 'Microfinance & Bureau de Change.' },
                { name: 'FundiOS', icon: 'screwdriver-wrench', cat: 'Repairs', desc: 'Job Cards for Technicians.' },
                { name: 'KaziOS', icon: 'briefcase', cat: 'HR', desc: 'Payroll & Employee Management.' },
            ]
        }
    ];

    return (
        <>
            <Head title="The B-Tech Ecosystem" />
            
            <div className="bg-slate-50 min-h-screen font-sans">
                {/* Navbar Simple */}
                <nav className="bg-slate-900 text-white p-6 shadow-md">
                     <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <Link href="/" className="font-bold text-2xl">B-Tech<span className="text-cyan-500">Creations</span></Link>
                        <div className="space-x-6 text-sm font-medium">
                            <Link href="/" className="hover:text-cyan-400">Home</Link>
                            <Link href="/about" className="hover:text-cyan-400">About</Link>
                            <Link href="/ecosystem" className="text-cyan-400">Ecosystem</Link>
                        </div>
                     </div>
                </nav>

                {/* Hero Header */}
                <div className="bg-slate-900 text-white py-20 px-6 text-center border-b border-slate-800">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">The B-Tech <span className="text-cyan-500">Ecosystem</span></h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        One Account. Twelve Solutions. A unified operating system for the Tanzanian economy.
                    </p>
                </div>

                {/* Categories Loop */}
                <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
                    {categories.map((cat, idx) => (
                        <div key={idx}>
                            <div className="mb-10 border-l-4 border-slate-900 pl-6">
                                <h2 className="text-3xl font-bold text-slate-900">{cat.title}</h2>
                                <p className="text-gray-500 mt-2">{cat.desc}</p>
                            </div>

                            <div className="grid md:grid-cols-4 gap-6">
                                {cat.products.map((product, pIdx) => (
                                    <div key={pIdx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-xl hover:border-cyan-500 transition duration-300 group">
                                        <div className={`w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-${cat.color}-600 group-hover:bg-${cat.color}-600 group-hover:text-white transition`}>
                                            <i className={`fa-solid fa-${product.icon} text-xl`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-1">{product.name}</h3>
                                        <span className="text-xs font-bold uppercase text-gray-400">{product.cat}</span>
                                        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                            {product.desc}
                                        </p>
                                        <button className="mt-6 text-sm font-bold text-cyan-600 group-hover:underline">View Features &rarr;</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-cyan-600 py-16 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Digitize Your Business?</h2>
                    <p className="mb-8 text-cyan-100">Get a demo of any OS today.</p>
                    <Link href="/" className="bg-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition">Contact Sales</Link>
                </div>

                <Footer />
            </div>
        </>
    );
}