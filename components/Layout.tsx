import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp, Mail } from 'lucide-react';
import Logo from './ui/Logo';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Utility', path: '/utility' },
  { name: 'Collection', path: '/collection' },
  { name: 'Lore', path: '/lore' },
  { name: 'DigiBeatz', path: '/digibeatz' },
  { name: 'Partnerships', path: '/partnerships' },
  { name: 'Learn', path: '/learn' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-500 ${
        isScrolled || isOpen 
          ? 'py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
          : 'pt-6 pb-0 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between relative">
        
        {/* Logo & Brand */}
        <Link to="/" className="inline-flex items-center gap-3.5 group relative z-20">
          <Logo size={56} />
          <div className="flex flex-col justify-center">
            <span className="text-xl font-heading font-black tracking-tighter text-white leading-none group-hover:text-blue-400 transition-colors uppercase">
              BCCS
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Right Aligned */}
        <nav className="hidden md:flex items-center p-1.5 rounded-full border border-white/10 bg-zinc-900/40 backdrop-blur-3xl shadow-2xl ring-1 ring-white/5 z-20">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-full hover:bg-white/5 ${
                    location.pathname === item.path 
                      ? 'text-white bg-blue-600/20 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)] border border-blue-500/20' 
                      : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 relative z-20">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-zinc-900/95 border border-white/10 rounded-3xl p-6 backdrop-blur-2xl animate-fade-in-up shadow-2xl z-10">
          <div className="flex flex-col space-y-2">
             {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className={`text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-2xl transition-all ${
                  location.pathname === item.path 
                    ? 'bg-blue-600/20 text-white border border-blue-500/20' 
                    : 'text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-zinc-400 hover:text-white hover:border-blue-500/50 transition-all duration-500 shadow-2xl group ${
        showButton ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <ArrowUp size={20} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};

const DiscordIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg fill="currentColor" viewBox="0 0 127.14 96.36" className={className}>
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.4,80.21a105.73,105.73,0,0,0,32.17,16.15,77.7,77.7,0,0,0,6.89-11.11,68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c.43-23.61-4.1-47.57-20.72-72.14ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-zinc-950/80 backdrop-blur-xl pt-10 pb-6 mt-auto">
      {/* Subtle Glows */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="lg:col-span-2 md:pr-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-3 group">
               <Logo size={48} />
               <div className="flex flex-col">
                 <span className="font-heading text-lg font-black tracking-tight text-white leading-none uppercase">BCCS</span>
                 <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">Working Class Web3</span>
               </div>
            </Link>
            <p className="text-zinc-500 text-[11px] font-light leading-relaxed mb-4 tracking-tight max-w-sm">
              Community-first platform for tradespeople and working-class creators. Built by workers, owned by community.
            </p>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-all w-fit">
              <Mail size={12} className="text-blue-400" />
              <a href="mailto:bccsonsol@gmail.com" className="text-[10px] font-bold tracking-tight">bccsonsol@gmail.com</a>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="text-white font-black mb-4 uppercase text-[9px] tracking-[0.2em]">Ecosystem</h4>
            <ul className="space-y-2 text-[11px] text-zinc-500 font-bold tracking-tight">
              <li><Link to="/collection" className="hover:text-blue-400 transition-colors">Collection</Link></li>
              <li><Link to="/utility" className="hover:text-blue-400 transition-colors">Utility</Link></li>
              <li><Link to="/digibeatz" className="hover:text-blue-400 transition-colors">DigiBeatz</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-black mb-4 uppercase text-[9px] tracking-[0.2em]">Resources</h4>
            <ul className="space-y-2 text-[11px] text-zinc-500 font-bold tracking-tight">
              <li><Link to="/learn" className="hover:text-orange-400 transition-colors">Learn Web3</Link></li>
              <li><Link to="/lore" className="hover:text-orange-400 transition-colors">Lore</Link></li>
              <li><Link to="/partnerships" className="hover:text-orange-400 transition-colors">Partnerships</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black mb-4 uppercase text-[9px] tracking-[0.2em]">Connect</h4>
            <div className="flex gap-2">
              <a href="https://x.com/bccsonsol" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 border border-white/5 transition-all" aria-label="X Profile">
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://discord.gg/4QjxAQKAWw" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/30 border border-white/5 transition-all" aria-label="Discord Invite">
                <DiscordIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">© {new Date().getFullYear()} Blue Collar Crypto Society</div>
          <div className="flex gap-4 text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
            {/* <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main 
        key={location.pathname}
        className={`flex-grow pt-24 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}
      >
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;