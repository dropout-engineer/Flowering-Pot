import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { getWhatsAppUrl } from '../data/nurseryInfo';
import { MessageCircle, Eye, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const PlantCard = ({ plant }) => {
  const { navigate } = useNavigation();
  const isAvailable = plant.availability === 'Available';
  
  // Format currency in Indian Rupees
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(plant.price);

  const mainImage = plant.images && plant.images.length > 0 
    ? plant.images[0] 
    : 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80';

  const handleCardClick = () => {
    navigate('plant', { id: plant.id });
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#E8E1D5] hover:border-[#A7CEA5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative">
      
      {/* Plant Image Container */}
      <div 
        onClick={handleCardClick}
        className="relative w-full aspect-4/3 sm:aspect-square overflow-hidden bg-[#F3EFEA] cursor-pointer"
      >
        <img
          src={mainImage}
          alt={plant.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#FAF7F2]/90 backdrop-blur-md text-[#2D5A27] text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-[#E3DCD2]">
            {plant.category}
          </span>
        </div>

        {/* Availability Badge */}
        <div className="absolute top-3 right-3 z-10">
          {isAvailable ? (
            <span className="inline-flex items-center gap-1 bg-[#25D366]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.8 rounded-full shadow-sm">
              <CheckCircle2 className="w-3 h-3 fill-white text-[#25D366]" />
              In Stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 bg-[#852E2E]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.8 rounded-full shadow-sm">
              <AlertCircle className="w-3 h-3" />
              Unavailable
            </span>
          )}
        </div>

        {/* Quick View Hover Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#FAF7F2]/95 text-[#1E3A1F] text-xs font-semibold px-4 py-2 rounded-full shadow-lg border border-[#D5CABC] transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-[#2D5A27]" />
            View Plant Details
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col grow justify-between">
        <div>
          {/* Botanical subtitle */}
          {plant.botanicalName && (
            <p className="text-[11px] italic text-[#7C8879] mb-1 font-serif line-clamp-1">
              {plant.botanicalName}
            </p>
          )}

          {/* Plant Name */}
          <h3 
            onClick={handleCardClick}
            className="font-serif text-lg font-bold text-[#1E3A1F] group-hover:text-[#2D5A27] transition-colors cursor-pointer line-clamp-1 mb-1.5"
            title={plant.name}
          >
            {plant.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#5D6B5C] leading-relaxed line-clamp-2 mb-4">
            {plant.shortDescription || plant.description}
          </p>
        </div>

        {/* Price & Action Area */}
        <div className="pt-3 border-t border-[#F0EAE1] mt-auto">
          <div className="flex items-baseline justify-between mb-3.5">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#7A8A78] font-semibold block">
                Nursery Price
              </span>
              <span className="font-serif text-xl font-bold text-[#2D5A27]">
                {formattedPrice}
              </span>
            </div>

            <button
              onClick={handleCardClick}
              className="text-xs font-medium text-[#486345] hover:text-[#2D5A27] flex items-center gap-1 transition-colors"
            >
              <span>View Details</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* WhatsApp Primary Button */}
          {isAvailable ? (
            <a
              href={getWhatsAppUrl(plant.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-3 rounded-2xl font-medium text-xs shadow-sm hover:shadow transition-all duration-200"
              title={`WhatsApp enquiry for ${plant.name}`}
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp About This Plant</span>
            </a>
          ) : (
            <div className="w-full py-2.5 px-3 rounded-2xl bg-[#F0ECE5] text-[#8C867D] text-xs font-medium text-center border border-[#E0D9CE] flex items-center justify-center gap-1.5 cursor-not-allowed">
              <AlertCircle className="w-3.5 h-3.5 text-[#B85D5D]" />
              <span>Currently Unavailable</span>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
