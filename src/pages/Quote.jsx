import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Send, Clock, Users, CheckCircle2, ChevronRight, DollarSign, Lightbulb, ClipboardList, MessageCircle } from "lucide-react";

const Quote = () => {
  const benefits = [
    { title: '100% Free & No Obligation', desc: 'Get a detailed estimate without any commitment.', icon: <DollarSign className="w-6 h-6" /> },
    { title: 'Transparent Pricing', desc: 'Clear, itemised costs with no hidden charges.', icon: <FileText className="w-6 h-6" /> },
    { title: 'Expert Guidance', desc: 'Advice from experienced engineers and estimators.', icon: <Lightbulb className="w-6 h-6" /> },
    { title: 'Fast Turnaround', desc: 'Receive your quote within 24–48 hours.', icon: <Clock className="w-6 h-6" /> }
  ];

  const steps = [
    { title: 'Share Your Requirements', desc: 'Tell us about your project, scope and timeline.', icon: <ClipboardList className="w-5 h-5" /> },
    { title: 'We Review & Estimate', desc: 'Our experts analyse and prepare a detailed quote.', icon: <FileText className="w-5 h-5" /> },
    { title: 'Receive Your Quote', desc: 'Get a transparent breakdown delivered to you.', icon: <Send className="w-5 h-5" /> },
    { title: 'Kick Off Your Project', desc: 'Approve and we get building right away.', icon: <CheckCircle2 className="w-5 h-5" /> }
  ];

  const WHATSAPP_NUMBER = '919010529521';

  // "Through site" button: stores the request for the admin dashboard.
  const handleSubmit = (e) => {
    e.preventDefault();
    var form = e.currentTarget;
    var data = new FormData(form);
    var details = (data.get('details') || '').trim();
    var budget = data.get('budget') || '';

    var entry = {
      id: Date.now(),
      type: 'Quote',
      name: (data.get('name') || '').trim(),
      phone: (data.get('phone') || '').trim(),
      email: (data.get('email') || '').trim(),
      service: data.get('service') || '',
      notes: (budget ? 'Budget: ' + budget + ' • ' : '') + details,
      createdAt: new Date().toISOString()
    };

    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_consultations')) || [];
    } catch (err) {
      list = [];
    }
    list.push(entry);
    localStorage.setItem('kushslaks_consultations', JSON.stringify(list));
    form.reset();
  };

  // "Through WhatsApp" button: forwards the same details to WhatsApp.
  const handleWhatsApp = (e) => {
    e.preventDefault();
    var data = new FormData(e.currentTarget.form);
    var message = 'New Quote Request - Kushslaks\n\n'
      + 'Name: ' + (data.get('name') || '-') + '\n'
      + 'Phone: ' + (data.get('phone') || '-') + '\n'
      + 'Email: ' + (data.get('email') || '-') + '\n'
      + 'Service Type: ' + (data.get('service') || '-') + '\n'
      + 'Estimated Budget: ' + (data.get('budget') || '-') + '\n'
      + 'Project Details: ' + (data.get('details') || '-');
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero + Form Section */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:pt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-6">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-blue-600">Get a Free Quote</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Free Estimate</span>
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Get a Free <br /> <span className="text-blue-600">Project Quote</span>
              </h1>

              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                Share your project details and our team will prepare a transparent, no-obligation estimate tailored to your needs — usually within 24 to 48 hours.
              </p>

              <div className="space-y-6">
                {benefits.slice(0, 3).map((b, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600 shadow-lg shadow-blue-900/5">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{b.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Your Quote</h3>
              <p className="text-sm text-slate-500 font-medium mb-8">Fill in the details below and we'll do the rest.</p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" name="name" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                    <input type="tel" name="phone" placeholder="+91 9010529521" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" name="email" placeholder="you@example.com" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Type</label>
                    <select name="service" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-slate-600">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Infrastructure &amp; Civil Engineering</option>
                      <option>Institutional</option>
                      <option>Modular &amp; Prefabricated</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Estimated Budget</label>
                    <select name="budget" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-slate-600">
                      <option>Under ₹25 Lakhs</option>
                      <option>₹25L – ₹1 Crore</option>
                      <option>₹1 Cr – ₹5 Cr</option>
                      <option>Above ₹5 Cr</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
                  <textarea rows="4" name="details" placeholder="Describe your project, location and timeline..." className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all resize-none"></textarea>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button type="submit" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                    Request Free Quote
                    <Send className="w-5 h-5" />
                  </button>
                  <button type="button" onClick={handleWhatsApp} className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white rounded-full font-bold shadow-xl shadow-green-200 hover:bg-green-700 hover:scale-[1.02] transition-all">
                    <MessageCircle className="w-5 h-5" />
                    Send on WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Why Request a Quote
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Smart Way to <span className="text-blue-600">Start Your Project</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Know your numbers before you build. Our free quotes give you clarity and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {b.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{b.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">How It Works</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">From Request to <span className="text-blue-600">Estimate</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              A simple, transparent process to get you expert pricing quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  {step.icon}
                </div>
                <span className="absolute top-8 right-8 text-4xl font-black text-slate-100">{i + 1}</span>
                <h4 className="font-bold text-slate-900 mb-2 relative z-10">{step.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-6">
        <div className="container mx-auto px-8 py-10 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-blue-900/20 text-center md:text-left">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Prefer to Discuss First?</h3>
              <p className="text-blue-100 font-medium">Book a free consultation with our experts to plan your project.</p>
            </div>
          </div>
          <Link to="/consultation" className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Book a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Quote;
