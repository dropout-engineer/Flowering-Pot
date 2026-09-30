import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { usePlants } from '../context/PlantContext';
import { NURSERY_INFO, getWhatsAppUrl, getCallUrl } from '../data/nurseryInfo';
import { PlantCard } from '../components/PlantCard';
import { 
  ArrowLeft, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  SunMedium, 
  Droplets, 
  Ruler, 
  Sparkles, 
  Share2, 
  Check, 
  ShieldCheck, 
  MapPin, 
  ChevronRight,
  Sprout
} from 'lucide-react';

export const PlantDetailPage = ({ plantId }) => {
  const { navigate } = useNavigation();
  const { plants, getPlantById } = usePlants();

  const plant = getPlantById(plantId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Scroll to top on plant change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIndex(0);
  }, [plantId]);

  if (!plant) {
    return (
      <div className="bg-[#FAF7F2] min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center max-w-lg border border-[#E5DEC9] shadow-sm">
          <div className="w-14 h-14 rounded-full bg-[#F3EFEA] text-[#2D5A27] flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-7 h-7 text-[#C17743]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#1E3A1F] mb-2">Plant Not Found</h2>
          <p className="text-xs sm:text-sm text-[#617260] mb-6">
            The plant you're looking for may have been updated or moved. Check our current nursery stock or message Nikhil on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate('catalog')}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#2D5A27] text-white text-xs font-semibold hover:bg-[#20401C] transition-colors"
            >
              Back to Catalog
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Nursery</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const isAvailable = plant.availability === 'Available';

  // Format currency
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(plant.price);

  const images = Array.isArray(plant.images) && plant.images.length > 0 
    ? plant.images 
    : ['https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80'];

  const currentImage = images[activeImageIndex] || images[0];

  // Related plants from the same category
  const relatedPlants = plants
    .filter((p) => p.id !== plant.id && p.category === plant.category)
    .slice(0, 3);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${plant.name} - Flowering Pot Nursery`,
          text: `Check out ${plant.name} at Flowering Pot Nursery, R.K. Puram, New Delhi!`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback copy
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back button */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs text-[#6B7A6A] overflow-x-auto whitespace-nowrap">
            <button 
              onClick={() => navigate('home')} 
              className="hover:text-[#1E3A1F] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#9EACA0]" />
            <button 
              onClick={() => navigate('catalog')} 
              className="hover:text-[#1E3A1F] transition-colors"
            >
              Plants Catalog
            </button>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#9EACA0]" />
            <button 
              onClick={() => navigate('catalog', { category: plant.category })} 
              className="hover:text-[#1E3A1F] transition-colors"
            >
              {plant.category}
            </button>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#9EACA0]" />
            <span className="font-semibold text-[#1E3A1F] truncate max-w-[140px] sm:max-w-xs">
              {plant.name}
            </span>
          </div>

          <button
            onClick={() => navigate('catalog')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D5A27] bg-white px-3.5 py-1.5 rounded-full border border-[#DCD3C4] shadow-2xs hover:bg-[#F3EFEA] transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Plants</span>
          </button>
        </div>

        {/* Main Plant Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DEC9] shadow-sm">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Featured Photo */}
            <div className="rounded-3xl overflow-hidden aspect-square bg-[#F3EFEA] border border-[#EAE3D6] relative shadow-inner group">
              <img
                src={currentImage}
                alt={plant.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Category pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#FAF7F2]/90 backdrop-blur-md text-[#2D5A27] text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-[#E3DCD2]">
                  {plant.category}
                </span>
              </div>

              {/* Availability badge */}
              <div className="absolute top-4 right-4 z-10">
                {isAvailable ? (
                  <span className="inline-flex items-center gap-1.5 bg-[#25D366]/95 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                    Available at Nursery
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-[#9E2A2B]/95 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Currently Unavailable
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Carousel / List (if multiple photos) */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx 
                        ? 'border-[#2D5A27] scale-102 shadow-sm' 
                        : 'border-[#E2D9CB] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${plant.name} thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust highlights below image */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#F6F2EA] border border-[#EAE2D5] flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#2D5A27] shrink-0" />
                <span className="text-xs text-[#354334] font-medium leading-snug">
                  Grown in organic nutrient-rich soil mix
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#F6F2EA] border border-[#EAE2D5] flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#2D5A27] shrink-0" />
                <span className="text-xs text-[#354334] font-medium leading-snug">
                  Doorstep delivery across New Delhi
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Plant Details & Conversion Box */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              
              {/* Top subheader with botanical name & share */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  {plant.botanicalName && (
                    <p className="font-serif italic text-sm text-[#6C7B6B]">
                      {plant.botanicalName}
                    </p>
                  )}
                  <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1B3419] tracking-tight mt-0.5">
                    {plant.name}
                  </h1>
                </div>

                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#EFE9DF] text-[#4F604E] border border-[#DDD5C7] transition-colors shrink-0"
                  title="Share this plant"
                >
                  {copied ? <Check className="w-4 h-4 text-[#2D5A27]" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Price & Immediate WhatsApp Conversion Box (Near the price per prompt) */}
              <div className="my-6 p-5 sm:p-6 rounded-3xl bg-[#F3ECE0] border border-[#DFD5C4]">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6B796A] font-semibold block">
                      Nursery Price
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2D5A27]">
                      {formattedPrice}
                    </span>
                  </div>

                  <div>
                    {isAvailable ? (
                      <span className="text-xs font-semibold text-[#25D366] bg-white/80 px-3 py-1 rounded-full shadow-2xs">
                        ● Available in R.K. Puram
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-[#9E2A2B] bg-white/80 px-3 py-1 rounded-full shadow-2xs">
                        ● Currently Unavailable
                      </span>
                    )}
                  </div>
                </div>

                {/* Prominently display: "Interested in this plant?" + 9716574035 */}
                <div className="pt-3 border-t border-[#DECFC0] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base font-bold text-[#1E3A1F]">
                      Interested in this plant?
                    </span>
                    <span className="text-sm font-semibold text-[#2D5A27] bg-[#E5F1E4] px-3 py-0.5 rounded-full font-mono">
                      {NURSERY_INFO.phone}
                    </span>
                  </div>

                  {isAvailable ? (
                    <a
                      href={getWhatsAppUrl(plant.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-4 rounded-2xl font-bold text-sm shadow-md transition-all duration-200 hover:scale-[1.01]"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>WhatsApp About This Plant</span>
                    </a>
                  ) : (
                    <div className="w-full py-3.5 px-4 rounded-2xl bg-[#EBE5DB] text-[#787167] text-sm font-medium text-center border border-[#D5CABC] flex items-center justify-center gap-2 cursor-not-allowed">
                      <AlertCircle className="w-4 h-4 text-[#A84A4A]" />
                      <span>Currently Unavailable (Out of Stock)</span>
                    </div>
                  )}

                  <p className="text-[11px] text-[#6E7B6C] text-center">
                    {isAvailable 
                      ? `Clicking opens WhatsApp with: "Hi, I'm interested in the ${plant.name} listed on your website. Is it currently available?"`
                      : "This plant is temporarily out of stock. You may WhatsApp Nikhil to ask when the next batch arrives."}
                  </p>
                </div>
              </div>

              {/* Plant Description */}
              <div className="space-y-3 mb-8">
                <h3 className="font-serif text-lg font-bold text-[#1E3A1F]">
                  About This Plant
                </h3>
                <p className="text-sm text-[#4E5E4D] leading-relaxed">
                  {plant.description}
                </p>
              </div>

              {/* Botanical Care & Specifications Grid */}
              <div className="space-y-4 mb-8">
                <h3 className="font-serif text-lg font-bold text-[#1E3A1F] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2D5A27]" />
                  Care & Growth Requirements
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Size */}
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9E2D5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2D5A27] uppercase tracking-wider mb-1">
                      <Ruler className="w-4 h-4 text-[#2D5A27]" />
                      <span>Plant Size</span>
                    </div>
                    <p className="text-xs text-[#445543] leading-relaxed">
                      {plant.size || "12 to 18 inches in standard nursery pot"}
                    </p>
                  </div>

                  {/* Sunlight */}
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9E2D5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C17743] uppercase tracking-wider mb-1">
                      <SunMedium className="w-4 h-4 text-[#C17743]" />
                      <span>Sunlight Requirements</span>
                    </div>
                    <p className="text-xs text-[#445543] leading-relaxed">
                      {plant.sunlight || "Bright indirect sunlight"}
                    </p>
                  </div>

                  {/* Watering */}
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9E2D5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#3B728C] uppercase tracking-wider mb-1">
                      <Droplets className="w-4 h-4 text-[#3B728C]" />
                      <span>Watering Requirements</span>
                    </div>
                    <p className="text-xs text-[#445543] leading-relaxed">
                      {plant.watering || "Water when top 1-2 inches of soil feel dry"}
                    </p>
                  </div>

                  {/* Care Instructions */}
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E9E2D5]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2D5A27] uppercase tracking-wider mb-1">
                      <Sprout className="w-4 h-4 text-[#2D5A27]" />
                      <span>Care Instructions</span>
                    </div>
                    <p className="text-xs text-[#445543] leading-relaxed">
                      {plant.careInstructions || "Keep in well-draining soil and mist foliage occasionally"}
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Conversion Area per requirement */}
            <div className="pt-6 border-t border-[#EAE3D6] space-y-4">
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#DFD6C8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#556D53]">
                    Still deciding?
                  </div>
                  <div className="font-serif text-base font-bold text-[#1E3A1F]">
                    Interested in this plant? Call or WhatsApp {NURSERY_INFO.phone}
                  </div>
                  <div className="text-xs text-[#6F7D6E]">
                    Nikhil can share a video clip of the exact plant currently at the nursery!
                  </div>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  {isAvailable ? (
                    <a
                      href={getWhatsAppUrl(plant.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3 rounded-full text-xs font-bold shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp Us</span>
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-[#8C3A27] bg-[#F7EBE8] px-4 py-2.5 rounded-full border border-[#ECCDC6]">
                      Currently Unavailable
                    </span>
                  )}

                  <a
                    href={getCallUrl()}
                    className="inline-flex items-center justify-center gap-1.5 bg-white text-[#2D5A27] hover:bg-[#EAE2D5] px-4 py-3 rounded-full text-xs font-bold border border-[#D5CABC] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Related Plants Section */}
        {relatedPlants.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
                  More in {plant.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B3419] mt-0.5">
                  Similar Plants You Might Love
                </h3>
              </div>

              <button
                onClick={() => navigate('catalog', { category: plant.category })}
                className="text-xs font-semibold text-[#2D5A27] hover:underline"
              >
                View all in {plant.category}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPlants.map((relPlant) => (
                <PlantCard key={relPlant.id} plant={relPlant} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
