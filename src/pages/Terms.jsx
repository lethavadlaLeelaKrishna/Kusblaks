import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, ChevronRight, Handshake } from "lucide-react";

const Terms = () => {
  const points = [
    { title: 'Acceptance of Terms', body: 'By accessing or using the Kushslaks website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.' },
    { title: 'Our Services', body: 'Kushslaks provides construction, engineering and infrastructure services. All proposals, quotes and agreements are subject to separate written contracts and confirmed scopes of work.' },
    { title: 'Quotations & Pricing', body: 'All quotations are valid for 30 days unless otherwise stated and may be revised based on changes in scope, material costs or site conditions. Final pricing is confirmed in the signed agreement.' },
    { title: 'Client Responsibilities', body: 'Clients agree to provide accurate project information, timely approvals, site access and any permissions required to enable smooth execution of the work.' },
    { title: 'Intellectual Property', body: 'All content on this website — including text, graphics, logos and designs — is the property of Kushslaks and may not be reproduced without prior written consent.' },
    { title: 'Limitation of Liability', body: 'Kushslaks shall not be liable for any indirect or consequential damages arising from the use of this website. Project liabilities are governed by the respective signed contracts.' },
    { title: 'Governing Law', body: 'These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.' }
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
            <span className="text-blue-600">Terms &amp; Conditions</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
            <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Legal</span>
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight max-w-3xl mx-auto">
            Terms &amp; <span className="text-blue-600">Conditions</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Please read these terms carefully before using our website or engaging our services. They set out the rules that govern our relationship with you.
          </p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6">Last Updated: January 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-[32px] border border-slate-100 shadow-sm">
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
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Need clarification?</div>
                    <div className="text-sm text-slate-500 font-medium">Our team is happy to help.</div>
                  </div>
                </div>
                <Link to="/contact" className="px-8 py-3.5 bg-blue-600 text-[#c6a15b]! rounded-full font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-all whitespace-nowrap">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="container mx-auto px-8 py-10 rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-blue-900/20 text-center md:text-left">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Handshake className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's Work Together</h3>
              <p className="text-blue-100 font-medium">Transparent terms, honest service and quality you can trust.</p>
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

export default Terms;
