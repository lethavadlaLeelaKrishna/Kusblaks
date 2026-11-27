import React, { useState, useEffect } from 'react';
import { ShieldCheck, UserPlus, Mail, Phone, Lock, Eye, EyeOff, Copy, Check, LogOut, Trash2, Users, KeyRound, Send, FileText, Plus, Calendar, MapPin, Layers, TrendingUp, ChevronRight, ListTodo, MessageSquare, Clock } from "lucide-react";
import TaskCalendar, { dateKey } from "../components/TaskCalendar";

const DEFAULT_ADMIN = {
  name: 'Lethavadla Anji Babu',
  email: 'kusblaks@gmail.com',
  password: 'Krishna73@73'
};

const AdminDashboard = () => {
  const [session, setSession] = useState(null);
  const [checked, setChecked] = useState(false);

  const [clients, setClients] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [tab, setTab] = useState('contracts');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [copied, setCopied] = useState('');
  const [contractError, setContractError] = useState('');
  const [contractSuccess, setContractSuccess] = useState('');
  const [tasks, setTasks] = useState([]);
  const [messages, setMessages] = useState([]);
  const [taskDate, setTaskDate] = useState('');
  const [taskError, setTaskError] = useState('');
  const [taskSuccess, setTaskSuccess] = useState('');

  useEffect(function () {
    var active = null;
    try {
      active = JSON.parse(localStorage.getItem('kushslaks_admin'));
    } catch (err) {
      active = null;
    }

    localStorage.setItem('kushslaks_admins', JSON.stringify([DEFAULT_ADMIN]));

    setSession(active);
    setChecked(true);
    loadClients();
    loadContracts();
    loadTasks();
    loadMessages();
  }, []);

  function loadClients() {
    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_users')) || [];
    } catch (err) {
      list = [];
    }
    setClients(list);
  }

  function loadContracts() {
    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_contracts')) || [];
    } catch (err) {
      list = [];
    }
    setContracts(list);
  }

  function loadTasks() {
    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_tasks')) || [];
    } catch (err) {
      list = [];
    }
    setTasks(list);
  }

  function loadMessages() {
    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_consultations')) || [];
    } catch (err) {
      list = [];
    }
    setMessages(list);
  }

  function handleDeleteMessage(id) {
    var list = messages.filter(function (m) { return m.id !== id; });
    localStorage.setItem('kushslaks_consultations', JSON.stringify(list));
    setMessages(list);
  }

  function readTasks() {
    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_tasks')) || [];
    } catch (err) {
      list = [];
    }
    return list;
  }

  function writeTasks(list) {
    localStorage.setItem('kushslaks_tasks', JSON.stringify(list));
    setTasks(list);
  }

  function handleAuth(e) {
    e.preventDefault();
    setAuthError('');

    var data = new FormData(e.currentTarget);
    var email = (data.get('email') || '').trim().toLowerCase();
    var password = data.get('password') || '';

    if (!email || !password) {
      setAuthError('Please enter your email and password.');
      return;
    }

    var admins = [];
    try {
      admins = JSON.parse(localStorage.getItem('kushslaks_admins')) || [];
    } catch (err) {
      admins = [];
    }

    for (var i = 0; i < admins.length; i++) {
      if (admins[i].email === email && admins[i].password === password) {
        localStorage.setItem('kushslaks_admin', JSON.stringify(admins[i]));
        setSession(admins[i]);
        return;
      }
    }

    setAuthError('Invalid email or password.');
  }

  function handleCreate(e) {
    e.preventDefault();
    setError('');
    setSuccess('');

    var form = e.currentTarget;
    var data = new FormData(form);
    var name = (data.get('name') || '').trim();
    var email = (data.get('email') || '').trim().toLowerCase();
    var phone = (data.get('phone') || '').trim();
    var password = data.get('password') || '';

    if (!name || !email || !phone || !password) {
      setError('Please fill in all fields.');
      return;
    }

    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_users')) || [];
    } catch (err) {
      list = [];
    }

    var phoneDigits = phone.replace(/\D/g, '');
    for (var i = 0; i < list.length; i++) {
      if (list[i].email === email || (list[i].phone || '').replace(/\D/g, '') === phoneDigits) {
        setError('A client with this email or mobile number already exists.');
        return;
      }
    }

    list.push({ name: name, email: email, phone: phone, password: password });
    localStorage.setItem('kushslaks_users', JSON.stringify(list));
    setClients(list);
    form.reset();
    setSuccess('Client login created. Share the credentials with the client.');
  }

  function handleDelete(email) {
    var list = clients.filter(function (c) { return c.email !== email; });
    localStorage.setItem('kushslaks_users', JSON.stringify(list));
    setClients(list);
  }

  function credentialsText(c) {
    return 'Kushslaks Client Portal\nLogin: ' + c.email + '\nPassword: ' + c.password + '\nSign in: ' + window.location.origin + '/client-login';
  }

  function handleWhatsApp(c) {
    var digits = (c.phone || '').replace(/\D/g, '');
    var url = 'https://wa.me/' + digits + '?text=' + encodeURIComponent(credentialsText(c));
    window.open(url, '_blank');
  }

  function handleCopy(c) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(credentialsText(c));
    }
    setCopied(c.email);
    setTimeout(function () { setCopied(''); }, 1500);
  }

  function handleCreateContract(e) {
    e.preventDefault();
    setContractError('');
    setContractSuccess('');

    var form = e.currentTarget;
    var data = new FormData(form);
    var client = (data.get('client') || '').trim();
    var title = (data.get('title') || '').trim();
    var type = (data.get('type') || '').trim();
    var value = (data.get('value') || '').trim();
    var location = (data.get('location') || '').trim();
    var startDate = (data.get('startDate') || '').trim();
    var status = (data.get('status') || 'Pending').trim();

    if (!client || !title || !type || !value) {
      setContractError('Please enter the client, project title, type and contract value.');
      return;
    }

    var list = [];
    try {
      list = JSON.parse(localStorage.getItem('kushslaks_contracts')) || [];
    } catch (err) {
      list = [];
    }

    list.push({ client: client, title: title, type: type, value: value, location: location, startDate: startDate, status: status });
    localStorage.setItem('kushslaks_contracts', JSON.stringify(list));
    setContracts(list);
    form.reset();
    setContractSuccess('Contract details saved.');
  }

  function handleDeleteContract(index) {
    var list = contracts.filter(function (c, i) { return i !== index; });
    localStorage.setItem('kushslaks_contracts', JSON.stringify(list));
    setContracts(list);
  }

  function handleCreateTask(e) {
    e.preventDefault();
    setTaskError('');
    setTaskSuccess('');

    var form = e.currentTarget;
    var data = new FormData(form);
    var title = (data.get('title') || '').trim();
    var details = (data.get('details') || '').trim();
    var client = (data.get('client') || '').trim();
    var dueDate = (data.get('dueDate') || '').trim();
    var priority = (data.get('priority') || 'Medium').trim();

    if (!title || !client || !dueDate) {
      setTaskError('Please enter a task title, assign a client and set a due date.');
      return;
    }

    var list = readTasks();
    list.push({ id: Date.now(), title: title, details: details, client: client, dueDate: dueDate, priority: priority, status: 'Pending', completedAt: '' });
    writeTasks(list);
    form.reset();
    setTaskSuccess('Task added. The client can now see it on their dashboard.');
  }

  function handleToggleTask(id) {
    var list = readTasks();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        if (list[i].status === 'Completed') {
          list[i].status = 'Pending';
          list[i].completedAt = '';
        } else {
          list[i].status = 'Completed';
          list[i].completedAt = dateKey(new Date());
        }
      }
    }
    writeTasks(list);
  }

  function handleDeleteTask(id) {
    var list = readTasks().filter(function (t) { return t.id !== id; });
    writeTasks(list);
  }

  function clientName(email) {
    for (var i = 0; i < clients.length; i++) {
      if (clients[i].email === email) {
        return clients[i].name;
      }
    }
    return email;
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

  function handleLogout() {
    localStorage.removeItem('kushslaks_admin');
    setSession(null);
  }

  function formatValue(value) {
    var num = Number(value);
    if (isNaN(num)) {
      return '₹' + value;
    }
    return '₹' + num.toLocaleString('en-IN');
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

  if (!checked) {
    return null;
  }

  if (!session) {
    return (
      <div className="pt-20">
        <section className="relative py-24 overflow-hidden bg-slate-50 min-h-[70vh] flex items-center">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-200">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Sign In</h1>
                  <p className="text-sm text-slate-500 font-medium">Sign in to the Kushslaks admin panel</p>
                </div>

                <form className="space-y-6" onSubmit={handleAuth}>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="email" name="email" placeholder="admin@example.com" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
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

                  {authError && <p className="text-sm font-bold text-red-500 text-center">{authError}</p>}

                  <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                    Sign In
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 mt-8">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  Private administrator area
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  var activeContracts = contracts.filter(function (c) { return c.status === 'In Progress'; });

  return (
    <div className="pt-20">
      <section className="relative py-16 overflow-hidden bg-slate-50 min-h-[70vh]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                <ShieldCheck className="w-4 h-4" />
                Admin Panel
              </div>
              <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
              <p className="text-sm text-slate-500 font-medium mt-1">Signed in as {session.name} ({session.email})</p>
            </div>
            <button type="button" onClick={handleLogout} className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:border-red-300 hover:text-red-500 transition-all">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">{clients.length}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Registered Clients</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">{contracts.length}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Contracts</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">{activeContracts.length}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Contracts</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <button type="button" onClick={() => setTab('contracts')} className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${tab === 'contracts' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
              Contracts ({contracts.length})
            </button>
            <button type="button" onClick={() => setTab('clients')} className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${tab === 'clients' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
              Client Logins ({clients.length})
            </button>
            <button type="button" onClick={() => setTab('tasks')} className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${tab === 'tasks' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
              Tasks ({tasks.length})
            </button>
            <button type="button" onClick={() => setTab('messages')} className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${tab === 'messages' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
              Messages ({messages.length})
            </button>
          </div>

          {tab === 'tasks' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <ListTodo className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Add Task</h2>
                    <p className="text-xs text-slate-500 font-medium">Assign a todo to a client</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={handleCreateTask}>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Task Title</label>
                    <div className="relative">
                      <ListTodo className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="text" name="title" placeholder="e.g. Site inspection" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Assign To Client</label>
                    <div className="relative">
                      <Users className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="text" name="client" list="task-clients" placeholder="Registered client" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                    <datalist id="task-clients">
                      {clients.map(function (c, i) { return <option key={i} value={c.email}>{c.name}</option>; })}
                    </datalist>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Due Date</label>
                      <input type="date" name="dueDate" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Priority</label>
                      <select name="priority" defaultValue="Medium" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all appearance-none">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Details</label>
                    <textarea name="details" rows="3" placeholder="Optional notes for the client" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all resize-none"></textarea>
                  </div>

                  {taskError && <p className="text-sm font-bold text-red-500">{taskError}</p>}
                  {taskSuccess && <p className="text-sm font-bold text-green-600">{taskSuccess}</p>}

                  <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                    <Plus className="w-5 h-5" />
                    Add Task
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <TaskCalendar tasks={tasks} selectedDate={taskDate} onSelectDate={setTaskDate} />

                <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between p-8 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <ListTodo className="w-5 h-5 text-blue-600" />
                      <h2 className="text-lg font-bold text-slate-900">
                        {taskDate ? 'Tasks on ' + taskDate : 'All Tasks'}
                      </h2>
                    </div>
                    {taskDate && (
                      <button type="button" onClick={() => setTaskDate('')} className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:text-blue-700">
                        Clear
                      </button>
                    )}
                  </div>

                  {tasks.filter(function (t) { return !taskDate || t.dueDate === taskDate; }).length === 0 ? (
                    <p className="p-10 text-center text-sm font-medium text-slate-500">No tasks yet. Add a task to assign it to a client.</p>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {tasks.filter(function (t) { return !taskDate || t.dueDate === taskDate; }).map(function (t) {
                        var done = t.status === 'Completed';
                        return (
                          <div key={t.id} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
                            <button type="button" onClick={() => handleToggleTask(t.id)} className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border transition-all ${done ? 'bg-green-50 text-green-600 border-green-100' : 'bg-slate-50 text-slate-400 border-slate-100 hover:text-blue-600'}`}>
                              <Check className="w-6 h-6" />
                            </button>
                            <div className="flex-grow min-w-0">
                              <div className="flex flex-wrap items-center gap-3 mb-1">
                                <h3 className={`font-bold ${done ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{t.title}</h3>
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${priorityClasses(t.priority)}`}>{t.priority}</span>
                              </div>
                              {t.details && <p className="text-sm text-slate-500 font-medium mb-1">{t.details}</p>}
                              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                <span className="text-blue-600">{clientName(t.client)}</span>
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{t.dueDate}</span>
                                <span>{done ? 'Done ' + t.completedAt : 'Pending'}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <button type="button" onClick={() => handleDeleteTask(t.id)} title="Delete task" className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-red-500 hover:border-red-200 transition-all">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {tab === 'clients' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <UserPlus className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Create Client Login</h2>
                    <p className="text-xs text-slate-500 font-medium">Issue credentials to a client</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={handleCreate}>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <div className="relative">
                      <Users className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="text" name="name" placeholder="Client name" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Client Email / Login ID</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="email" name="email" placeholder="client@example.com" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="tel" name="phone" placeholder="+91 9010529521" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Set a password" className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors">
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {error && <p className="text-sm font-bold text-red-500">{error}</p>}
                  {success && <p className="text-sm font-bold text-green-600">{success}</p>}

                  <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                    <KeyRound className="w-5 h-5" />
                    Create Client Login
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between p-8 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <h2 className="text-lg font-bold text-slate-900">Client Logins</h2>
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{clients.length} total</span>
                  </div>

                  {clients.length === 0 ? (
                    <p className="p-10 text-center text-sm font-medium text-slate-500">No client logins yet. Create one using the form.</p>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {clients.map((c, i) => (
                        <div key={i} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center flex-shrink-0">
                            {c.name ? c.name.charAt(0).toUpperCase() : 'C'}
                          </div>
                          <div className="flex-grow min-w-0">
                            <h3 className="font-bold text-slate-900">{c.name}</h3>
                            <p className="text-sm text-slate-500 font-medium truncate">{c.email} • {c.phone}</p>
                            <p className="text-xs text-slate-400 font-medium mt-1">Password: {showPassword ? c.password : '••••••••'}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button type="button" onClick={() => handleCopy(c)} title="Copy credentials" className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-50 border border-slate-100 font-bold text-xs text-slate-700 hover:bg-slate-100 transition-all">
                              {copied === c.email ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                              {copied === c.email ? 'Copied' : 'Copy'}
                            </button>
                            <button type="button" onClick={() => handleWhatsApp(c)} title="Send on WhatsApp" className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-green-50 border border-green-100 font-bold text-xs text-green-700 hover:bg-green-100 transition-all">
                              <Send className="w-4 h-4" />
                              Send
                            </button>
                            <button type="button" onClick={() => handleDelete(c.email)} title="Delete client" className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-red-500 hover:border-red-200 transition-all">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {tab === 'contracts' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Add Contract</h2>
                    <p className="text-xs text-slate-500 font-medium">Enter the construction contract details</p>
                  </div>
                </div>

                <form className="space-y-5" onSubmit={handleCreateContract}>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Client Name</label>
                    <div className="relative">
                      <Users className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="text" name="client" list="dashboard-clients" placeholder="Registered client" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                    <datalist id="dashboard-clients">
                      {clients.map(function (c, i) { return <option key={i} value={c.name} />; })}
                    </datalist>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Project Title</label>
                    <div className="relative">
                      <FileText className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="text" name="title" placeholder="e.g. Skyline Corporate Tower" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Project Type</label>
                    <div className="relative">
                      <Layers className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <select name="type" defaultValue="" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all appearance-none">
                        <option value="" disabled>Select type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Institutional">Institutional</option>
                        <option value="Modular">Modular</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Contract Value (₹)</label>
                      <input type="number" name="value" min="0" placeholder="0" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Status</label>
                      <select name="status" defaultValue="Pending" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all appearance-none">
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                    <div className="relative">
                      <MapPin className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="text" name="location" placeholder="e.g. Hyderabad" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Start Date</label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="date" name="startDate" className="w-full pl-12 pr-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all" />
                    </div>
                  </div>

                  {contractError && <p className="text-sm font-bold text-red-500">{contractError}</p>}
                  {contractSuccess && <p className="text-sm font-bold text-green-600">{contractSuccess}</p>}

                  <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] transition-all">
                    <Plus className="w-5 h-5" />
                    Save Contract
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between p-8 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <h2 className="text-lg font-bold text-slate-900">Contracts</h2>
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{contracts.length} total</span>
                  </div>

                  {contracts.length === 0 ? (
                    <div className="p-12 text-center">
                      <p className="text-5xl font-bold text-slate-200 mb-2">0</p>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Contracts</p>
                      <p className="text-sm font-medium text-slate-500">No contracts yet. Fill in the contract details to see them here.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {contracts.map((c, i) => (
                        <div key={i} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                              <h3 className="font-bold text-slate-900">{c.title}</h3>
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${statusClasses(c.status)}`}>{c.status}</span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium">Client: {c.client} • {c.type}</p>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                              <span className="text-blue-600">{formatValue(c.value)}</span>
                              {c.location && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{c.location}</span>}
                              {c.startDate && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{c.startDate}</span>}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button type="button" onClick={() => handleDeleteContract(i)} title="Delete contract" className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-red-500 hover:border-red-200 transition-all">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {tab === 'messages' && (
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between p-8 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-bold text-slate-900">Messages</h2>
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{messages.length} total</span>
              </div>

              {messages.length === 0 ? (
                <p className="p-10 text-center text-sm font-medium text-slate-500">No messages yet. Enquiries and consultation bookings from the site will appear here.</p>
              ) : (
                <div className="divide-y divide-slate-100">
                  {messages.map(function (m) {
                    return (
                      <div key={m.id} className="p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border bg-blue-50 text-blue-600 border-blue-100">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="font-bold text-slate-900">{m.name || 'Unnamed'}</h3>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-slate-50 text-slate-600 border-slate-200">{m.type || 'Message'}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-amber-50 text-amber-700 border-amber-100">{m.service || 'General'}</span>
                          </div>
                          {m.notes && <p className="text-sm text-slate-500 font-medium mb-1">{m.notes}</p>}
                          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                            <span className="text-blue-600">{m.phone || '-'}</span>
                            <span className="normal-case">{m.email || '-'}</span>
                            {m.date && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{m.date}</span>}
                            {m.time && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{m.time}</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <button type="button" onClick={() => handleDeleteMessage(m.id)} title="Delete message" className="p-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-red-500 hover:border-red-200 transition-all">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
