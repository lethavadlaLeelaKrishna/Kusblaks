import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building, Mail, Lock, Eye, EyeOff, ChevronRight, ShieldCheck, ClipboardList, Headphones, Lock as LockIcon } from "lucide-react";

const ClientLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const features = [
    { title: 'Track Your Projects', desc: 'Live progress updates and milestones.', icon: <ClipboardList className="w-5 h-5" /> },
    { title: 'Documents & Reports', desc: 'Access drawings, invoices and reports.', icon: <LockIcon className="w-5 h-5" /> },
    { title: 'Dedicated Support', desc: 'Direct line to your project manager.', icon: <Headphones className="w-5 h-5" /> }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    var data = new FormData(e.currentTarget);
    var email = (data.get('email') || '').trim().toLowerCase();
    var password = data.get('password') || '';

    if (!email || !password) {
      setError('Please enter your login ID and password.');
      return;
    }

    var clients = [];
    try {
      clients = JSON.parse(localStorage.getItem('kushslaks_users')) || [];
    } catch (err) {
      clients = [];
    }

    for (var i = 0; i < clients.length; i++) {
      if (clients[i].email === email && clients[i].password === password) {
        localStorage.setItem('kushslaks_client', JSON.stringify(clients[i]));
        navigate('/client-dashboard');
        return;
      }
    }

    setError('Invalid login details. Please use the credentials shared by your Kushslaks admin.');
  };

  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden bg-slate-50 min-h-[70vh] flex items-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
                <span className="text-[10px] font-bold text-blue-900 tracking-[0.2em] uppercase">Client Portal</span>
                <span className="h-[1px] w-8 bg-blue-900/20"></span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Your Projects, <br /> <span className="text-blue-600">All in One Place</span>
              </h1>

              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                Sign in to the Kushslaks client portal to track progress, access documents and stay connected with your project team.
              </p>

              <div className="space-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600 shadow-lg shadow-blue-900/5">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-200">
                  <Building className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Client Login</h2>
                <p className="text-sm text-slate-500 font-medium">Access your client dashboard</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Client ID / Email</label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input type="text" name="email" placeholder="Client ID or email" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="••••••••" className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-100" />
                    Keep me signed in
                  </label>
                  <Link to="/contact" className="text-sm font-bold text-blue-600 hover:text-blue-700">Need help?</Link>
                </div>

                {error && <p className="text-sm font-bold text-red-500 text-center">{error}</p>}

                <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                  Access Dashboard
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>

              <p className="text-center text-sm font-medium text-slate-500 mt-8">
                Client logins are issued by the Kushslaks admin team.
              </p>

              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 mt-8">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Secured client access
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientLogin;
