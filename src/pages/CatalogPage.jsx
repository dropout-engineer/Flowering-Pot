import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { usePlants } from '../context/PlantContext';
import { CATEGORIES } from '../data/plants';
import { NURSERY_INFO, getWhatsAppUrl } from '../data/nurseryInfo';
import { PlantCard } from '../components/PlantCard';
import { 
  Search, 
  X, 
  Filter, 
  SlidersHorizontal, 
  MessageCircle, 
  Sprout, 
  ArrowUpDown,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const CatalogPage = () => {
  const { route, navigate } = useNavigation();
  const { plants } = usePlants();

  // Search and filter states initialized from route query if available
  const [searchQuery, setSearchQuery] = useState(route.search || '');
  const [selectedCategory, setSelectedCategory] = useState(route.category || 'All Plants');
  const [availabilityFilter, setAvailabilityFilter] = useState('all'); // 'all' | 'available'
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-asc' | 'price-desc' | 'name'

  // Sync category if route changed externally
  React.useEffect(() => {
    if (route.category && route.category !== selectedCategory) {
      setSelectedCategory(route.category);
    }
  }, [route.category]);

  // Compute filtered & sorted plants
  const filteredPlants = useMemo(() => {
    return plants
      .filter((plant) => {
        // Category filter
        const matchCategory =
          selectedCategory === 'All Plants' ||
          plant.category.toLowerCase() === selectedCategory.toLowerCase();

        // Search query filter (matches name, botanical name, category, or description)
        const q = searchQuery.trim().toLowerCase();
        const matchSearch =
          !q ||
          plant.name.toLowerCase().includes(q) ||
          (plant.botanicalName && plant.botanicalName.toLowerCase().includes(q)) ||
          plant.category.toLowerCase().includes(q) ||
          (plant.shortDescription && plant.shortDescription.toLowerCase().includes(q));

        // Availability filter
        const matchAvailability =
          availabilityFilter === 'all' ||
          (availabilityFilter === 'available' && plant.availability === 'Available');

        return matchCategory && matchSearch && matchAvailability;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        // Default: featured first, then name
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }, [plants, selectedCategory, searchQuery, availabilityFilter, sortBy]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Plants');
    setAvailabilityFilter('all');
    setSortBy('featured');
    navigate('catalog');
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#4C7549] font-bold mb-2">
            <Sprout className="w-4 h-4 text-[#25D366]" />
            Direct Nursery Stock • R.K. Puram
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3419] tracking-tight">
            Our Plant Catalogue
          </h1>
          <p className="text-sm sm:text-base text-[#556354] mt-2 leading-relaxed">
            Browse healthy potted plants acclimatized to Delhi weather. Every plant is backed by direct WhatsApp advice and doorstep delivery in New Delhi.
          </p>
        </div>

        {/* Search & Main Controls Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E5DEC9] shadow-xs mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            
            {/* Search Input (Takes 7 cols on md) */}
            <div className="md:col-span-7 relative">
              <Search className="w-5 h-5 text-[#889786] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search plants by name, botanical variety or category..."
                className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-full pl-11 pr-10 py-3 text-sm text-[#1E3A1F] placeholder-[#889786] focus:outline-none focus:border-[#2D5A27] focus:ring-1 focus:ring-[#2D5A27] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#889786] hover:text-[#1E3A1F]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Availability Filter Toggle (2 cols on md) */}
            <div className="md:col-span-2.5">
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-full px-4 py-3 text-xs sm:text-sm text-[#1E3A1F] focus:outline-none focus:border-[#2D5A27]"
              >
                <option value="all">All Availability</option>
                <option value="available">In Stock Only</option>
              </select>
            </div>

            {/* Sort Options (2.5 cols on md) */}
            <div className="md:col-span-2.5">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#DDD5C7] rounded-full px-4 py-3 text-xs sm:text-sm text-[#1E3A1F] focus:outline-none focus:border-[#2D5A27]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Alphabetical (A-Z)</option>
              </select>
            </div>

          </div>

          {/* Category Filter Pills (Scrollable horizontal bar) */}
          <div className="pt-2 border-t border-[#F0EAE1]">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
                const count = cat === 'All Plants' 
                  ? plants.length 
                  : plants.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length;

                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      navigate('catalog', { category: cat === 'All Plants' ? '' : cat, search: searchQuery });
                    }}
                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#2D5A27] text-white shadow-sm'
                        : 'bg-[#F2ECE1] text-[#425040] hover:bg-[#E7DFC $\rightarrow$ E7DFC] hover:bg-[#E7DFC8]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-[#637261]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Metadata & Clear Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div className="text-xs sm:text-sm text-[#5D6B5C]">
            Showing <strong className="text-[#1E3A1F] font-semibold">{filteredPlants.length}</strong> {filteredPlants.length === 1 ? 'plant' : 'plants'}
            {selectedCategory !== 'All Plants' && (
              <span> in <span className="font-semibold text-[#2D5A27]">"{selectedCategory}"</span></span>
            )}
            {searchQuery && (
              <span> matching <span className="font-semibold text-[#2D5A27]">"{searchQuery}"</span></span>
            )}
          </div>

          {(selectedCategory !== 'All Plants' || searchQuery || availabilityFilter !== 'all') && (
            <button
              onClick={clearAllFilters}
              className="text-xs font-semibold text-[#8C3A27] hover:underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Plant Cards Grid */}
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-[#E5DEC9] shadow-xs max-w-2xl mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-[#F3EFEA] text-[#2D5A27] flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-8 h-8 text-[#5D8B5B]" />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E3A1F] mb-2">
              No plants found matching your search
            </h3>

            <p className="text-xs sm:text-sm text-[#5F6E5E] max-w-md mx-auto mb-6 leading-relaxed">
              We frequently stock additional varieties directly at our R.K. Puram nursery that might not be listed yet. WhatsApp nursery founder Nikhil Kanojiya directly!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppUrl(null, true, `Hi Nikhil, I searched for "${searchQuery || selectedCategory}" on your website. Do you have this plant or something similar available?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-full text-xs font-semibold shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Ask Nikhil on WhatsApp</span>
              </a>

              <button
                onClick={clearAllFilters}
                className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold bg-[#EFE9DF] text-[#2D5A27] hover:bg-[#DFD6C7] transition-colors"
              >
                View All Plants
              </button>
            </div>
          </div>
        )}

        {/* Bottom Nursery WhatsApp Banner */}
        <div className="mt-16 bg-[#F3EFE7] rounded-3xl p-6 sm:p-8 border border-[#E3DCD0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E3A1F] mb-1">
              Want plants sourced or potted in custom planters?
            </h3>
            <p className="text-xs sm:text-sm text-[#5D6B5C]">
              We source specific exotic specimens, arrange bulk terrace pots, and prepare customized nutrient soil mixes. Contact Nikhil at <strong>{NURSERY_INFO.phone}</strong>.
            </p>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 rounded-full text-sm font-semibold shadow-md transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Custom Request</span>
          </a>
        </div>

      </div>
    </div>
  );
};
