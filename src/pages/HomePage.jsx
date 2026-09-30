import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { usePlants } from '../context/PlantContext';
import { NURSERY_INFO, getWhatsAppUrl, getCallUrl } from '../data/nurseryInfo';
import { CATEGORIES, NURSERY_SERVICES, TESTIMONIALS, NURSERY_GALLERY } from '../data/plants';
import { PlantCard } from '../components/PlantCard';
import { 
  Sprout, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Phone, 
  ShieldCheck, 
  SunMedium, 
  Truck, 
  Sparkles,
  Heart,
  Star,
  ExternalLink,
  ChevronRight,
  TreeDeciduous,
  Flower2,
  Trees
} from 'lucide-react';

export const HomePage = () => {
  const { navigate } = useNavigation();
  const { plants } = usePlants();

  // Pick featured plants (or fallback to first 4 if none explicitly featured)
  const featuredPlants = plants.filter((p) => p.isFeatured).slice(0, 4);
  const displayFeatured = featuredPlants.length > 0 ? featuredPlants : plants.slice(0, 4);

  // Popular category cards with images
  const popularCategories = [
    {
      name: "Indoor Plants",
      desc: "Air-purifying foliage for living rooms & workspaces",
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
      tag: "Top Selling"
    },
    {
      name: "Flowering Plants",
      desc: "Vibrant Bougainvillea, Mogra, Hibiscus & seasonal blooms",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=600&q=80",
      tag: "Fragrant & Colorful"
    },
    {
      name: "Outdoor Plants",
      desc: "Sun-hardy palms, shrubs & boundary hedges for Delhi",
      image: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=600&q=80",
      tag: "Hardy & Resilient"
    },
    {
      name: "Succulents",
      desc: "Drought-tolerant Jades, Aloes, Haworthias & miniature pots",
      image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      tag: "Low Maintenance"
    },
    {
      name: "Fruit Plants",
      desc: "Kagzi Nimbu, Allahabad Guava dwarf grafted saplings",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
      tag: "Balcony Harvest"
    },
    {
      name: "Trees",
      desc: "Medicinal Neem, Sacred Peepal bonsai & shade species",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      tag: "Long-lived"
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen">

      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#EBE3D7]">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D5A27]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C17743]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-[#E9F3E8] border border-[#C5E0C3] text-[#2D5A27] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                <Sprout className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Sector 5, R.K. Puram • Local Plant Nursery</span>
              </div>

              {/* Exact required Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B3419] tracking-tight leading-[1.15]">
                Bring More Green <br className="hidden sm:block" />
                <span className="italic font-normal text-[#2D5A27]">Into Your Space</span>
              </h1>

              {/* Exact required Subheadline */}
              <p className="text-base sm:text-lg text-[#556354] leading-relaxed max-w-xl">
                Discover beautiful indoor and outdoor plants from Flowering Pot. Handpicked, seasoned for Delhi's climate, and delivered with personal plant care guidance.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => navigate('catalog')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#2D5A27] hover:bg-[#23481E] text-white px-7 py-4 rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Browse Plants</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-7 py-4 rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Trust micro metrics */}
              <div className="pt-6 border-t border-[#E8E1D5] grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <div className="font-serif text-2xl font-bold text-[#1E3A1F]">3+ Years</div>
                  <div className="text-xs text-[#6F7D6E]">Delhi Nursery Exp.</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#1E3A1F]">100%</div>
                  <div className="text-xs text-[#6F7D6E]">Acclimatized Plants</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#1E3A1F]">Instant</div>
                  <div className="text-xs text-[#6F7D6E]">WhatsApp Support</div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visuals */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Large Visual Card */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/5 bg-[#E6E1D8] relative">
                  <img
                    src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1000&q=80"
                    alt="Flowering Pot Nursery in R.K. Puram"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-[#25D366] text-white px-2.5 py-0.5 rounded-full inline-block mb-2">
                      Local Delhi Nursery
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                      Flowering Pot • R.K. Puram
                    </h3>
                    <p className="text-xs text-[#D8E6D7] mt-1">
                      Direct consultation with founder Nikhil Kanojiya
                    </p>
                  </div>
                </div>

                {/* Floating pill badge 1: Climate Ready */}
                <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-[#E3DCD2] flex items-center gap-3 max-w-[210px] animate-in fade-in duration-500">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F3E7] text-[#2D5A27] flex items-center justify-center shrink-0">
                    <SunMedium className="w-5 h-5 text-[#2D5A27]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1E3A1F]">Delhi Weather Ready</div>
                    <div className="text-[10px] text-[#717E70]">No sudden leaf drop</div>
                  </div>
                </div>

                {/* Floating pill badge 2: WhatsApp directly */}
                <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E3DCD2] flex items-center gap-3 max-w-[230px]">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1E3A1F]">No Cart Confusion</div>
                    <div className="text-[10px] text-[#717E70]">Chat & confirm on WhatsApp</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          POPULAR CATEGORIES SECTION
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
                Tailored for every space
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3419] mt-1">
                Popular Plant Categories
              </h2>
            </div>
            <button
              onClick={() => navigate('catalog')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D5A27] hover:text-[#1E3A1F] transition-colors"
            >
              <span>View All Categories</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5">
            {popularCategories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => navigate('catalog', { category: cat.name })}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#E4DDD1] hover:border-[#2D5A27] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="aspect-square w-full overflow-hidden bg-[#E8E1D5] relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-2 left-2 text-[10px] font-semibold bg-white/90 text-[#2D5A27] px-2 py-0.5 rounded-full">
                    {cat.tag}
                  </span>
                </div>

                <div className="p-3">
                  <h3 className="font-serif font-bold text-sm text-[#1E3A1F] group-hover:text-[#2D5A27] transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-[#717E70] line-clamp-1 mt-0.5">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          FEATURED PLANTS SECTION
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#F4EFE7] border-y border-[#E6DEC $\rightarrow$ E6DEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
                Nursery Handpicked
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3419] mt-1">
                Featured Plants
              </h2>
              <p className="text-sm text-[#5D6B5C] mt-1">
                Healthy, mature specimens ready to thrive in your Delhi home.
              </p>
            </div>

            <button
              onClick={() => navigate('catalog')}
              className="inline-flex items-center gap-2 bg-[#2D5A27] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#20401C] transition-colors"
            >
              <span>Explore All {plants.length} Plants</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayFeatured.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          SHORT INTRODUCTION TO THE NURSERY
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Mosaic */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-lg aspect-4/5 bg-[#E8E1D5]">
                    <img
                      src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80"
                      alt="Nursery grounds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl p-5 bg-[#2D5A27] text-white">
                    <div className="font-serif text-3xl font-bold">100%</div>
                    <div className="text-xs text-[#C8E1C5] mt-1">
                      Delhi-weather acclimatized so your plants stay alive.
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl p-5 bg-[#FAF1E6] border border-[#E3D8C8]">
                    <div className="text-xs uppercase font-bold text-[#A45E33]">
                      Founder Led
                    </div>
                    <div className="font-serif text-lg font-bold text-[#2A231C] mt-1">
                      {NURSERY_INFO.owner}
                    </div>
                    <p className="text-xs text-[#736A60] mt-1">
                      Personally inspecting each plant before you take it home.
                    </p>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-lg aspect-4/5 bg-[#E8E1D5]">
                    <img
                      src="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80"
                      alt="Plant nursery potting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Intro Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#3B6636]">
                <Sprout className="w-4 h-4 text-[#25D366]" />
                About Flowering Pot
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3419] leading-tight">
                A Neighborhood Nursery Built On Trust & Green Passion
              </h2>

              <p className="text-[#556354] leading-relaxed text-sm sm:text-base">
                Welcome to <strong>{NURSERY_INFO.name}</strong>, nestled in Sector 5, R.K. Puram, New Delhi. For the past {NURSERY_INFO.yearsExperience}, we have been curating resilient houseplants, fragrant blooms, and lush balcony flora for homeowners and garden lovers across South Delhi.
              </p>

              <p className="text-[#556354] leading-relaxed text-sm sm:text-base">
                Unlike mass-market e-commerce platforms that ship suffocated plants in cardboard courier boxes, we operate as a genuine local nursery. Every plant you choose is grown in nutrient-dense organic compost, conditioned to handle Delhi’s scorching summers and winter chill, and delivered directly to your doorstep.
              </p>

              {/* Founder quote */}
              <div className="p-5 rounded-2xl bg-[#F0EAE0] border-l-4 border-[#2D5A27]">
                <p className="text-sm italic text-[#394838]">
                  "When you connect with Flowering Pot on WhatsApp, you're not speaking with an automated bot. You are chatting directly with me, Nikhil. Tell me about your sunlight, your balcony, or your room, and I will recommend what will actually flourish."
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1B3419]">— {NURSERY_INFO.owner}, Nursery Owner</span>
                  <span className="text-xs text-[#6F7D6E]">R.K. Puram, New Delhi</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigate('about')}
                  className="inline-flex items-center gap-2 bg-[#2D5A27] hover:bg-[#20401C] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2D5A27] font-semibold text-sm hover:underline"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chat With Nikhil on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          NURSERY BENEFITS & SERVICES
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#F4EFE7] border-y border-[#E6DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
              Why Customers Choose Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3419] mt-1">
              Local Nursery Services Done Right
            </h2>
            <p className="text-sm text-[#5D6B5C] mt-2">
              From potted plants to balcony makeovers and routine garden care in New Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NURSERY_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-3xl p-6 border border-[#E5DEC $\rightarrow$ E5DEC] border-[#E5DEC9] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F3E7] text-[#2D5A27] flex items-center justify-center mb-5">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1E3A1F] mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#5C6A5B] leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(null, true, `Hi Nikhil, I would like to enquire about your '${srv.title}' service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D5A27] hover:text-[#184214] pt-2 border-t border-[#F0EAE1]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-3 h-3 ml-auto" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('services')}
              className="inline-flex items-center gap-2 bg-[#2D5A27] hover:bg-[#20401C] text-white px-7 py-3 rounded-full text-sm font-semibold transition-all shadow-md"
            >
              <span>Explore All Nursery Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          CUSTOMER TESTIMONIALS
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
              Real Local Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3419] mt-1">
              Loved By Delhi Gardeners
            </h2>
            <p className="text-sm text-[#5D6B5C] mt-2">
              See what residents of R.K. Puram, Vasant Vihar & South Delhi have to say about Flowering Pot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border border-[#EAE3D6] shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3 text-[#E6A023]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-[#4E5C4D] leading-relaxed italic mb-4">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2ECE3]">
                  <div className="font-bold text-xs text-[#1E3A1F]">{t.name}</div>
                  <div className="text-[11px] text-[#7A8A78] flex items-center justify-between mt-0.5">
                    <span>{t.location}</span>
                    <span className="text-[10px] text-[#A2ADA0]">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          NURSERY GALLERY PHOTOS
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#F4EFE7] border-y border-[#E6DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
                A Glimpse Into Our Nursery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3419] mt-1">
                Flowering Pot Nursery Gallery
              </h2>
            </div>
            <a
              href={NURSERY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D5A27] hover:underline"
            >
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {NURSERY_GALLERY.map((g, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden aspect-4/3 bg-[#E8E1D5] shadow-xs"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A7CEA5] block">
                    {g.category}
                  </span>
                  <p className="font-serif text-xs sm:text-sm font-bold text-white line-clamp-1">
                    {g.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          LOCATION SECTION
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Location Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#52784F] font-bold">
                Visit Us In Person
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B3419]">
                Come Walk Through Our Green Oasis
              </h2>

              <p className="text-sm text-[#556354] leading-relaxed">
                Nothing beats choosing your plant in person. Smell the Mogra blossoms, touch the textured foliage, and chat with Nikhil about which plants will flourish in your specific lighting conditions.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E6DFD4] shadow-xs">
                  <MapPin className="w-5 h-5 text-[#2D5A27] mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-[#1E3A1F]">Nursery Address</div>
                    <div className="text-xs text-[#5D6B5C] mt-0.5">{NURSERY_INFO.address}</div>
                    <div className="text-[11px] text-[#869584] mt-0.5">{NURSERY_INFO.fullAddress}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E6DFD4] shadow-xs">
                  <Clock className="w-5 h-5 text-[#2D5A27] mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-[#1E3A1F]">Opening Hours</div>
                    <div className="text-xs text-[#5D6B5C] mt-0.5">{NURSERY_INFO.openingHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E6DFD4] shadow-xs">
                  <Truck className="w-5 h-5 text-[#2D5A27] mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-[#1E3A1F]">Delivery Coverage</div>
                    <div className="text-xs text-[#5D6B5C] mt-0.5">{NURSERY_INFO.deliveryAreas}</div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={NURSERY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2D5A27] hover:bg-[#20401C] text-white px-5 py-3 rounded-full text-xs font-semibold shadow-sm transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={getCallUrl()}
                  className="inline-flex items-center gap-2 bg-[#EAE2D5] hover:bg-[#DFD6C7] text-[#2D5A27] px-5 py-3 rounded-full text-xs font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {NURSERY_INFO.phone}</span>
                </a>
              </div>

            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-16/10 bg-[#E8E1D5] relative">
                <iframe
                  title="Flowering Pot Location in Sector 5 RK Puram New Delhi"
                  src={NURSERY_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          STRONG WHATSAPP CTA
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#244122] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-[#1B3419] text-[#A7CEA5] px-3.5 py-1.5 rounded-full mb-4">
            <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
            Direct Nursery Owner Enquiry
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Looking for a specific plant or advice?
          </h2>

          <p className="text-[#C8DBC6] text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Message Nikhil Kanojiya directly on WhatsApp at <strong>{NURSERY_INFO.phone}</strong>. We can share fresh photos of currently available stock, advise on light needs, and arrange delivery in New Delhi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(null, true, "Hi Nikhil, I saw your Flowering Pot website and would like to ask about plant availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base px-8 py-4 rounded-full shadow-xl transition-transform hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Us: {NURSERY_INFO.phone}</span>
            </a>

            <button
              onClick={() => navigate('catalog')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-base px-7 py-4 rounded-full transition-colors w-full sm:w-auto"
            >
              <span>Explore Complete Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
