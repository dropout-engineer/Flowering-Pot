import React, { useState } from 'react';
import { NURSERY_INFO, getWhatsAppUrl, getCallUrl } from '../data/nurseryInfo';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle2, 
  Sprout, 
  Truck,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';

export const ContactPage = () => {
  const [formName, setFormName] = useState('');
  const [formInterest, setFormInterest] = useState('Indoor Plants');
  const [formMessage, setFormMessage] = useState('');

  const handleSendFormWhatsApp = (e) => {
    e.preventDefault();
    const query = `Hi Nikhil, my name is ${formName || 'Customer'}. I am interested in ${formInterest}. ${formMessage ? `Note: ${formMessage}` : ''}`;
    window.open(getWhatsAppUrl(null, true, query), '_blank');
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#4C7549] font-bold mb-2">
            <Sprout className="w-4 h-4 text-[#25D366]" />
            Get In Touch
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3419] tracking-tight">
            Contact Flowering Pot Nursery
          </h1>
          <p className="text-sm sm:text-base text-[#556354] mt-2 leading-relaxed">
            Have a question about plant care, availability, or balcony greening? We're right here in Sector 5, R.K. Puram, New Delhi. Reach out via WhatsApp or visit our nursery grounds.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: WhatsApp */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E6F8ED] text-[#25D366] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 fill-[#25D366]" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#3D7839]">
                Fastest Response
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1E3A1F] mt-1 mb-2">
                WhatsApp Us
              </h3>
              <p className="text-xs text-[#5E6D5D] leading-relaxed mb-4">
                Chat directly with founder Nikhil Kanojiya. Ask for photos of live plant stock, light advice, or place local delivery orders.
              </p>
              <div className="font-mono text-base font-bold text-[#2D5A27] mb-6">
                +91 {NURSERY_INFO.whatsappNumber}
              </div>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-4 rounded-xl font-bold text-xs shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Card 2: Phone Call */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F3E7] text-[#2D5A27] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#3D7839]">
                Direct Voice Call
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1E3A1F] mt-1 mb-2">
                Call Us
              </h3>
              <p className="text-xs text-[#5E6D5D] leading-relaxed mb-4">
                Available daily from 9:00 AM to 7:00 PM for nursery directions, bulk orders, and garden consultation visits.
              </p>
              <div className="font-mono text-base font-bold text-[#2D5A27] mb-6">
                +91 {NURSERY_INFO.phone}
              </div>
            </div>

            <a
              href={getCallUrl()}
              className="w-full flex items-center justify-center gap-2 bg-[#2D5A27] hover:bg-[#20401C] text-white py-3 px-4 rounded-xl font-bold text-xs shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Card 3: Nursery Location & Directions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6EEE5] text-[#C17743] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#985328]">
                Nursery Grounds
              </span>
              <h3 className="font-serif text-xl font-bold text-[#1E3A1F] mt-1 mb-2">
                Visit In Person
              </h3>
              <p className="text-xs text-[#5E6D5D] leading-relaxed mb-2">
                <strong>{NURSERY_INFO.fullAddress}</strong>
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#7A8878] mb-6">
                <Clock className="w-3.5 h-3.5 text-[#2D5A27]" />
                <span>{NURSERY_INFO.openingHours}</span>
              </div>
            </div>

            <a
              href={NURSERY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#FAF1E6] hover:bg-[#F2E5D5] text-[#93422A] py-3 px-4 rounded-xl font-bold text-xs border border-[#E2D2C0] transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

        {/* Map & Quick Message Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Google Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1E3A1F]">
                  Google Maps Location
                </h3>
                <p className="text-xs text-[#6F7D6E]">
                  Located at Sector 5, R.K. Puram, New Delhi
                </p>
              </div>

              <a
                href={NURSERY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#2D5A27] hover:underline"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-16/10 border border-[#E2D9CB] bg-[#F2EDE5]">
              <iframe
                title="Flowering Pot Location Map"
                src={NURSERY_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#5A6859]">
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DE] flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#2D5A27]" />
                <span>Delivery across New Delhi & NCR</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DE] flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#FF87B2]" />
                <a href={NURSERY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram: @floweringpot.delhi
                </a>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Inquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DEC9] shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
              Instant Connect
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1E3A1F] mt-1 mb-2">
              Send An Enquiry
            </h3>
            <p className="text-xs text-[#6F7D6E] mb-5">
              Fill in what you're looking for, and we'll format a message ready to send straight to Nikhil on WhatsApp.
            </p>

            <form onSubmit={handleSendFormWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#465445] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Aarti Sharma"
                  className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs text-[#1E3A1F] focus:outline-none focus:border-[#2D5A27]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#465445] mb-1">
                  I am interested in
                </label>
                <select
                  value={formInterest}
                  onChange={(e) => setFormInterest(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs text-[#1E3A1F] focus:outline-none focus:border-[#2D5A27]"
                >
                  <option value="Indoor Air Purifying Plants">Indoor Air Purifying Plants</option>
                  <option value="Outdoor & Flowering Plants">Outdoor & Flowering Plants</option>
                  <option value="Succulents & Desk Plants">Succulents & Desk Plants</option>
                  <option value="Fruit Plants & Trees">Fruit Plants & Trees</option>
                  <option value="Balcony Gardening Setup">Balcony Gardening Setup</option>
                  <option value="Garden Maintenance & Soil Service">Garden Maintenance & Soil Service</option>
                  <option value="Plant Doctor / Consultation">Plant Doctor / Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#465445] mb-1">
                  Questions or details (optional)
                </label>
                <textarea
                  rows="3"
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="e.g. Need 4 pots for an east-facing balcony in Vasant Vihar..."
                  className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-xl px-3.5 py-2.5 text-xs text-[#1E3A1F] focus:outline-none focus:border-[#2D5A27]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Open in WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
