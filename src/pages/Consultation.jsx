import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Users, MessageSquare, MessageCircle, ChevronRight, Send, FileText, Lightbulb, ShieldCheck } from "lucide-react";

const Consultation = () => {
  const expectations = [
    { title: 'Understand Your Vision', desc: 'We listen to your goals, requirements and constraints.', icon: <MessageSquare className="w-5 h-5" /> },
    { title: 'Expert Assessment', desc: 'Our engineers review feasibility, scope and options.', icon: <Lightbulb className="w-5 h-5" /> },
    { title: 'Clear Roadmap', desc: 'You leave with a clear plan, timeline and next steps.', icon: <FileText className="w-5 h-5" /> }
  ];

  const formats = [
    { title: 'In-Person Meeting', desc: 'Meet our team at your site or our office.', icon: <Users className="w-6 h-6" /> },
    { title: 'Phone Consultation', desc: 'A focused call to discuss your project needs.', icon: <Clock className="w-6 h-6" /> },
    { title: 'No Cost, No Pressure', desc: 'Free of charge with zero obligation to proceed.', icon: <ShieldCheck className="w-6 h-6" /> }
  ];

  const WHATSAPP_NUMBER = '919010529521';

  // "Through site" button: stores the booking for the admin dashboard.
  const handleSubmit = (e) => {
    e.preventDefault();
    var form = e.currentTarget;
    var data = new FormData(form);
    var booking = {
      id: Date.now(),
      type: 'Consultation',
      name: (data.get('name') || '').trim(),
      phone: (data.get('phone') || '').trim(),
      email: (data.get('email') || '').trim(),
      service: data.get('service') || '',
      date: data.get('date') || '',
      time: data.get('time') || '',
      notes: (data.get('notes') || '').trim(),
      createdAt: new Date().toISOString()
    };

    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_consultations')) || [];
    } catch (err) {
      list = [];
    }
    list.push(booking);
    localStorage.setItem('kushslaks_consultations', JSON.stringify(list));
    form.reset();
  };

  // "Through WhatsApp" button: forwards the same details to WhatsApp.
  const handleWhatsApp = (e) => {
    e.preventDefault();
    var data = new FormData(e.currentTarget.form);
    var message = 'New Consultation Booking - Kushslaks\n\n'
      + 'Name: ' + (data.get('name') || '-') + '\n'
      + 'Phone: ' + (data.get('phone') || '-') + '\n'
      + 'Email: ' + (data.get('email') || '-') + '\n'
      + 'Service Interested In: ' + (data.get('service') || '-') + '\n'
      + 'Preferred Date: ' + (data.get('date') || '-') + '\n'
      + 'Preferred Time: ' + (data.get('time') || '-') + '\n'
      + 'Additional Notes: ' + (data.get('notes') || '-');
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
                <span className="text-blue-600">Book a Consultation</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Book a Consultation</span>
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Let's Plan Your <br /> <span className="text-blue-600">Perfect Project</span>
              </h1>

              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                Book a free consultation with our construction experts. Discuss your ideas, get expert advice and walk away with a clear roadmap — with no cost or obligation.
              </p>

              <div className="space-y-6">
                {expectations.map((e, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600 shadow-lg shadow-blue-900/5">
                        {e.icon}
                      </div>
                      {i < expectations.length - 1 && <span className="w-[2px] h-8 bg-blue-100 mt-1"></span>}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{e.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Slot</h3>
              <p className="text-sm text-slate-500 font-medium mb-8">Choose a convenient time and we'll confirm shortly.</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                    <input type="date" name="date" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-slate-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Time</label>
                    <select name="time" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-slate-600">
                      <option>10:00 AM – 12:00 PM</option>
                      <option>12:00 PM – 2:00 PM</option>
                      <option>2:00 PM – 4:00 PM</option>
                      <option>4:00 PM – 6:00 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Additional Notes</label>
                  <textarea rows="3" name="notes" placeholder="Anything specific you'd like to discuss..." className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all resize-none"></textarea>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button type="submit" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                    Book Consultation
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

      {/* Formats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Consultation Options
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Choose What <span className="text-blue-600">Works for You</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Flexible consultation formats designed around your schedule and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{f.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{f.desc}</p>
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
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Pricing Instead?</h3>
              <p className="text-blue-100 font-medium">Request a detailed, no-obligation quote for your project.</p>
            </div>
          </div>
          <Link to="/quote" className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
