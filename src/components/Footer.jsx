import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NURSERY_INFO, getWhatsAppUrl, getCallUrl } from '../data/nurseryInfo';
import { 
  Sprout, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart,
  ArrowRight,
  ExternalLink,
  Lock
} from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Footer = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-[#1A2E19] text-[#E5EFE4] pt-16 pb-28 md:pb-16 border-t border-[#2A4328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight WhatsApp Banner */}
        <div className="bg-[#244122] rounded-3xl p-6 sm:p-8 mb-16 border border-[#355B32] shadow-xl relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#25D366]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A7CEA5] bg-[#1B3419] px-3 py-1 rounded-full mb-3">
                <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                Direct WhatsApp Garden Support
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Have questions about caring for your plants?
              </h3>
              <p className="text-[#C8DBC6] text-sm sm:text-base leading-relaxed">
                Connect directly with nursery founder <strong className="text-white">Nikhil Kanojiya</strong>. Send photos of your space, balcony, or struggling plants for honest, expert guidance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <a
                href={getWhatsAppUrl(null, true, "Hi Nikhil, I need advice on choosing plants for my space in Delhi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Nursery ({NURSERY_INFO.phone})</span>
              </a>

              <a
                href={getCallUrl()}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3.5 rounded-full transition-colors w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Col 1: Brand Info */}
          <div>
            <div 
              onClick={() => navigate('home')}
              className="flex items-center gap-3 cursor-pointer mb-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#2D5A27] text-white flex items-center justify-center border border-[#43743C]">
                <Sprout className="w-5 h-5 text-[#A7CEA5]" />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                {NURSERY_INFO.name}
              </span>
            </div>
            
            <p className="text-sm text-[#B3C8B1] leading-relaxed mb-5">
              Your neighborhood plant nursery in R.K. Puram, New Delhi. Bringing healthy, acclimatized indoor & outdoor greenery to Delhi homes with personal care.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#A7CEA5] bg-[#223921] px-3 py-2 rounded-xl border border-[#31512F] inline-flex">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              <span>{NURSERY_INFO.yearsExperience} of Local Nursery Experience</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs text-[#8AB888]">
              Explore Nursery
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => navigate('home')} 
                  className="hover:text-white transition-colors flex items-center gap-2 text-[#C4D7C2]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#5D8B5B]" />
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('catalog')} 
                  className="hover:text-white transition-colors flex items-center gap-2 text-[#C4D7C2]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#5D8B5B]" />
                  Plants Catalogue
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('catalog', { category: 'Indoor Plants' })} 
                  className="hover:text-white transition-colors flex items-center gap-2 text-[#C4D7C2]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#5D8B5B]" />
                  Indoor Air Purifiers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('catalog', { category: 'Flowering Plants' })} 
                  className="hover:text-white transition-colors flex items-center gap-2 text-[#C4D7C2]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#5D8B5B]" />
                  Flowering & Fragrant Plants
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('services')} 
                  className="hover:text-white transition-colors flex items-center gap-2 text-[#C4D7C2]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#5D8B5B]" />
                  Balcony Gardening & Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('about')} 
                  className="hover:text-white transition-colors flex items-center gap-2 text-[#C4D7C2]"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#5D8B5B]" />
                  Our Story & Founder
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Nursery Hours & Coverage */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs text-[#8AB888]">
              Visiting & Delivery
            </h4>
            <div className="space-y-3.5 text-sm text-[#C4D7C2]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#A7CEA5] mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium">Opening Hours</div>
                  <div className="text-xs text-[#A7CEA5]">{NURSERY_INFO.openingHours}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A7CEA5] mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium">Nursery Location</div>
                  <div className="text-xs text-[#B3C8B1]">{NURSERY_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sprout className="w-4 h-4 text-[#A7CEA5] mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium">Delivery Areas</div>
                  <div className="text-xs text-[#B3C8B1]">{NURSERY_INFO.deliveryAreas}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide uppercase text-xs text-[#8AB888]">
              Connect With Us
            </h4>
            
            <div className="space-y-3 text-sm mb-5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C4D7C2] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {NURSERY_INFO.phone}</span>
              </a>

              <a
                href={getCallUrl()}
                className="flex items-center gap-2 text-[#C4D7C2] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#A7CEA5]" />
                <span>Phone: {NURSERY_INFO.phone}</span>
              </a>

              <a
                href={NURSERY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#C4D7C2] hover:text-[#FF87B2] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#FF87B2]" />
                <span>Instagram Profile</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('admin')}
                className="inline-flex items-center gap-2 text-xs text-[#9BB399] hover:text-white bg-[#223921] hover:bg-[#2A4628] px-3 py-1.5 rounded-lg border border-[#31512F] transition-colors"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Owner Admin Portal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#263D25] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8BA488]">
          <div>
            © {new Date().getFullYear()} {NURSERY_INFO.name}. All rights reserved. Managed by {NURSERY_INFO.owner}.
          </div>
          <div className="flex items-center gap-1 text-[#A7CEA5]">
            <span>Grown with care in Delhi</span>
            <Heart className="w-3.5 h-3.5 text-[#D66853] fill-[#D66853]" />
            <span>• Direct WhatsApp Enquiries</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
