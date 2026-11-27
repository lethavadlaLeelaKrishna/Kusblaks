import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, ChevronRight, Mail, Users, Eye } from "lucide-react";

const Privacy = () => {
  const points = [
    { title: 'Information We Collect', body: 'We collect information you provide directly to us, such as your name, email address, phone number and project details when you fill out forms, request a quote or contact us.' },
    { title: 'How We Use Your Information', body: 'Your information is used to respond to enquiries, prepare estimates, deliver our services, improve our website and communicate important updates related to your project.' },
    { title: 'Data Sharing', body: 'We do not sell or rent your personal information. We may share data with trusted partners and subcontractors strictly to deliver the services you have requested.' },
    { title: 'Data Security', body: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction.' },
    { title: 'Cookies', body: 'Our website may use cookies to enhance your browsing experience, analyse traffic and remember your preferences. You can control cookies through your browser settings.' },
    { title: 'Your Rights', body: 'You have the right to access, correct or request deletion of your personal data. To exercise these rights, please contact us using the details below.' }
  ];

  const highlights = [
    { title: 'Your Data, Protected', desc: 'Industry-standard security practices.', icon: <Lock className="w-6 h-6" /> },
    { title: 'We Never Sell Data', desc: 'Your information stays private.', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Full Transparency', desc: 'You always know how data is used.', icon: <Eye className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-blue-600">Privacy Policy</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
            <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Legal</span>
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight max-w-3xl mx-auto">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Your privacy matters to us. This policy explains what information we collect, how we use it and the choices you have.
          </p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6">Last Updated: January 2026</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  {h.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{h.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[32px] border border-slate-100 shadow-sm">
            <div className="space-y-10">
              {points.map((p, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{i + 1}. {p.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Questions about privacy?</div>
                  <div className="text-sm text-slate-500 font-medium">kubslaks@gmail.com</div>
                </div>
              </div>
              <Link to="/contact" className="px-8 py-3.5 bg-blue-600 text-[#c6a15b]! rounded-full font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-all whitespace-nowrap">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="container mx-auto px-8 py-10 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-blue-900/20 text-center md:text-left">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Have a Project in Mind?</h3>
              <p className="text-blue-100 font-medium">Reach out — we handle your information with the same care we build with.</p>
            </div>
          </div>
          <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
