import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { NURSERY_INFO, getWhatsAppUrl, getCallUrl } from '../data/nurseryInfo';
import { NURSERY_GALLERY } from '../data/plants';
import { 
  Sprout, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles,
  Award,
  SunMedium,
  Users
} from 'lucide-react';

export const AboutPage = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#E9F3E8] border border-[#C5E0C3] text-[#2D5A27] px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Sprout className="w-3.5 h-3.5 text-[#25D366]" />
              <span>About {NURSERY_INFO.name} • Established in {NURSERY_INFO.establishedYear}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3419] tracking-tight leading-tight">
              Rooted In R.K. Puram, <br />
              <span className="text-[#2D5A27] italic font-normal">Growing Green Homes Across Delhi</span>
            </h1>

            <p className="text-sm sm:text-base text-[#556354] leading-relaxed">
              <strong>{NURSERY_INFO.name}</strong> was founded by <strong>{NURSERY_INFO.owner}</strong> with a simple, genuine mission: to supply robust, healthy, Delhi-acclimatized plants backed by honest botanical guidance.
            </p>

            <p className="text-sm sm:text-base text-[#556354] leading-relaxed">
              With <strong>{NURSERY_INFO.yearsExperience}</strong> of dedicated hands-on nursery experience in Sector 5, R.K. Puram, we treat every customer like a neighbour. When you choose a plant from us, you get continuous WhatsApp support to make sure it thrives in your space.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chat with Nikhil ({NURSERY_INFO.phone})</span>
              </a>

              <button
                onClick={() => navigate('catalog')}
                className="inline-flex items-center gap-2 bg-[#2D5A27] text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#20401C] transition-colors"
              >
                <span>Browse Our Plants</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/5 bg-[#E8E1D5]">
              <img
                src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=900&q=80"
                alt="Flowering Pot Nursery Greenhouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs bg-[#2D5A27] px-3 py-1 rounded-full font-semibold">
                  Nursery Founder
                </span>
                <h3 className="font-serif text-2xl font-bold mt-2">{NURSERY_INFO.owner}</h3>
                <p className="text-xs text-[#D8E6D7] mt-0.5">
                  Flowering Pot • Sector 5, R.K. Puram, New Delhi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nursery Story & Philosophy */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DEC9] shadow-xs">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
                The Journey
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1B3419] mt-1">
                Our Nursery Story
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4C5B4B] leading-relaxed">
              Every city dweller in Delhi dreams of having a green corner—a balcony bursting with fragrant Mogra, a sunny windowsill with low-maintenance succulents, or a living room made tranquil by split-leaf Monsteras.
            </p>

            <p className="text-sm sm:text-base text-[#4C5B4B] leading-relaxed">
              However, traditional online plant shopping frequently disappoints: plants arrive shaken, starved of light, potted in dry transport coco-peat, and often die within weeks.
            </p>

            <p className="text-sm sm:text-base text-[#4C5B4B] leading-relaxed">
              <strong>{NURSERY_INFO.name}</strong> was started to fix this. Located right here in <strong>{NURSERY_INFO.address}</strong>, we nurture our plants in natural sunlight and seasonal temperature swings. We blend our own organic soil with vermicompost and neem cake to ensure strong root development.
            </p>

            <div className="p-6 rounded-2xl bg-[#F6F2EA] border-l-4 border-[#2D5A27] mt-6">
              <h4 className="font-serif font-bold text-base text-[#1E3A1F] mb-1">
                "We don't sell plants like anonymous products. We share living companions."
              </h4>
              <p className="text-xs sm:text-sm text-[#5C6B5B] italic">
                Whether you are buying a single ₹180 money plant or designing a full rooftop garden, owner Nikhil personally ensures you get the right plant for your specific light and watering routine.
              </p>
            </div>
          </div>
        </div>

        {/* What the Nursery Specializes In */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
              Our Core Expertise
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1B3419] mt-1">
              What We Specialize In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DEC9] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F3E7] text-[#2D5A27] flex items-center justify-center mb-4">
                <SunMedium className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E3A1F] mb-2">
                Climate Acclimatization
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6959] leading-relaxed">
                Plants that withstand the dry 45°C summer heat and cold winter nights of Delhi without suffering shock.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DEC9] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F3E7] text-[#2D5A27] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E3A1F] mb-2">
                Balcony & Compact Spaces
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6959] leading-relaxed">
                Specialized in apartment setups—custom railing planters, vertical wall greens, and hardy container fruit trees.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5DEC9] shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F3E7] text-[#2D5A27] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E3A1F] mb-2">
                Lifelong WhatsApp Support
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6959] leading-relaxed">
                Got a yellow leaf or tiny pests? Send a photo on WhatsApp anytime. We diagnose the issue and guide your recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Why Customers Choose Flowering Pot */}
        <div className="bg-[#F4EFE7] rounded-3xl p-8 sm:p-12 border border-[#E4DDD0]">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
                The Local Difference
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1B3419] mt-1">
                Why Customers Choose Flowering Pot
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#E6DFD4]">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#1E3A1F]">No Middlemen or Markups</h4>
                  <p className="text-xs text-[#627361] mt-0.5">Fair, direct nursery pricing without e-commerce commissions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#E6DFD4]">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#1E3A1F]">See Before You Buy</h4>
                  <p className="text-xs text-[#627361] mt-0.5">Request a live WhatsApp photo or video clip of the exact plant.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#E6DFD4]">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#1E3A1F]">Dedicated Delhi Delivery</h4>
                  <p className="text-xs text-[#627361] mt-0.5">Handled carefully in upright position so soil and leaves stay intact.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#E6DFD4]">
                <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#1E3A1F]">Organic Soil Preparation</h4>
                  <p className="text-xs text-[#627361] mt-0.5">Potted in nutrient-rich organic manure, cocopeat, and vermicompost.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nursery Grounds Gallery */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
                Nursery Photographs
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3419] mt-1">
                Inside Our R.K. Puram Nursery
              </h2>
            </div>
            <a
              href={NURSERY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#2D5A27] hover:underline hidden sm:block"
            >
              See more on Instagram →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {NURSERY_GALLERY.map((item, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden aspect-4/3 bg-[#E8E1D5] shadow-xs relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
