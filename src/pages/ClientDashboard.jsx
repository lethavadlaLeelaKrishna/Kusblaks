import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardList, CheckCircle2, Clock, Calendar, LogOut, TrendingUp, ListTodo, Wallet, FileText, MapPin } from "lucide-react";
import TaskCalendar, { dateKey } from "../components/TaskCalendar";

const ClientDashboard = () => {
  const [session, setSession] = useState(null);
  const [checked, setChecked] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();

  useEffect(function () {
    var active = null;
    try {
      active = JSON.parse(localStorage.getItem('kushslaks_client'));
    } catch (err) {
      active = null;
    }

    if (!active) {
      navigate('/client-login');
      return;
    }

    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_tasks')) || [];
    } catch (err) {
      list = [];
    }

    var all = [];
    try {
      all = JSON.parse(localStorage.getItem('kushslaks_contracts')) || [];
    } catch (err) {
      all = [];
    }

    var myTasks = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].client === active.email) {
        myTasks.push(list[i]);
      }
    }

    var myContracts = [];
    for (var j = 0; j < all.length; j++) {
      if (all[j].client === active.name || all[j].client === active.email) {
        myContracts.push(all[j]);
      }
    }

    setSession(active);
    setTasks(myTasks);
    setContracts(myContracts);
    setChecked(true);
  }, [navigate]);

  function handleToggle(id) {
    var stored = [];
    try {
      stored = JSON.parse(localStorage.getItem('kushslaks_tasks')) || [];
    } catch (err) {
      stored = [];
    }

    for (var i = 0; i < stored.length; i++) {
      if (stored[i].id === id) {
        if (stored[i].status === 'Completed') {
          stored[i].status = 'Pending';
          stored[i].completedAt = '';
        } else {
          stored[i].status = 'Completed';
          stored[i].completedAt = dateKey(new Date());
        }
      }
    }

    localStorage.setItem('kushslaks_tasks', JSON.stringify(stored));

    var mine = [];
    for (var j = 0; j < stored.length; j++) {
      if (stored[j].client === session.email) {
        mine.push(stored[j]);
      }
    }
    setTasks(mine);
  }

  function handleLogout() {
    localStorage.removeItem('kushslaks_client');
    navigate('/client-login');
  }

  function priorityClasses(priority) {
    if (priority === 'High') {
      return 'bg-red-50 text-red-700 border-red-100';
    }
    if (priority === 'Low') {
      return 'bg-slate-50 text-slate-600 border-slate-200';
    }
    return 'bg-amber-50 text-amber-700 border-amber-100';
  }

  function statusClasses(status) {
    if (status === 'Completed') {
      return 'bg-green-50 text-green-700 border-green-100';
    }
    if (status === 'In Progress') {
      return 'bg-blue-50 text-blue-700 border-blue-100';
    }
    return 'bg-amber-50 text-amber-700 border-amber-100';
  }

  function formatValue(value) {
    var num = Number(value);
    if (isNaN(num)) {
      return '₹' + value;
    }
    return '₹' + num.toLocaleString('en-IN');
  }

  if (!checked || !session) {
    return null;
  }

  var todayKey = dateKey(new Date());

  var completedToday = tasks.filter(function (t) { return t.status === 'Completed' && t.completedAt === todayKey; });
  var pending = tasks.filter(function (t) { return t.status !== 'Completed'; });
  var visible = tasks.filter(function (t) { return !selectedDate || t.dueDate === selectedDate; });

  var totalValue = 0;
  for (var k = 0; k < contracts.length; k++) {
    var v = Number(contracts[k].value);
    if (!isNaN(v)) {
      totalValue += v;
    }
  }

  return (
    <div className="pt-20">
      <section className="relative py-16 overflow-hidden bg-slate-50 min-h-[70vh]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                <ClipboardList className="w-4 h-4" />
                Client Portal
              </div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome, {session.name}</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Your assigned tasks and project budget details.</p>
            </div>
            <button type="button" onClick={handleLogout} className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:border-red-300 hover:text-red-500 transition-all">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <ListTodo className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">{tasks.length}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total Tasks</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">{pending.length}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Pending</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">{completedToday.length}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Done Today</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <TaskCalendar tasks={tasks} selectedDate={selectedDate} onSelectDate={setSelectedDate} />

              <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">Today's Tasks</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between text-sm font-medium text-slate-600">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" />Completed today</span>
                    <span className="font-bold text-slate-900">{completedToday.length}</span>
                  </li>
                  <li className="flex items-center justify-between text-sm font-medium text-slate-600">
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" />Still pending</span>
                    <span className="font-bold text-slate-900">{pending.length}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between p-8 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <ClipboardList className="w-5 h-5 text-blue-600" />
                    <h2 className="text-lg font-bold text-slate-900">
                      {selectedDate ? 'Tasks on ' + selectedDate : 'Task Details'}
                    </h2>
                  </div>
                  {selectedDate && (
                    <button type="button" onClick={() => setSelectedDate('')} className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700">
                      Clear
                    </button>
                  )}
                </div>

                {visible.length === 0 ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                      <ListTodo className="w-7 h-7" />
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">No tasks yet</p>
                    <p className="text-sm font-medium text-slate-500">When your project manager assigns a task, it will appear here.</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {visible.map(function (t) {
                      var done = t.status === 'Completed';
                      return (
                        <div key={t.id} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
                          <button type="button" onClick={() => handleToggle(t.id)} title="Mark complete" className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border transition-all ${done ? 'bg-green-50 text-green-600 border-green-100' : 'bg-slate-50 text-slate-400 border-slate-100 hover:text-blue-600'}`}>
                            <CheckCircle2 className="w-6 h-6" />
                          </button>
                          <div className="flex-grow min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                              <h3 className={`font-bold ${done ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{t.title}</h3>
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${priorityClasses(t.priority)}`}>{t.priority}</span>
                            </div>
                            {t.details && <p className="text-sm text-slate-500 font-medium mb-1">{t.details}</p>}
                            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Due {t.dueDate}</span>
                              <span className={done ? 'text-green-600' : 'text-amber-600'}>{done ? 'Completed ' + t.completedAt : 'Pending'}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between p-8 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-blue-600" />
                    <h2 className="text-lg font-bold text-slate-900">Budget Details</h2>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{formatValue(totalValue)} total</span>
                </div>

                {contracts.length === 0 ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                      <Wallet className="w-7 h-7" />
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">No budget details</p>
                    <p className="text-sm font-medium text-slate-500">Your project budget will appear here once the contract is added.</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {contracts.map(function (c, i) {
                      return (
                        <div key={i} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                              <h3 className="font-bold text-slate-900">{c.title}</h3>
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${statusClasses(c.status)}`}>{c.status}</span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium">{c.type}</p>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                              <span className="text-blue-600">{formatValue(c.value)}</span>
                              {c.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{c.location}</span>}
                              {c.startDate && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{c.startDate}</span>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientDashboard;
