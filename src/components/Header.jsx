import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, User, Home as HomeIcon, Menu, X, ArrowRight, Building2, Factory, Construction, School, Package, Building } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Residential', icon: <HomeIcon className="w-4 h-4" />, href: '/services/residential' },
    { name: 'Commercial', icon: <Building2 className="w-4 h-4" />, href: '/services/commercial' },
    { name: 'Industrial', icon: <Factory className="w-4 h-4" />, href: '/services/industrial' },
    { name: 'Infrastructure & Civil Engineering', icon: <Construction className="w-4 h-4" />, href: '/services/infrastructure' },
    { name: 'Institutional', icon: <School className="w-4 h-4" />, href: '/services/institutional' },
    { name: 'Modular & Prefabricated', icon: <Package className="w-4 h-4" />, href: '/services/modular' },
  ];

  const userActions = [
    { name: 'Client Login', icon: <Building className="w-4 h-4" />, href: '/client-login' },
  ];

  // Content-aware search index: each entry carries keywords/synonyms so a
  // visitor can search "bridge", "house", "duplex", "building" etc.
  const searchIndex = [
    { name: 'Home', type: 'Page', href: '/', keywords: ['home', 'main', 'start'] },
    { name: 'Our Services', type: 'Page', href: '/services', keywords: ['services', 'offerings', 'what we do'] },
    { name: 'About Us', type: 'Page', href: '/about', keywords: ['about', 'company', 'team', 'who we are', 'story'] },
    { name: 'Contact Us', type: 'Page', href: '/contact', keywords: ['contact', 'enquiry', 'phone', 'email', 'address', 'location', 'reach us'] },
    { name: 'Reviews', type: 'Page', href: '/reviews', keywords: ['reviews', 'testimonials', 'feedback', 'clients', 'ratings'] },
    { name: 'Projects / Portfolio', type: 'Page', href: '/portfolio', keywords: ['projects', 'portfolio', 'showcase', 'our work', 'completed'] },
    { name: 'Get a Free Quote', type: 'Page', href: '/quote', keywords: ['quote', 'estimate', 'price', 'cost', 'budget', 'pricing'] },
    { name: 'Book a Consultation', type: 'Page', href: '/consultation', keywords: ['consultation', 'book', 'appointment', 'schedule', 'meeting', 'slot'] },
    { name: 'Client Login', type: 'Page', href: '/client-login', keywords: ['login', 'client', 'account', 'sign in'] },

    { name: 'Residential Construction', type: 'Service', href: '/services/residential', keywords: ['house', 'home', 'villa', 'duplex', 'apartment', 'flat', 'row house', 'bungalow', 'independent house', 'residence', 'interior', 'smart home', 'dream home', 'family'] },
    { name: 'Commercial Construction', type: 'Service', href: '/services/commercial', keywords: ['building', 'office', 'tower', 'mall', 'retail', 'commercial', 'corporate', 'showroom', 'business park', 'skyline', 'workplace'] },
    { name: 'Industrial Construction', type: 'Service', href: '/services/industrial', keywords: ['factory', 'plant', 'warehouse', 'industrial', 'manufacturing', 'godown', 'shed', 'production'] },
    { name: 'Infrastructure & Civil Engineering', type: 'Service', href: '/services/infrastructure', keywords: ['bridge', 'flyover', 'road', 'highway', 'water', 'dam', 'metro', 'infrastructure', 'civil', 'expressway', 'water treatment', 'utility', 'urban development'] },
    { name: 'Institutional Construction', type: 'Service', href: '/services/institutional', keywords: ['school', 'college', 'university', 'hospital', 'campus', 'institutional', 'education', 'auditorium', 'institute'] },
    { name: 'Modular & Prefabricated', type: 'Service', href: '/services/modular', keywords: ['modular', 'prefab', 'prefabricated', 'portable', 'container', 'tech park', 'prefab office'] },

    { name: 'Skyline Corporate Tower', type: 'Project', href: '/services/commercial', keywords: ['building', 'tower', 'commercial', 'office', 'corporate', 'hyderabad'] },
    { name: 'Emerald Residences', type: 'Project', href: '/services/residential', keywords: ['house', 'home', 'apartment', 'residential', 'duplex', 'units', 'bengaluru'] },
    { name: 'Serene Villas', type: 'Project', href: '/services/residential', keywords: ['house', 'home', 'villa', 'duplex', 'residential', 'goa'] },
    { name: 'Bharat Manufacturing Plant', type: 'Project', href: '/services/industrial', keywords: ['factory', 'plant', 'industrial', 'manufacturing', 'pune'] },
    { name: 'GreenField Warehouse', type: 'Project', href: '/services/industrial', keywords: ['warehouse', 'industrial', 'godown', 'storage', 'nagpur'] },
    { name: 'Riverfront Flyover', type: 'Project', href: '/services/infrastructure', keywords: ['bridge', 'flyover', 'road', 'infrastructure', 'chennai'] },
    { name: 'Modern Bridge – Pune', type: 'Project', href: '/services/infrastructure', keywords: ['bridge', 'flyover', 'infrastructure', 'engineering', 'pune'] },
    { name: 'Central Expressway – Telangana', type: 'Project', href: '/services/infrastructure', keywords: ['road', 'highway', 'expressway', 'infrastructure', 'telangana'] },
    { name: 'Crescent University Campus', type: 'Project', href: '/services/institutional', keywords: ['university', 'campus', 'college', 'school', 'institutional', 'education', 'hyderabad'] },
    { name: 'Modular Tech Park Office', type: 'Project', href: '/services/modular', keywords: ['modular', 'prefab', 'office', 'tech park', 'building', 'bengaluru'] },
  ];

  const searchResults = (() => {
    var q = searchTerm.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter(function (item) {
      if (item.name.toLowerCase().indexOf(q) !== -1) return true;
      return (item.keywords || []).some(function (k) {
        return k.toLowerCase().indexOf(q) !== -1 || q.indexOf(k.toLowerCase()) !== -1;
      });
    });
  })();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(searchResults[0].href);
    } else {
      navigate('/services');
    }
    setSearchTerm('');
    setSearchOpen(false);
  };

  const handleSelectResult = (href) => {
    navigate(href);
    setSearchTerm('');
    setSearchOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fffdf8]/92 backdrop-blur-xl shadow-[0_18px_50px_-28px_rgba(18,33,58,0.55)] border-b border-[#c6a15b]/30'
          : 'bg-[#fffdf8]/70 backdrop-blur-lg border-b border-[#c6a15b]/10'
      }`}
    >
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#000000] border border-[#c6a15b]/50 flex items-center justify-center text-[#e8d9b5] font-bold text-xl font-display shadow-lg shadow-[#000000]/30 group-hover:scale-110 group-hover:border-[#c6a15b] transition-all duration-500">
              K
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-[#000000] tracking-tight leading-none font-display">Kubslaks</span>
              <span className="text-[9px] text-[#a9853f] font-semibold tracking-[0.22em] uppercase mt-1">Build Today • Shape Tomorrow</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link to="/" className="relative text-[#000000]! hover:text-[#c6a15b]! font-medium transition-colors flex items-center gap-1.5 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#c6a15b] hover:after:w-full after:transition-all after:duration-500">
              <HomeIcon className="w-4 h-4" />
              Home
            </Link>
            
            <div className="relative">
              <Link 
                to="/services"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="relative text-[#000000]! hover:text-[#c6a15b]! font-medium transition-colors flex items-center gap-1.5 py-2 after:content-[''] after:absolute after:bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#c6a15b] hover:after:w-full after:transition-all after:duration-500"
              >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Services Dropdown */}
              <div 
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="bg-[#fffdf8] rounded-2xl shadow-2xl shadow-[#000000]/20 border border-[#e4dac7] overflow-hidden p-2">
                  <div className="px-3 py-2 text-[10px] font-bold text-[#000000] uppercase tracking-[0.25em] border-b border-[#efe6d4] mb-1">Services</div>
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.href || "/services"}
                      className="flex items-center gap-3 px-4 py-3 text-[#000000]! hover:text-[#c6a15b]! hover:bg-[#efe6d4]/70 rounded-xl transition-all duration-200 group"
                    >
                      <div className="text-[#000000] group-hover:text-[#c6a15b] group-hover:scale-110 transition-all">
                        {service.icon}
                      </div>
                      <span className="text-sm font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative group">
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#efe6d4] text-[#a9853f] group-focus-within:bg-[#000000] group-focus-within:text-[#c6a15b] hover:bg-[#000000] hover:text-[#c6a15b] transition-all z-10"
              >
                <Search className="w-4 h-4" />
              </button>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setSearchOpen(true); }}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
                className="bg-[#efe6d4]/60 border border-[#e4dac7] rounded-full pl-6 pr-12 py-2 text-sm w-64 text-[#000000] focus:w-80 focus:outline-none focus:ring-2 focus:ring-[#c6a15b]/40 focus:bg-[#fffdf8] transition-all duration-500"
              />
              {searchOpen && searchTerm.trim() && (
                <div className="absolute top-full right-0 mt-2 w-80 max-h-80 overflow-y-auto rounded-2xl bg-[#fffdf8] border border-[#e4dac7] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)] z-50 py-2">
                  {searchResults.length > 0 ? (
                    searchResults.map(function (item, i) {
                      return (
                        <button
                          key={i}
                          type="button"
                          onMouseDown={() => handleSelectResult(item.href)}
                          className="w-full flex items-center justify-between gap-3 px-5 py-3 text-left text-sm font-medium text-[#000000] hover:bg-[#efe6d4] hover:text-[#a9853f] transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <Search className="w-4 h-4 text-[#a9853f] shrink-0" />
                            {item.name}
                          </span>
                          <span className="shrink-0 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#efe6d4] text-[#a9853f] border border-[#e4dac7]">
                            {item.type}
                          </span>
                        </button>
                      );
                    })
                  ) : (
                    <p className="px-5 py-3 text-sm text-[#a9853f]">No matches found for "{searchTerm}". Try "house", "bridge" or "building".</p>
                  )}
                </div>
              )}
            </form>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setIsUserOpen(!isUserOpen)}
                className="bubble-hover flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#c6a15b] text-[#000000] font-semibold text-sm ring-1 ring-[#a9853f]/50 hover:bg-[#a9853f] hover:text-[#fffdf8] hover:ring-[#c6a15b] transition-all duration-300 shadow-xl shadow-[#c6a15b]/40 group"
              >
                <User className="w-4 h-4 text-[#000000] group-hover:text-[#fffdf8] transition-colors" />
                Sign Up
                <ChevronDown className={`w-4 h-4 ml-1 text-[#000000] group-hover:text-[#fffdf8] transition-all duration-300 ${isUserOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* User Dropdown */}
              <div className={`absolute top-full right-0 w-52 pt-2 transition-all duration-300 ${
                isUserOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="bg-[#fffdf8] rounded-2xl shadow-2xl shadow-[#000000]/20 border border-[#e4dac7] overflow-hidden p-2">
                  {userActions.map((action, index) => (
                    <Link 
                      key={index}
                      to={action.href} 
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#c6a15b]! hover:text-[#a9853f]! hover:bg-[#efe6d4]/70 rounded-xl transition-all group"
                    >
                      <div className="text-[#c6a15b] group-hover:text-[#a9853f] transition-colors">
                        {action.icon}
                      </div>
                      {action.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/" title="Home" className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full border border-[#c6a15b]/60 text-[#c6a15b]! hover:bg-[#c6a15b] hover:border-[#c6a15b] hover:text-[#fffdf8]! transition-all duration-300">
              <HomeIcon className="w-5 h-5" />
            </Link>
            
            <button className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#c6a15b] text-[#000000]">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
