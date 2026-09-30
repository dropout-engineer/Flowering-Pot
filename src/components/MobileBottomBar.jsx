import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NURSERY_INFO, getWhatsAppUrl, getCallUrl } from '../data/nurseryInfo';
import { MessageCircle, Phone, Sprout, MapPin } from 'lucide-react';

export const MobileBottomBar = () => {
  const { navigate, route } = useNavigation();

  return (
    <>
      {/* Desktop Floating WhatsApp Button (hidden on mobile, bottom bar takes over) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/30 group border-2 border-white/20"
          title="Chat with Nikhil Kanojiya on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="font-semibold text-sm">WhatsApp Nursery</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-lg border-t border-[#DFD6C7] px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-1.5 items-center">
          
          {/* WhatsApp CTA (takes prominent double-width style or central focus) */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#1EBE5D] text-white py-2.5 px-3 rounded-2xl font-semibold text-xs shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span className="truncate">WhatsApp Us</span>
          </a>

          {/* Call button */}
          <a
            href={getCallUrl()}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#2D5A27] bg-[#EFE9DF] active:bg-[#DFD6C7] transition-colors"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-medium">Call Us</span>
          </a>

          {/* Browse Plants or Map */}
          <button
            onClick={() => navigate(route.page === 'catalog' ? 'contact' : 'catalog')}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#2D5A27] bg-[#EFE9DF] active:bg-[#DFD6C7] transition-colors"
          >
            {route.page === 'catalog' ? (
              <>
                <MapPin className="w-4 h-4 mb-0.5" />
                <span className="text-[10px] font-medium">Visit</span>
              </>
            ) : (
              <>
                <Sprout className="w-4 h-4 mb-0.5" />
                <span className="text-[10px] font-medium">Plants</span>
              </>
            )}
          </button>

        </div>
      </div>
    </>
  );
};
