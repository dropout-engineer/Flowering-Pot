import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { usePlants } from '../context/PlantContext';
import { NURSERY_INFO, getWhatsAppUrl, getCallUrl } from '../data/nurseryInfo';
import { 
  Sprout, 
  MessageCircle, 
  Phone, 
  Menu, 
  X, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Sparkles,
  Lock
} from 'lucide-react';

export const Header = () => {
  const { route, navigate } = useNavigation();
  const { isAdminLoggedIn } = usePlants();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Plants Catalog', page: 'catalog' },
    { label: 'Services', page: 'services' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E3DCD2] transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#2D5A27] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#A7CEA5]" />
              {NURSERY_INFO.address}
            </span>
            <span className="hidden sm:inline-block text-[#8BB988]">|</span>
            <span className="hidden sm:flex items-center gap-1 text-[#E5F1E4]">
              <Clock className="w-3.5 h-3.5 text-[#A7CEA5]" />
              Open Daily: {NURSERY_INFO.openingHours}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={getCallUrl()} 
              className="hidden md:flex items-center gap-1 hover:text-[#C8E1C5] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {NURSERY_INFO.phone}</span>
            </a>
            <button
              onClick={() => handleNavClick('admin')}
              className="flex items-center gap-1 text-[11px] bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded transition-colors text-white"
              title="Nursery Owner Dashboard"
            >
              <Lock className="w-3 h-3 text-[#A7CEA5]" />
              <span>{isAdminLoggedIn ? 'Admin Active' : 'Owner Portal'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#2D5A27] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-[#A7CEA5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#1E3A1F]">
                  {NURSERY_INFO.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider bg-[#E5F1E4] text-[#2D5A27] font-semibold px-2 py-0.5 rounded-full">
                  Nursery
                </span>
              </div>
              <p className="text-xs text-[#6B7268] font-medium hidden sm:block">
                Sector 5, R.K. Puram • New Delhi
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F2ECE1] p-1.5 rounded-full border border-[#DFD6C7]">
            {navItems.map((item) => {
              const isActive = route.page === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#2D5A27] text-white shadow-sm'
                      : 'text-[#414E3F] hover:text-[#1E3A1F] hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-2.5 rounded-full font-medium text-sm shadow-sm hover:shadow transition-all group"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-2.5 rounded-full shadow-sm hover:bg-[#1EBE5D] transition-colors"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#2D5A27] bg-[#EBE4D8] hover:bg-[#DFD6C7] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E3DCD2] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5 mb-4">
            {navItems.map((item) => {
              const isActive = route.page === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium text-base transition-colors ${
                    isActive
                      ? 'bg-[#2D5A27] text-white'
                      : 'text-[#2D3A2C] hover:bg-[#EFE9DF]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4" />}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('admin')}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium text-base text-[#6B7268] hover:bg-[#EFE9DF] mt-1 border border-dashed border-[#D5CABC]"
            >
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Owner Admin Portal
              </span>
              <span className="text-xs bg-[#E5F1E4] text-[#2D5A27] px-2 py-0.5 rounded font-mono">
                {isAdminLoggedIn ? 'Logged In' : 'PIN 1234'}
              </span>
            </button>
          </nav>

          <div className="pt-2 border-t border-[#E3DCD2] flex flex-col gap-2.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] text-white py-3 rounded-xl font-medium shadow-sm hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Enquiry ({NURSERY_INFO.phone})</span>
            </a>

            <a
              href={getCallUrl()}
              className="flex items-center justify-center gap-2.5 w-full bg-[#E8E1D5] text-[#2D5A27] py-3 rounded-xl font-medium hover:bg-[#DFD6C7] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Nursery: {NURSERY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
