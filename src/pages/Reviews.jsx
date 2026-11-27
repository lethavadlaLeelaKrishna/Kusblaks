import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Users, Award, TrendingUp, ChevronRight, ShieldCheck, Clock, Leaf } from "lucide-react";

const Reviews = () => {
  const summary = [
    { label: 'Average Rating', value: '4.9/5', icon: <Star className="w-6 h-6" /> },
    { label: 'Total Reviews', value: '300+', icon: <Quote className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '250+', icon: <Users className="w-6 h-6" /> },
    { label: 'Repeat Clients', value: '85%', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const reviews = [
    { name: 'Ravi Kumar', role: 'Project Manager, Tech Solutions', text: 'Kushslaks delivered our office space on time and beyond our expectations. Their professionalism and quality are truly commendable.', initials: 'RK', color: 'bg-blue-100 text-blue-600' },
    { name: 'Sneha Reddy', role: 'Director, GreenTech Industries', text: 'The team understood our requirements perfectly and provided innovative solutions for our industrial project. Highly recommended!', initials: 'SR', color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Arjun Mehta', role: 'CEO, Skyline Developers', text: 'From planning to execution, everything was seamless. Kushslaks is a reliable partner for all construction needs.', initials: 'AM', color: 'bg-purple-100 text-purple-600' },
    { name: 'Priya Nair', role: 'Operations Head, ChemTech Ltd.', text: 'The professionalism and attention to detail helped us set up our facility smoothly. We highly recommend them.', initials: 'PN', color: 'bg-orange-100 text-orange-600' },
    { name: 'Vikram Malhotra', role: 'Civic Project Head', text: 'Reliable, professional and committed to public safety. A great partner for institutional building.', initials: 'VM', color: 'bg-teal-100 text-teal-600' },
    { name: 'Anil Verma', role: 'Founder, SpeedSpace Solutions', text: 'Kushslaks delivered our modular office in record time without compromising on quality. Their prefab expertise is second to none.', initials: 'AV', color: 'bg-rose-100 text-rose-600' },
    { name: 'Meera Joshi', role: 'Project Head, UrbanNest', text: 'The prefabricated structure was precise, durable and cost-effective. A flawless execution from design to handover.', initials: 'MJ', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Suresh Reddy', role: 'Plant Director, Bharat Industries', text: 'Their team\'s technical expertise and commitment to safety were outstanding throughout our manufacturing plant build.', initials: 'SR', color: 'bg-violet-100 text-violet-600' },
    { name: 'Rohit Sharma', role: 'Director, BuildFast Infra', text: 'Rapid deployment and excellent finish. Kushslaks is our go-to partner for complex construction projects.', initials: 'RS', color: 'bg-amber-100 text-amber-600' }
  ];

  const trust = [
    { title: 'On-Time Delivery', desc: '98% of projects completed on or before schedule.', icon: <Clock className="w-6 h-6" /> },
    { title: 'Safety First', desc: 'Zero-compromise safety record across all sites.', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Sustainable Build', desc: 'Eco-friendly materials and green practices.', icon: <Leaf className="w-6 h-6" /> }
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
            <span className="text-blue-600">Reviews</span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
            <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Client Reviews</span>
            <span className="h-[1px] w-8 bg-blue-900/20"></span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight max-w-3xl mx-auto">
            Trusted by Many, <span className="text-blue-600">Loved by All</span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-3 font-bold text-slate-700">4.9 out of 5</span>
          </div>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Our clients' success stories inspire us to do better every day. Here's what they have to say about working with Kushslaks.
          </p>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {summary.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{s.value}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">What Our Clients Say</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Real Stories, <span className="text-blue-600">Real Results</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Genuine feedback from the clients and partners who trust us with their most important projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative text-left group">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <Quote className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1 mb-5 mt-2">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8 font-medium">"{r.text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${r.color} rounded-full flex items-center justify-center font-bold text-lg`}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{r.name}</div>
                    <div className="text-xs text-slate-500 font-medium">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {trust.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  {t.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{t.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs">{t.desc}</p>
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
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Write Your Success Story?</h3>
              <p className="text-blue-100 font-medium">Join hundreds of satisfied clients who trust Kushslaks with their vision.</p>
            </div>
          </div>
          <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl whitespace-nowrap">
            Get Started →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
