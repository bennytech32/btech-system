import { useState } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        service: 'Software Development',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // 1. Pangilia Ujumbe wa WhatsApp
        // Tunatumia %0a kutengeneza mstari mpya (Enter) kwenye WhatsApp
        const text = `*Habari B-Tech, Naomba Quote Mpya:*%0a%0a` +
                     `👤 *Jina:* ${formState.name}%0a` +
                     `📞 *Simu:* ${formState.phone}%0a` +
                     `🛠️ *Huduma:* ${formState.service}%0a` +
                     `📝 *Maelezo:* ${formState.message}`;

        // 2. Tengeneza Link (Namba yako: 255745517500)
        const whatsappUrl = `https://wa.me/255745517500?text=${text}`;

        // 3. Fungua WhatsApp kwenye Tab mpya
        window.open(whatsappUrl, '_blank');

        // 4. Funga Modal
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-900/80 backdrop-blur-sm transition-all p-4">
            <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5">
                
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center"
                >
                    <i className="fa-solid fa-xmark text-lg"></i>
                </button>

                <div className="p-8">
                    <div className="mb-6 border-b border-slate-100 pb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-green-600 flex items-center gap-2">
                            <i className="fa-brands fa-whatsapp text-lg"></i> Direct WhatsApp Quote
                        </span>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">Tell us about your project</h3>
                        <p className="text-sm text-slate-500">Fill this form and send it directly to our WhatsApp.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Jina */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
                            <input 
                                type="text" 
                                required
                                className="w-full rounded-lg border-slate-300 px-4 py-2.5 text-slate-900 focus:border-green-500 focus:ring-green-500 bg-slate-50"
                                placeholder="Juma Juma"
                                onChange={(e) => setFormState({...formState, name: e.target.value})}
                            />
                        </div>

                        {/* Simu */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Phone Number</label>
                            <input 
                                type="tel" 
                                required
                                className="w-full rounded-lg border-slate-300 px-4 py-2.5 text-slate-900 focus:border-green-500 focus:ring-green-500 bg-slate-50"
                                placeholder="07XX XXX XXX"
                                onChange={(e) => setFormState({...formState, phone: e.target.value})}
                            />
                        </div>

                        {/* Service Type */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Service Required</label>
                            <select 
                                className="w-full rounded-lg border-slate-300 px-4 py-2.5 text-slate-900 focus:border-green-500 focus:ring-green-500 bg-slate-50"
                                onChange={(e) => setFormState({...formState, service: e.target.value})}
                            >
                                <option>Software Development (App/Web)</option>
                                <option>Electrical Installation (3-Phase/Wiring)</option>
                                <option>Network & CCTV Installation</option>
                                <option>Hardware Maintenance</option>
                                <option>Buy B-Tech OS (POS, School, etc.)</option>
                                <option>General Consultancy</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="mb-1 block text-sm font-medium text-slate-700">Project Details</label>
                            <textarea 
                                rows="3"
                                className="w-full rounded-lg border-slate-300 px-4 py-2.5 text-slate-900 focus:border-green-500 focus:ring-green-500 bg-slate-50"
                                placeholder="Briefly describe what you need..."
                                onChange={(e) => setFormState({...formState, message: e.target.value})}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="w-full rounded-full bg-green-600 py-3 font-bold text-white shadow-lg transition hover:bg-green-700 hover:shadow-green-600/30 flex items-center justify-center gap-2"
                        >
                            Send via WhatsApp <i className="fa-brands fa-whatsapp text-xl"></i>
                        </button>
                        
                        <p className="text-xs text-center text-slate-400 mt-2">
                            This will open WhatsApp on your device.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}