import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Users, Leaf, Target, Lightbulb, Handshake, Award, Building2, Factory, ChevronRight } from "lucide-react";

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '500+', icon: <Building2 className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '250+', icon: <Users className="w-6 h-6" /> },
    { label: 'Years of Experience', value: '15+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Expert Engineers', value: '120+', icon: <Award className="w-6 h-6" /> }
  ];

  const values = [
    { title: 'Quality First', desc: 'We never compromise on materials, craftsmanship or safety standards.', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Customer Focus', desc: 'Your vision drives everything we design, build and deliver.', icon: <Handshake className="w-6 h-6" /> },
    { title: 'Innovation', desc: 'Modern methods and technology for smarter, faster construction.', icon: <Lightbulb className="w-6 h-6" /> },
    { title: 'Integrity', desc: 'Transparent pricing, honest timelines and reliable communication.', icon: <Target className="w-6 h-6" /> },
    { title: 'Sustainability', desc: 'Eco-friendly practices and materials for a greener tomorrow.', icon: <Leaf className="w-6 h-6" /> },
    { title: 'Expert Team', desc: 'Skilled engineers, architects and project managers at every step.', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-6">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-blue-600">About Us</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">About Kushslaks</span>
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Building Spaces <br /> That <span className="text-blue-600">Inspire &amp; Endure</span>
              </h1>

              <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                For over 15 years, Kushslaks has been a trusted partner in construction, engineering and infrastructure — delivering projects that improve lives, support communities and stand the test of time.
              </p>

              <div className="flex items-center gap-6">
                <Link to="/contact" className="px-8 py-4 bg-blue-600 text-[#c6a15b]! rounded-full font-bold shadow-xl shadow-blue-200 hover:scale-105 transition-all">
                  Work With Us →
                </Link>
                <Link to="/portfolio" className="flex items-center gap-3 font-bold text-slate-700 hover:text-blue-600">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="https://images.pexels.com/photos/5922202/pexels-photo-5922202.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="About Kushslaks" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              <div className="absolute -right-8 top-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">15+ Years</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/36065437/pexels-photo-36065437.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop" alt="Our Story" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              </div>
              <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">500+ Projects</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Delivered</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                From Foundations to <span className="text-blue-600">Landmarks</span>
              </h2>
              <p className="text-slate-500 mb-6 text-lg font-medium leading-relaxed">
                What began as a small team of passionate engineers has grown into one of the region's most trusted construction and engineering firms. Our journey has been defined by a single-minded commitment to quality, safety and innovation.
              </p>
              <p className="text-slate-500 mb-10 font-medium leading-relaxed">
                Today, we deliver residential, commercial, industrial, institutional and infrastructure projects of every scale — combining time-tested craftsmanship with modern technology and sustainable practices.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Certified Quality</h4>
                    <p className="text-xs text-slate-500">ISO-grade standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">On-Time Delivery</h4>
                    <p className="text-xs text-slate-500">On-time, every time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-1 tracking-tight">{stat.value}</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Our Core Values
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">What Drives <span className="text-blue-600">Us Every Day</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              The principles that shape every project we take on and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{v.desc}</p>
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
              <Handshake className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Let's Build Something Great Together</h3>
              <p className="text-blue-100 font-medium">Have a project in mind? Our team is here to turn your vision into reality.</p>
            </div>
          </div>
          <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
