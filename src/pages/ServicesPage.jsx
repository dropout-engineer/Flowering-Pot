import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NURSERY_SERVICES } from '../data/plants';
import { NURSERY_INFO, getWhatsAppUrl, getCallUrl } from '../data/nurseryInfo';
import { 
  Sprout, 
  MessageCircle, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  SunMedium, 
  Truck, 
  Flower2, 
  Scissors, 
  Trees, 
  HeartPulse, 
  Sparkles,
  MapPin
} from 'lucide-react';

export const ServicesPage = () => {
  const { navigate } = useNavigation();

  // Icon mapping
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className="w-6 h-6" />;
      case 'Flower2': return <Flower2 className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'SunMedium': return <SunMedium className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      case 'Trees': return <Trees className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      default: return <Sprout className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#4C7549] font-bold mb-2">
            <Sprout className="w-4 h-4 text-[#25D366]" />
            What We Do
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3419] tracking-tight">
            Nursery Services & Green Solutions
          </h1>
          <p className="text-sm sm:text-base text-[#556354] mt-2 leading-relaxed">
            From single potted plants to full residential balcony makeovers and routine maintenance across New Delhi. All services managed personally by <strong>{NURSERY_INFO.owner}</strong>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NURSERY_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-7 border border-[#E5DEC9] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#E8F3E7] text-[#2D5A27] flex items-center justify-center mb-5">
                  {getIcon(srv.icon)}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1E3A1F] mb-2">
                  {srv.title}
                </h3>

                <p className="text-xs font-semibold text-[#6C7C6B] mb-3">
                  {srv.shortDesc}
                </p>

                <p className="text-xs text-[#526051] leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              {/* Service Action */}
              <div className="pt-4 border-t border-[#F0EAE1] space-y-2">
                <a
                  href={getWhatsAppUrl(null, true, `Hi Nikhil, I am interested in your '${srv.title}' service. Could you please share more details?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={getCallUrl()}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs text-[#4C644A] hover:text-[#1E3A1F] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us: {NURSERY_INFO.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Balcony & Landscaping Highlight */}
        <div className="bg-[#244122] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A7CEA5] bg-[#1A3318] px-3 py-1 rounded-full">
                Featured Specialty
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Transform Your Apartment Balcony Into A Living Green Haven
              </h2>
              <p className="text-[#C8DBC6] text-sm leading-relaxed max-w-2xl">
                Living in an apartment in Delhi shouldn't stop you from having a vibrant garden. We customize plant selection depending on your balcony's sunlight (direct morning sun, shaded east-facing, or harsh afternoon exposure) to guarantee thriving growth without trial-and-error.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-[#E5F1E4]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Custom railing & wall planters</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E5F1E4]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>High-drainage lightweight soil mixes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E5F1E4]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Fragrant blooms (Mogra, Jasmine, Bougainvillea)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#E5F1E4]">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Doorstep delivery & on-site arrangement</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl(null, true, "Hi Nikhil, I would like to consult with you for my balcony gardening setup in Delhi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp For Balcony Consultation</span>
              </a>

              <a
                href={getCallUrl()}
                className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3.5 px-6 rounded-full font-medium text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {NURSERY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
