import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, MessageCircle, ChevronRight, ArrowRight, Globe } from "lucide-react";

const Contact = () => {
  const cards = [
    { title: 'Visit Us', lines: ['chinnna kondrupadu,', 'Guntur, Andhra Pradesh 522019, India'], icon: <MapPin className="w-6 h-6" />, color: 'bg-blue-50 text-blue-600' },
    { title: 'Call Us', lines: ['+91 9010529521'], icon: <Phone className="w-6 h-6" />, color: 'bg-indigo-50 text-indigo-600' },
    { title: 'Email Us', lines: ['kubslaks@gmail.com'], icon: <Mail className="w-6 h-6" />, color: 'bg-purple-50 text-purple-600' },
    { title: 'Working Hours', lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed'], icon: <Clock className="w-6 h-6" />, color: 'bg-orange-50 text-orange-600' }
  ];

  const WHATSAPP_NUMBER = '919010529521';

  // "Through WhatsApp" button: forwards the same details to WhatsApp.
  const handleWhatsApp = (e) => {
    e.preventDefault();
    var data = new FormData(e.currentTarget.form);
    var message = 'New Enquiry - Kushslaks\n\n'
      + 'Name: ' + (data.get('name') || '-') + '\n'
      + 'Phone: ' + (data.get('phone') || '-') + '\n'
      + 'Email: ' + (data.get('email') || '-') + '\n'
      + 'Service Interested In: ' + (data.get('service') || '-') + '\n'
      + 'Message: ' + (data.get('message') || '-');
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
  };

  // "Through site" button: stores the enquiry for the admin dashboard.
  const handleSubmit = (e) => {
    e.preventDefault();
    var form = e.currentTarget;
    var data = new FormData(form);
    var entry = {
      id: Date.now(),
      type: 'Contact',
      name: (data.get('name') || '').trim(),
      phone: (data.get('phone') || '').trim(),
      email: (data.get('email') || '').trim(),
      service: data.get('service') || '',
      notes: (data.get('message') || '').trim(),
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-blue-600">Contact Us</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
            <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Get In Touch</span>
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight max-w-3xl mx-auto">
            Let's Talk About <span className="text-blue-600">Your Project</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Whether you're planning a new build, a renovation or a large-scale infrastructure project, our team is ready to help. Reach out and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                {card.lines.map((line, l) => (
                  <p key={l} className="text-slate-500 font-medium text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Send a Message
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                We'd Love to <span className="text-blue-600">Hear From You</span>
              </h2>
              <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed">
                Fill out the form and our team will reach out shortly. Prefer to talk now? Give us a call or drop by our office.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-blue-200">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Quick Response</h4>
                    <p className="text-sm text-slate-500 font-medium">We reply to every enquiry within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg shadow-blue-200">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Pan-India Presence</h4>
                    <p className="text-sm text-slate-500 font-medium">Serving clients across multiple states.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-xl">
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
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Interested In</label>
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
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows="4" name="message" placeholder="Tell us about your project..." className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all resize-none"></textarea>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button type="submit" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                    Send Message
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

      {/* Map Section */}
      <section className="pb-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="rounded-[32px] overflow-hidden shadow-2xl h-[400px] relative">
            <img src="https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Our Location" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 max-w-sm">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Head Office</h4>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">chinnna kondrupadu, Guntur, Andhra Pradesh 522019, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="container mx-auto px-8 py-10 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-blue-900/20 text-center md:text-left">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Phone className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Prefer to Speak Directly?</h3>
              <p className="text-blue-100 font-medium">Call our team now for instant assistance and project guidance.</p>
            </div>
          </div>
          <a href="tel:+919010529521" className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Call Now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
